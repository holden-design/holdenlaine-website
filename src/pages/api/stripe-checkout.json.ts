import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import * as fs from 'fs';
import * as path from 'path';

const stripeKey = import.meta.env.STRIPE_SECRET_KEY;

// Disable prerendering for this API endpoint
export const prerender = false;

// Helper function to save customer data
async function saveCustomerData(data: any) {
  try {
    const timestamp = new Date().toISOString();
    const fileName = `giftcard_${Date.now()}.json`;
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'src', 'data', 'giftcard_orders');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Save the customer data
    const fileContent = {
      timestamp,
      ...data
    };
    
    fs.writeFileSync(
      path.join(dataDir, fileName),
      JSON.stringify(fileContent, null, 2)
    );
    
    console.log('Customer data saved to:', fileName);
  } catch (error) {
    console.error('Error saving customer data:', error);
  }
}

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405 }
    );
  }

  if (!stripeKey) {
    console.error('STRIPE_SECRET_KEY is not configured');
    return new Response(
      JSON.stringify({ error: 'Stripe not configured - contact administrator' }),
      { status: 500 }
    );
  }

  try {
    console.log('=== Stripe Checkout Request Started ===');
    console.log('Stripe key available:', stripeKey ? 'YES' : 'NO');
    
    const stripe = new Stripe(stripeKey);
    const body = await request.json();
    
    console.log('Request data received:', {
      giftCardAmount: body.giftCardAmount,
      buyerName: body.buyerName,
      buyerEmail: body.buyerEmail,
      hasPhone: !!body.buyerPhone,
      requestDelivery: body.requestDelivery
    });
    
    const { 
      giftCardAmount, 
      buyerName, 
      buyerEmail, 
      buyerPhone, 
      requestDelivery,
      buyerAddress,
      buyerCity,
      buyerPostalCode,
      buyerCountry,
      successUrl, 
      cancelUrl 
    } = body;

    if (!giftCardAmount || !buyerName || !buyerEmail || !successUrl || !cancelUrl) {
      console.error('Missing required fields:', {
        giftCardAmount: !!giftCardAmount,
        buyerName: !!buyerName,
        buyerEmail: !!buyerEmail,
        successUrl: !!successUrl,
        cancelUrl: !!cancelUrl
      });
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    console.log('Creating Stripe session for amount:', giftCardAmount);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Holden Laine Photography Gift Card - €${giftCardAmount}`,
              description: 'Digital gift card for photography sessions',
              images: [],
            },
            unit_amount: giftCardAmount * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      payment_intent_data: {
        metadata: {
          giftCardAmount: giftCardAmount.toString(),
          buyerName: buyerName.substring(0, 50),
          buyerPhone: (buyerPhone || '').substring(0, 20),
          requestDelivery: requestDelivery ? 'yes' : 'no',
          deliveryAddress: requestDelivery ? `${buyerAddress}, ${buyerCity}, ${buyerPostalCode}, ${buyerCountry}`.substring(0, 500) : '',
        },
      },
      customer_email: buyerEmail,
    });

    console.log('Stripe session created:', session.id);

    // Save customer data
    await saveCustomerData({
      giftCardAmount,
      buyerName,
      buyerEmail,
      buyerPhone,
      requestDelivery,
      buyerAddress,
      buyerCity,
      buyerPostalCode,
      buyerCountry,
      sessionId: session.id
    });

    console.log('Customer data saved successfully');
    console.log('Returning checkout URL:', !!session.url);

    // Return both sessionId and the Stripe-generated checkout URL
    return new Response(
      JSON.stringify({ 
        sessionId: session.id,
        url: session.url,
        success: true
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('=== Stripe Error ===');
    console.error('Error object:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error message:', errorMessage);
    
    if (error instanceof Stripe.errors.StripeError) {
      console.error('Stripe API Error:', {
        type: error.type,
        param: error.param,
        code: error.code
      });
    }
    
    return new Response(
      JSON.stringify({ 
        error: `Failed to create checkout session: ${errorMessage}`,
        details: error instanceof Error ? error.message : undefined
      }),
      { status: 500 }
    );
  }
};
