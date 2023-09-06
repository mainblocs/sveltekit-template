
<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { readOnlyLayoutStore, toggleNav, toggleTheme } from "$src/routes/store";
	import DarkLogo from "./DarkLogo.svelte";
	let navItems = [
		{
			name: "about",
			href: "#"
		},
		{
			name: "portfolio",
			href: "#"
		},
		{
			name: "blogs",
			href: "#"
		},
		{
			name: "contact",
			href: "#"
		},
	]
</script>
<style>
	
</style>
<header class="w-full flex flex-col items-center justify-center z-100">
	<div  class="flex w-full justify-between items-center  h-[100px] top-0  fixed  max-w-3xl mx-auto z-[105]">
		<nav class="flex w-full justify-start  md:items-center p-2 md:p-4">
			<div class="w-[200px]">
				<DarkLogo />
			</div>
			<div class="md:hidden leftHeader w-[70%] text-right flex items-center justify-end gap-8">
				<button class="bg-white hover:bg-gray-300 rounded-[100%] h-12 w-12 p-2" on:click={()=>toggleNav()}>
					{#if $readOnlyLayoutStore.isDropDownMenuShowing}
						<img  src="/icons/close.svg" alt="close" class="inline-block w-8 h-8" />
					{:else}
						<img  src="/icons/humburger.svg" alt="hamburger" class="inline-block w-8 h-8" />
					{/if}
				</button>
			</div>
			<ul class="hidden md:flex  w-full  items-center justify-end gap-8">
				{#each navItems as navItem, index}
					<li class="capitalize items-center justify-center">
						<a href={navItem.href} class="h-full w-full hover:bg-[#1B1212] flex items-center justify-center">
							<span>{navItem.name}</span>
						</a>
					</li>  
				{/each}
				<li class="capitalize items-center justify-center">
					<button on:click={toggleTheme} class="bg-white hover:bg-gray-300 rounded-[100%] h-12 w-12 p-2">
					{#if $readOnlyLayoutStore.IsDarkTheme}
					<img  src="/icons/sun.svg" alt="search" class="inline-block w-8 h-8" />
					{:else}
					<img  src="/icons/moon.svg" alt="search" class="inline-block w-8 h-8" />
					{/if}
					</button>
				</li>
			</ul>
		</nav>
	</div>
	
	<nav class="w-full  dropDownNavContainer z-100">
		<!-- {#if $readOnlyLayoutStore.isDropDownMenuShowing} -->
		
		<ul class="flex flex-col bg-black text-white w-full  justify-center items-center h-full   mt-[100px]" in:fade={{duration:1000}}>
		{#each navItems as navItem, index}
			<li class=" capitalize items-center justify-center py-4">
				<a href={navItem.href} class="w-full hover:bg-[#1B1212] flex items-center justify-center">
					<span>{navItem.name}</span>
				</a>
			</li>  
		{/each}
		<li class=" capitalize flex items-center justify-center py-4">
			<button on:click={toggleTheme} class="bg-white hover:bg-gray-300 rounded-[100%] h-12 w-12 p-2 items-center justify-center flex">
			{#if $readOnlyLayoutStore.IsDarkTheme}
				<img  src="/icons/sun.svg" alt="search" class="object-cover block h-8 w-8" />
			{:else}
				<img  src="/icons/moon.svg" alt="search" class="object-cover block h-8 w-8" />
			{/if}
			</button> 
		</li>
		</ul>
		<!-- {/if} -->
	</nav>
	
</header>
