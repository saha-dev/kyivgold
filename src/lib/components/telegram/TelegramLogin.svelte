<script lang="ts">
	import { onMount } from 'svelte';
	let sessionId: string;
	let waiting = $state(false);
	let authorized = $state(false);

	onMount(() => {
		sessionId = crypto.randomUUID();
	});

	function startLogin() {
		waiting = true;

		window.open(`https://t.me/kyivgoldbot?start=id_${sessionId}`, '_blank');

		const evtSource = new EventSource(`/api/auth/sse?sessionId=${sessionId}`);

		evtSource.addEventListener('authorized', (event) => {
			const data = JSON.parse(event.data);
			console.log('User authorized:', data);
			evtSource.close();
			authorized = true;
			waiting = false;
		});

		evtSource.onerror = () => {
			console.error('SSE connection lost');
			evtSource.close();
			waiting = false;
		};
	}
</script>

{#if authorized}
	<p>Вы авторизованы ✅</p>
{:else if waiting}
	<p>Ждём подтверждения в Telegram...</p>
{:else}
	<button onclick={startLogin}>Login via Telegram</button>
{/if}
