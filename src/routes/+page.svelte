<script lang="ts">
	import { onMount } from 'svelte';

	// Ця функція викликається Telegram після успішної авторизації
	function onTelegramAuth(user: any) {
		console.log('Авторизація успішна:', user);
	}

	onMount(() => {
		window.onTelegramAuth = onTelegramAuth;
	});
</script>

<div class="telegram-login-container">
	<h1>Увійдіть через Telegram</h1>
	<script
		async
		src="https://telegram.org/js/telegram-widget.js?22"
		data-telegram-login="kyivgoldbot"
		data-size="large"
		data-onauth="onTelegramAuth(user)"
		data-request-access="write"
	></script>
</div>
