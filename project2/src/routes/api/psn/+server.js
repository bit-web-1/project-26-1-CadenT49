import {
  exchangeNpssoForAccessCode,
  exchangeAccessCodeForAuthTokens
} from "psn-api";

import { NPSSO } from "$env/static/private";

export async function GET() {
  const accessCode = await exchangeNpssoForAccessCode(NPSSO);
  const authorization = await exchangeAccessCodeForAuthTokens(accessCode);

  return new Response(JSON.stringify(authorization));
}