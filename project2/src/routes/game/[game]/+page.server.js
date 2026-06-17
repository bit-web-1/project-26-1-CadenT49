import {
	exchangeNpssoForAccessCode,
	exchangeAccessCodeForAuthTokens,
	getUserTitles,
	getUserTrophiesEarnedForTitle,
	getUserTrophiesForSpecificTitle,
	getTitleTrophies
} from 'psn-api';

const NPSSO = 'Tp6exLOwxY9D0A6LRyBBi3bp6tJk9HI3B0vubIyKf72iGQ2A7PQk5OcwFNevuTKH';

export async function load({ params }) {
	const game = params.game;
	console.log(game);

	try {
		const accessCode = await exchangeNpssoForAccessCode(NPSSO);

		const authorization = await exchangeAccessCodeForAuthTokens(accessCode);

		const userTrophies = await getUserTrophiesEarnedForTitle(authorization, 'me', game, 'all');

		const titleTrophies = await getTitleTrophies(authorization, game, 'all');


		const userTrophyById = new Map(
			userTrophies.trophies.map((userTrophy) => [userTrophy.trophyId, userTrophy])
		);

		const trophies = titleTrophies.trophies.map((titleTrophy) => {
			const userTrophy = userTrophyById.get(titleTrophy.trophyId);

			return {
				...titleTrophy,
				...(userTrophy ?? {})
			};
		});

		console.log(trophies);

		return {
			games: trophies ?? []
		};
	} catch (err) {
		console.error('PSN API error:', err);

		return {
			games: []
		};
	}
}
