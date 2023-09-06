<script lang="ts">
	//@ts-ignore
	import HeroSvg from '$src/components/HeroSvg.svelte';
	import { getAllArticles, type Article } from '$src/lib/blogs.js';
	export let data;
	let articles:Article[] = getAllArticles();
	let article = articles.find((article) => article.href === '/blog/' + data.slug);
	let moreArticles = articles?.filter((article) => article.href !== '/blog/' + data.slug) || [];
</script>

<article class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
	<div class="mx-auto max-w-2xl lg:max-w-none">
		<div style="opacity: 1; transform: none;">
			<header class="mx-auto flex max-w-5xl flex-col text-center">
				<h1
					class="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl"
				>
					{article?.title}
				</h1>
				<time datetime="2023-04-06" class="order-first text-sm text-neutral-950"
					>{article?.date}</time
				>
				<p class="mt-6 text-sm font-semibold text-neutral-950">
					by {article?.author.name}, {article?.author.role}
				</p>
			</header>
		</div>
		<div style="opacity: 1; transform: none;">
			<div
				class="[&amp;>*]:mx-auto [&amp;>*]:max-w-3xl [&amp;>:first-child]:!mt-0 [&amp;>:last-child]:!mb-0 mt-24 sm:mt-32 lg:mt-40"
			>
				<div class="typography">
					{#if article}
						{#each article.sections as section, index}
							<h2>{index + 1}. {section.title}</h2>
							{#each section.content as content}
								{#if content.type === 'paragraph'}
									<p>{content.data.text}</p>
								{/if}
								{#if content.type === 'image'}
									<div
										class="group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6"
									>
										<div class="group relative">
											<img
												alt=""
												loading="lazy"
												width="2400"
												height="1600"
												decoding="async"
												data-nimg="1"
												class="aspect-[16/10] w-full object-cover"
												src={content.data.src}
												style="color: transparent; filter: grayscale(1);"
											/>
											<div
												class="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
												aria-hidden="true"
											>
												<img
													alt=""
													loading="lazy"
													decoding="async"
													data-nimg="1"
													class="aspect-[16/10] w-full object-cover"
													src={content.data.src}
													style="color: transparent;"
												/>
											</div>
										</div>
									</div>
								{/if}
							{/each}
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
</article>
<div class="relative pt-24 sm:pt-32 lg:pt-40 mt-24 sm:mt-32 lg:mt-40">
	<div
		class="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50"
	>
    <HeroSvg height="h-full"/>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<div class="max-w-2xl" style="opacity: 1; transform: none;">
				<h2>
					<span
						class="block font-display tracking-tight [text-wrap:balance] text-2xl font-semibold text-neutral-950"
						>More articles</span
					>
				</h2>
			</div>
		</div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                {#each moreArticles as article}
				<div style="opacity: 1; transform: none;">
					<article>
						<div
							class="relative flex flex-col items-start pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
						>
							<h3 class="mt-6 text-base font-semibold text-neutral-950">
								{article.title}
							</h3>
							<time datetime="2023-02-18" class="order-first text-sm text-neutral-600"
								>{article.date}</time
							>
							<p class="mt-2.5 text-base text-neutral-600">
                                {article.description}
							</p>
							<a
								class="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
								aria-label="Read more: 3 Lessons We Learned Going Back to the Office"
                                data-sveltekit-reload
								href={article.href}
								>Read more<svg
									viewBox="0 0 24 6"
									aria-hidden="true"
									class="w-6 flex-none fill-current"
									><path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M24 3 18 .5v2H0v1h18v2L24 3Z"
									/></svg
								><span class="absolute inset-0" /></a
							>
						</div>
					</article>
				</div>
                {/each}

			</div>
		</div>
	</div>
</div>
