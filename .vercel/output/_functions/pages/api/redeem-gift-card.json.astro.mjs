export { renderers } from '../../renderers.mjs';

const giftcards = [
	{
		code: "01-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "02-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "03-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "04-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "05-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "06-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "07-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "08-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "09-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "10-1111",
		amount: 100,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "11-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "12-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "13-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "14-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "15-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "16-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "17-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "18-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "19-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	},
	{
		code: "20-1111",
		amount: 150,
		status: "active",
		createdAt: "2025-12-11",
		redeemedAt: null,
		redeemedBy: null
	}
];

const prerender = false;
const POST = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405 }
    );
  }
  try {
    const body = await request.json();
    const { code, email } = body;
    if (!code || !email) {
      return new Response(
        JSON.stringify({ error: "Code and email are required" }),
        { status: 400 }
      );
    }
    const giftcard = giftcards.find((gc) => gc.code === code.toUpperCase());
    if (!giftcard) {
      return new Response(
        JSON.stringify({ error: "Invalid gift card code" }),
        { status: 404 }
      );
    }
    if (giftcard.status === "redeemed") {
      return new Response(
        JSON.stringify({ error: "This gift card has already been redeemed" }),
        { status: 400 }
      );
    }
    giftcard.status = "redeemed";
    giftcard.redeemedAt = (/* @__PURE__ */ new Date()).toISOString();
    giftcard.redeemedBy = email;
    return new Response(
      JSON.stringify({
        success: true,
        message: `Gift card redeemed successfully! You have €${giftcard.amount} credit.`,
        amount: giftcard.amount,
        email
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Redemption error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to redeem gift card" }),
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
