import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const spellbooks = await prisma.spellbook.findMany({
		where: {
			user_id: session.user.userId
		}
	});

	return { spellbooks };
}) satisfies PageServerLoad;
