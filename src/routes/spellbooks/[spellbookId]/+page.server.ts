import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, locals, params }) => {
	const session = await locals.auth.validate();
	if (!session) redirect(307, '/login');

	const userId = session.user.userId;

	const spellbookRes = await fetch(
		`/api/spellbooks/${params.spellbookId}?user_id=${session.user.userId}`
	);

	const spellbookItem = await spellbookRes.json();

	return { spellbookItem, userId };
}) satisfies PageServerLoad;
