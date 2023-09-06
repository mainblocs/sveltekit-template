<script lang="ts">
	import Header from '$src/components/Header.svelte';
	import "$src/styles/base.css"
	import "$src/styles/styles.css"
	import "$src/styles/typography.css"
	import { onMount } from 'svelte';
	import { readOnlyLayoutStore, toggleNav } from '$src/routes/store';
	import HeroSvg from '$src/components/HeroSvg.svelte';
	import Footer from '$src/components/Footer.svelte';

	onMount(() => {
		window.addEventListener('resize', function () {
			if (window.innerWidth > 768) {
				if ($readOnlyLayoutStore.isDropDownMenuShowing) {
					toggleNav();
				}
				let body = document.getElementsByClassName('bodyContainer');
				body[0].classList.remove('showNavNow');
			}
		});
	});
</script>

<Header />
<HeroSvg marginTop="mt-[200px]"/>
<main class="max-w-7xl mx-auto p-2 md:p-4 ">
	<div class="bodyContainer mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
		<slot />
	</div>
</main>
<Footer />
