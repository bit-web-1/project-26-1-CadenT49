import {
  exchangeNpssoForAccessCode,
  exchangeAccessCodeForAuthTokens,
  getUserTitles
} from "psn-api";

import { NPSSO } from "$env/static/private";

export async function load() {
  try {
    const accessCode = await exchangeNpssoForAccessCode(NPSSO);

    const authorization =
      await exchangeAccessCodeForAuthTokens(accessCode);

    const response = await getUserTitles(authorization, "me");

    return {
      games: response?.trophyTitles ?? []
    };
  } catch (err) {
    console.error("PSN API error:", err);

    return {
      games: []
    };
  }

  
}