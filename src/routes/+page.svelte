<script lang="ts">
	import TelegramLogin from '$lib/components/telegram/TelegramLogin.svelte';
	const { data } = $props();
	const { isMobile, ua } = data;
</script>

<h3>{!isMobile ? 'PC' : 'Mobile'}</h3>
<h4>{ua}</h4>
<TelegramLogin />
