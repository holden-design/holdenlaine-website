import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripeKey = import.meta.env.STRIPE_SECRET_KEY;

// Disable prerendering for this API endpoint
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405 }
    );
  }

  if (!stripeKey) {
    return new Response(
      JSON.stringify({ error: 'Stripe configuration not set' }),
      { status: 500 }
    );
  }

  try {
    // Log request for debugging
    console.log('Received POST request to /api/stripe-checkout.json');
    console.log('Request headers:', request.headers.get('content-type'));
    
    const stripe = new Stripe(stripeKey);

    const body = await request.json();
    console.log('Parsed body:', body);
    
    const { giftCardAmount, successUrl, cancelUrl } = body;

    if (!giftCardAmount || !successUrl || !cancelUrl) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

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
      metadata: {
        giftCardAmount: giftCardAmount.toString(),
      },
    });

    // Return both sessionId and the Stripe-generated checkout URL
    return new Response(
      JSON.stringify({ 
        sessionId: session.id,
        url: session.url
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Stripe error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create checkout session' }),
      { status: 500 }
    );
  }
};
