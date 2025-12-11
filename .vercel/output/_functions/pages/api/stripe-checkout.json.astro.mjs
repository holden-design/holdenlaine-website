import Stripe from 'stripe';
export { renderers } from '../../renderers.mjs';

const stripeKey = "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";
const prerender = false;
const POST = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405 }
    );
  }
  try {
    console.log("Received POST request to /api/stripe-checkout.json");
    console.log("Request headers:", request.headers.get("content-type"));
    const stripe = new Stripe(stripeKey);
    const body = await request.json();
    console.log("Parsed body:", body);
    const { giftCardAmount, successUrl, cancelUrl } = body;
    if (!giftCardAmount || !successUrl || !cancelUrl) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Holden Laine Photography Gift Card - €${giftCardAmount}`,
              description: "Digital gift card for photography sessions",
              images: []
            },
            unit_amount: giftCardAmount * 100
            // Stripe uses cents
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        giftCardAmount: giftCardAmount.toString()
      }
    });
    return new Response(
      JSON.stringify({
        sessionId: session.id,
        url: session.url
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Stripe error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create checkout session" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
