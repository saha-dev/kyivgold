<script lang="ts">
	const { isMenuOpen, toggleMenu } = $props();
</script>

<button
	class="menu-button"
	class:is-open={isMenuOpen}
	aria-expanded={isMenuOpen}
	aria-controls="main-category-menu"
	onclick={toggleMenu}
>
	<!-- text -->
	<div class="button-line line-top"></div>
	<div class="button-line line-middle"></div>
	<div class="button-line line-bottom"></div>
</button>

<style>
	.menu-button {
		width: 40px;
		height: 40px;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 2;
		transition: transform 0.3s;
		transition: color 0.2s ease;
		flex-shrink: 0; /* Не давать кнопке сжиматься */
	}

	.menu-button:hover {
		/* opacity: 0.8; */
		filter: brightness(90%);
	}

	.button-line {
		display: block;
		width: 28px;
		height: 3px;
		background-color: var(--main-color, #333);
		border-radius: 2px;
		margin: 3px 0;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
	}

	.menu-button.is-open .line-top {
		transform: translateY(9px) rotate(45deg);
	}

	.menu-button.is-open .line-middle {
		opacity: 0;
	}

	.menu-button.is-open .line-bottom {
		transform: translateY(-9px) rotate(-45deg);
	}
</style>
