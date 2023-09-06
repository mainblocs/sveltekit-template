
<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { readOnlyLayoutStore, toggleNav, toggleTheme } from "$src/routes/store";
	import WhiteLogo from "./WhiteLogo.svelte";
	import DarkLogo from "./DarkLogo.svelte";
	let navItems = [
		{
			name: "about",
			href: "/about"
		},
		{
			name: "work",
			href: "/work"
		},
		{
			name: "blogs",
			href: "/blog"
		},
		{
			name: "contact",
			href: "/contact"
		},
	]
</script>
<style>
</style>
<header class="w-full flex flex-col items-center justify-center">
	<div  class="flex w-full justify-between items-center  h-[100px] bg-white fixed top-0 left-0 right-0 z-[50]  max-w-7xl mx-auto">
		<nav class="flex w-full justify-between  md:items-center p-2 md:px-8 md:py-4 z-[10000]">
			<a class="w-[200px]" href="/">
				<DarkLogo />
			</a>
			<div class="leftHeader w-[70%] text-right flex items-center justify-end gap-8">
                <a  href="/contact"  class="hidden bg-black text-white hover:opacity-90 flex-items sm:flex justify-center sm:min-w-[200px] py-4 px-6 z-[105]">
					Contact
				</a>
				<button class="bg-white hover:bg-gray-300 rounded-[100%] h-12 w-12 p-2 z-[1000]" on:click={()=>toggleNav()}>
					{#if $readOnlyLayoutStore.isDropDownMenuShowing}
						<img  src="/icons/close.svg" alt="close" class="inline-block w-8 h-8" />
					{:else}
						<img  src="/icons/humburger.svg" alt="hamburger" class="inline-block w-8 h-8" />
					{/if}
				</button>
			</div>
			<!-- <ul class="hidden md:flex  w-full  items-center justify-end gap-8">
				{#each navItems as navItem, index}
					<li class="capitalize items-center justify-center">
						<a href={navItem.href} class="h-full w-full hover:bg-[#1B1212] flex items-center justify-center">
							<span>{navItem.name}</span>
						</a>
					</li>  
				{/each}
				<li class="capitalize items-center justify-center">
					<Button on:click={toggleTheme} class="bg-white hover:bg-gray-300 rounded-[100%] h-12 w-12 p-2">
					{#if $readOnlyLayoutStore.IsDarkTheme}
					<img  src="/icons/sun.svg" alt="search" class="inline-block w-8 h-8" />
					{:else}
					<img  src="/icons/moon.svg" alt="search" class="inline-block w-8 h-8" />
					{/if}
					</Button>
				</li>
			</ul> -->
		</nav>
	</div>
</header>
<nav class="w-full  dropDownNavContainer">
	<div class="mx-auto max-w-7xl w-full z-[1000] left-1/2 trnslate-x-[50%] mt-4" style="position:fixed;left:50%; transform:translateX(-50%)">
		<nav class="flex w-full justify-between  md:items-center p-2 md:px-8 md:py-4 z-[10000]">
			<div class="w-[200px]">
				<WhiteLogo />
			</div>
			<div class="leftHeader w-[70%] text-right flex items-center justify-end gap-8">
				<a  href="/contact"  class="hidden  hover:opacity-90 flex-items sm:flex justify-center sm:min-w-[200px] py-4 px-6 z-[105] bg-white">
					Contact
				</a>
				<button class=" hover:bg-gray-300 rounded-[100%] h-12 w-12 p-2 z-[1000]" on:click={()=>toggleNav()}>
					{#if $readOnlyLayoutStore.isDropDownMenuShowing}
						<img  src="/icons/white-close.svg" alt="close" class="inline-block w-8 h-8" />
					{:else}
						<img  src="/icons/white-menu.svg" alt="hamburger" class="inline-block w-8 h-8" />
					{/if}
				</button>
			</div>
			<!-- <ul class="hidden md:flex  w-full  items-center justify-end gap-8">
				{#each navItems as navItem, index}
					<li class="capitalize items-center justify-center">
						<a href={navItem.href} class="h-full w-full hover:bg-[#1B1212] flex items-center justify-center">
							<span>{navItem.name}</span>
						</a>
					</li>  
				{/each}
				<li class="capitalize items-center justify-center">
					<Button on:click={toggleTheme} class="bg-white hover:bg-gray-300 rounded-[100%] h-12 w-12 p-2">
					{#if $readOnlyLayoutStore.IsDarkTheme}
					<img  src="/icons/sun.svg" alt="search" class="inline-block w-8 h-8" />
					{:else}
					<img  src="/icons/moon.svg" alt="search" class="inline-block w-8 h-8" />
					{/if}
					</Button>
				</li>
			</ul> -->
		</nav>
	</div>
	<div class="flex   bg-black text-white justify-center items-center w-full h-full">
		<ul class="flex flex-wrap  bg-black text-white w-full  justify-center items-center mt-[100px] max-w-[900px] md:gap-4" in:fade={{duration:1000}}>
			{#each navItems as navItem, index}
		   
				<li class="flex w-full m-2 py-4 md:m-0 md:py-0 md:w-[48%] capitalize items-center justify-center  border-[.5px] border-gray-600 md:h-[120px]">
					<a href={navItem.href} class="w-full h-full  hover:bg-[#1B1212] flex items-center justify-center">
						<span class="text-white">{navItem.name}</span>
					</a>
				</li>  
			{/each}
			<!-- <li class=" capitalize flex items-center justify-center py-4">
				<Button on:click={toggleTheme} class="bg-white hover:bg-gray-300 rounded-[100%] h-12 w-12 p-2 items-center justify-center flex">
				{#if $readOnlyLayoutStore.IsDarkTheme}
					<img  src="/icons/sun.svg" alt="search" class="object-cover block h-8 w-8" />
				{:else}
					<img  src="/icons/moon.svg" alt="search" class="object-cover block h-8 w-8" />
				{/if}
				</Button> 
			</li> -->
			</ul>
			<!-- {/if} -->

	</div>
</nav>
