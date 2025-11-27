// src/routes/api/auth/telegram/+server.ts
import type { RequestHandler } from './$types';
import { sessions } from '$lib/sessions';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const { telegram_id, username, sessionId } = data;

	if (!sessionId || !telegram_id) {
		return new Response('Missing data', { status: 400 });
	}

	sessions[sessionId] = {
		telegram_id,
		username,
		authorized: true
	};

	console.log('User authorized:', sessions[sessionId]);

	return new Response('OK');
};
