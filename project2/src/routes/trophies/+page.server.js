import {
  exchangeNpssoForAccessCode,
  exchangeAccessCodeForAuthTokens,
  getUserTitles
} from "psn-api";

const NPSSO = "Tp6exLOwxY9D0A6LRyBBi3bp6tJk9HI3B0vubIyKf72iGQ2A7PQk5OcwFNevuTKH"

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