<script>
	import { getAllArticles } from "$src/lib/blogs";
	import HeroSvg from "./HeroSvg.svelte";

</script>
<div class="relative pt-24 sm:pt-32 lg:pt-40 mt-24 sm:mt-32 lg:mt-40 articles">
	<div class="absolute inset-x-0 top-0  rounded-t-4xl bg-gradient-to-b from-neutral-50"
	>
     <HeroSvg />
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<div class="max-w-2xl" style="opacity: 1; transform: none;">
				<h2>
					<span
						class="block font-display tracking-tight [text-wrap:balance] text-2xl font-semibold text-neutral-950"
						>From the blog</span
					>
				</h2>
				<div class="mt-6 text-xl text-neutral-600">
					<p>
						Our team of experienced designers and developers has just one thing on their mind;
						working on your ideas to draw a smile on the face of your users worldwide. From
						conducting Brand Sprints to UX Design.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
			<div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                {#each getAllArticles() as post}
					<article>
						<a href={post.href} aria-label={post.title}
							class="relative flex flex-col items-start pl-8 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px z-[105]"
						>
							<h3 class="mt-6 text-base font-semibold text-neutral-950">
								{post.title}
							</h3>
							<time datetime="2023-02-18" class="order-first text-sm text-neutral-600"
								>{post.date}</time
							>
							<p class="mt-2.5 text-base text-neutral-600">
								{post.description}
							</p>
							<a
								class="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
								aria-label="Read more: 3 Lessons We Learned Going Back to the Office"
								href="/blog/3-lessons-we-learned-going-back-to-the-office"
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
						</a>
					</article>
                {/each}
			</div>
	</div>
</div>
