<script lang="ts">
	import ActionIcon from '$lib/ui/ActionIcon.svelte';
	import Logo from '$lib/components/icons/Logo.svelte';
	import Menu from '$lib/components/menu/Menu.svelte';
	import MenuButton from '$lib/components/menu/MenuButton.svelte';

	let isMenuOpen = $state(false);
	function closeMenu() {
		isMenuOpen = false;
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="header-block">
	<div class="header-content">
		<div class="logo-menu">
			<div class="logo">
				<ActionIcon icon={Logo} stretch={true} href="/" />
			</div>
			<div class="menu-block">
				<MenuButton {isMenuOpen} {toggleMenu} />
				<Menu {isMenuOpen} close={closeMenu} />
			</div>
		</div>
	</div>
</div>

<style>
	.header-block {
		width: 100%;
		height: 54px;
	}

	.header-content {
		margin: 0px auto;
		max-width: 1024px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo-menu {
		display: flex;
		align-items: center;
	}

	.logo {
		color: var(--main-color);
		margin-right: 8px;
		width: 40px;
		height: 40px;
	}

	.menu-block {
		position: relative;
		flex-shrink: 0;
	}
</style>
