import type { APIRoute } from 'astro';
import giftcards from '../../data/giftcards.json';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405 }
    );
  }

  try {
    const body = await request.json();
    const { code, email } = body;

    if (!code || !email) {
      return new Response(
        JSON.stringify({ error: 'Code and email are required' }),
        { status: 400 }
      );
    }

    // Find the gift card
    const giftcard = giftcards.find((gc) => gc.code === code.toUpperCase());

    if (!giftcard) {
      return new Response(
        JSON.stringify({ error: 'Invalid gift card code' }),
        { status: 404 }
      );
    }

    if (giftcard.status === 'redeemed') {
      return new Response(
        JSON.stringify({ error: 'This gift card has already been redeemed' }),
        { status: 400 }
      );
    }

    // Mark as redeemed
    giftcard.status = 'redeemed';
    giftcard.redeemedAt = new Date().toISOString();
    giftcard.redeemedBy = email;

    return new Response(
      JSON.stringify({
        success: true,
        message: `Gift card redeemed successfully! You have €${giftcard.amount} credit.`,
        amount: giftcard.amount,
        email: email
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Redemption error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to redeem gift card' }),
      { status: 500 }
    );
  }
};
