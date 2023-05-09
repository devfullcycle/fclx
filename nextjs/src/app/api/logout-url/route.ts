import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirect = request.nextUrl.searchParams.get("redirect");

  if (!redirect) {
    return NextResponse.json(
      { error: "Missing redirect parameter" },
      { status: 400 }
    );
  }

  const url = `${
    process.env.KEYCLOAK_ISSUER
  }/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(
    redirect
  )}&client_id=${process.env.KEYCLOAK_CLIENT_ID}`;

  return NextResponse.json({ url })
}

export const dynamic = 'force-dynamic';