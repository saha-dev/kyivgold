<script lang="ts">
	import { onMount } from 'svelte';
	let state: string;
	let waiting = false;
	let authorized = false;

	onMount(() => {
		state = crypto.randomUUID(); // уникальный state
	});

	function startLogin() {
		waiting = true;

		// Открываем Telegram через ссылку с уникальным state
		window.open(`https://t.me/kyivgoldbot?start=${state}`, '_blank');

		// Подключаем SSE для отслеживания подтверждения
		const evtSource = new EventSource(`/api/auth/sse?state=${state}`);

		evtSource.addEventListener('authorized', (event) => {
			const data = JSON.parse(event.data);
			console.log('User authorized:', data);
			evtSource.close();

			// Меняем состояние, чтобы отобразить текст "Вы авторизованы"
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
	<button on:click={startLogin}>Login via Telegram</button>
{/if}
