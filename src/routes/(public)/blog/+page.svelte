<script>
	import { getAllArticles } from '$src/lib/blogs';
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
	<div class="mx-auto max-w-2xl lg:max-w-none">
		<div style="opacity: 1; transform: none;">
			<h1>
				<span class="block font-display text-base font-semibold text-neutral-950">Blog</span><span
					class="sr-only"
				>
					-
				</span><span
					class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl"
					>The latest articles and news</span
				>
			</h1>
			<div class="mt-6 max-w-3xl text-xl text-neutral-600">
				<p>
					Stay up-to-date with the latest industry news as our marketing teams finds new ways to
					re-purpose old CSS tricks articles.
				</p>
			</div>
		</div>
	</div>
</div>
<div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
	<div class="mx-auto max-w-2xl lg:max-w-none">
		<div class="space-y-24 lg:space-y-32">
			{#each getAllArticles() as article}
				<div style="opacity: 1; transform: none;">
					<article>
						<div
							class="pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
						>
							<div class="relative lg:-mx-4 lg:flex lg:justify-end">
								<div class="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
									<h2 class="font-display text-2xl font-semibold text-neutral-950">
										<a href={article.href}
											>{article.title}</a
										>
									</h2>
									<dl class="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
										<dt class="sr-only">Published</dt>
										<dd class="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
											<time datetime="2023-04-06">{article.date}</time>
										</dd>
										<dt class="sr-only">Author</dt>
										<dd class="mt-6 flex gap-x-4">
											<div class="flex-none overflow-hidden rounded-xl bg-neutral-100">
												<img
													alt=""
													loading="lazy"
													decoding="async"
													data-nimg="1"
                                                    class="w-16 h-16 object-contain"
													src={article.author.image.src}
													style="color: transparent;"
												/>
											</div>
											<div class="text-sm text-neutral-950">
												<div class="font-semibold">{article.author.name}</div>
												<div>{article.author.role}</div>
											</div>
										</dd>
									</dl>
									<p class="mt-6 max-w-2xl text-base text-neutral-600">
										{article.description}
									</p>
									<a
										class="mt-8 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
										aria-label="Read more: The Future of Web Development: Our Predictions for 2023"
										href="/blog/future-of-web-development"
										><span class="relative top-px">Read more</span></a
									>
								</div>
							</div>
						</div>
					</article>
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
	<div class="mx-auto max-w-2xl lg:max-w-none">
		<div
			class="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12"
			style="opacity: 1; transform: none;"
		>
			<div class="mx-auto max-w-4xl">
				<div class="max-w-xl">
					<h2 class="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
						Tell us about your project
					</h2>
					<div class="mt-6 flex">
						<a
							class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
							href="/contact"><span class="relative top-px">Say Hei</span></a
						>
					</div>
					<div class="mt-10 border-t border-white/10 pt-10">
						<h3 class="font-display text-base font-semibold text-white">Our offices</h3>
						<ul role="list" class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
							<li>
								<address class="text-sm not-italic text-neutral-300">
									<strong class="text-white">Los Angeles</strong><br />Santa Monica Blvd<br
									/>California, USA
								</address>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
