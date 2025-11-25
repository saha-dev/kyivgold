<script lang="ts">
	function handlerLogin() {
		console.log('кнопка');
		//8367276457:AAHme_R21pjgAxz3g0Sk4DqQWiSfSJGEH1M
		window.Telegram.Login.auth({ bot_id: '8367276457', request_access: true }, (data) => {
			if (!data) {
				// failed
			}
			console.log('data', data);
		});
	}
</script>

<button onclick={handlerLogin}>Login via Telegram</button>
