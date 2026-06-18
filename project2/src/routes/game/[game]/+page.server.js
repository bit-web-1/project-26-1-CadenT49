import {
	exchangeNpssoForAccessCode,
	exchangeAccessCodeForAuthTokens,
	getUserTitles,
	getUserTrophiesEarnedForTitle,
	getTitleTrophies
} from 'psn-api';

const NPSSO = "Tp6exLOwxY9D0A6LRyBBi3bp6tJk9HI3B0vubIyKf72iGQ2A7PQk5OcwFNevuTKH";

function getNpServiceName(gameInfo) {
	if (gameInfo?.npServiceName) {
		return gameInfo.npServiceName;
	}

	const platform = gameInfo?.trophyTitlePlatform ?? '';

	if (platform.includes('PS5') && !platform.includes('PS4')) {
		return 'trophy2';
	}

	return 'trophy';
}

export async function load({ params }) {
	const npCommunicationId = params.game;

	try {
		const accessCode = await exchangeNpssoForAccessCode(NPSSO);
		const authorization = await exchangeAccessCodeForAuthTokens(accessCode);

		const userTitlesResponse = await getUserTitles(authorization, 'me', {
			limit: 800
		});

		const allGames = userTitlesResponse.trophyTitles ?? [];

		const currentGame = allGames.find(
			(game) => game.npCommunicationId === npCommunicationId
		);

		if (!currentGame) {
			return {
				game: null,
				trophies: []
			};
		}

		const npServiceName = getNpServiceName(currentGame);

		const trophyOptions = {
			npServiceName,
			limit: 800
		};

		const [userTrophies, titleTrophies] = await Promise.all([
			getUserTrophiesEarnedForTitle(
				authorization,
				'me',
				npCommunicationId,
				'all',
				trophyOptions
			),

			getTitleTrophies(
				authorization,
				npCommunicationId,
				'all',
				trophyOptions
			)
		]);

		const userTrophyById = new Map(
			userTrophies.trophies.map((userTrophy) => [
				userTrophy.trophyId,
				userTrophy
			])
		);

		const trophies = titleTrophies.trophies.map((titleTrophy) => {
			const userTrophy = userTrophyById.get(titleTrophy.trophyId);

			return {
				...titleTrophy,
				...(userTrophy ?? {})
			};
		});

		return {
			game: currentGame,
			trophies
		};
	} catch (err) {
		console.error('PSN API error:', err);

		return {
			game: null,
			trophies: []
		};
	}
}