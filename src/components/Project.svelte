<script>
	import { getAllProjects } from "$src/lib/projects";

    let projects = getAllProjects();
</script>
<div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
	<div class="mx-auto max-w-2xl lg:max-w-none">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {#each projects as project}
                <div class="flex" style="opacity: 1; transform: none;">
                    <article
                        class="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
                    >
                        <h3>
                            <a href="/"
                                ><span class="absolute inset-0 rounded-3xl" /><img
                                    src={project.logo}
                                    alt={project.title}
                                    class="h-48 w-48 bg-gray-400 p-8 object-contain"
                                /></a
                            >
                        </h3>
                        <p class="mt-6 flex gap-x-2 text-sm text-neutral-950">
                            <time datetime={project.date} class="font-semibold">{project.date.split("-")[0]}</time><span
                                class="text-neutral-300"
                                aria-hidden="true">/</span
                            ><span>Case study</span>
                        </p>
                        <p class="mt-6 font-display text-2xl font-semibold text-neutral-950">
                            {project.title}
                        </p>
                        <p class="mt-4 text-base text-neutral-600">
                            {project.description}
                        </p>
                    </article>
                </div>
            {/each}
			<!-- <div class="flex" style="opacity: 1; transform: none;">
				<article
					class="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
				>
					<h3>
						<a href="/"
							><span class="absolute inset-0 rounded-3xl" /><img
								src="https://sarahharan.com/cdn/shop/files/SARAH-HARAN-LOGO-STACK_79b0ab78-ba9b-4c85-a9c1-91103ef7fbb3_200x@2x.jpg?v=1675954763"
								alt="sarah haran"
								class="h-16 w-16"
							/></a
						>
					</h3>
					<p class="mt-6 flex gap-x-2 text-sm text-neutral-950">
						<time datetime="2023" class="font-semibold">2023</time><span
							class="text-neutral-300"
							aria-hidden="true">/</span
						><span>Case study</span>
					</p>
					<p class="mt-6 font-display text-2xl font-semibold text-neutral-950">
						Lets find the perfect bag for you
					</p>
					<p class="mt-4 text-base text-neutral-600">
						online destination for premium luxury bags. Indulge in our curated collection of
						designer pieces without the retail markup. Elevate your style with timeless elegance.
					</p>
				</article>
			</div>
			<div class="flex" style="opacity: 1; transform: none;">
				<article
					class="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
				>
					<h3>
						<a href="/"
							><span class="absolute inset-0 rounded-3xl" /><img
								src="https://flamejars.com/cdn/shop/files/logo_160x@2x.svg?v=1689722283"
								alt="Flamejars"
								class="h-16 w-16"
							/></a
						>
					</h3>
					<p class="mt-6 flex gap-x-2 text-sm text-neutral-950">
						<time datetime="2022" class="font-semibold">2022</time><span
							class="text-neutral-300"
							aria-hidden="true">/</span
						><span>Case study</span>
					</p>
					<p class="mt-6 font-display text-2xl font-semibold text-neutral-950">
						FlameJars: Illuminate Moments
					</p>
					<p class="mt-4 text-base text-neutral-600">
						Light up your memories with FlameJars, an innovative candle company dedicated to
						crafting unique candles that do more than illuminate your spaces; they encapsulate and
						bring to life your most cherished moments.
					</p>
				</article>
			</div>
			<div class="flex" style="opacity: 1; transform: none;">
				<article
					class="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
				>
					<h3>
						<a href="/"
							><span class="absolute inset-0 rounded-3xl" /><img
								src="//www.madsencycles.com/cdn/shop/files/M_stripe_white_370x.png?v=1676482234"
								alt="madsen"
								class="h-16 w-16"
							/></a
						>
					</h3>
					<p class="mt-6 flex gap-x-2 text-sm text-neutral-950">
						<time datetime="2020" class="font-semibold">2020</time><span
							class="text-neutral-300"
							aria-hidden="true">/</span
						><span>Case study</span>
					</p>
					<p class="mt-6 font-display text-2xl font-semibold text-neutral-950">
						Madsen Cycles: Carry Your World
					</p>
					<p class="mt-4 text-base text-neutral-600">
						Madsen Cycles offers innovative cargo bikes designed for everyday transportation needs.
						With a focus on quality, safety, and practicality, their signature bucket bikes provide
						a fun, eco-friendly way for families to carry children, groceries, and more, turning
						everyday trips into adventures.
					</p>
				</article>
			</div>
			<div class="flex" style="opacity: 1; transform: none;">
				<article
					class="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
				>
					<h3>
						<a href="/"
							><span class="absolute inset-0 rounded-3xl" /><img
								src="https://asanarebel.com/assets/img/white_logo.png"
								alt="AsaNA REBEL"
								class="h-16 w-16"
							/></a
						>
					</h3>
					<p class="mt-6 flex gap-x-2 text-sm text-neutral-950">
						<time datetime="2022" class="font-semibold">2022</time><span
							class="text-neutral-300"
							aria-hidden="true">/</span
						><span>Case study</span>
					</p>
					<p class="mt-6 font-display text-2xl font-semibold text-neutral-950">
						It is time to be a rebel
					</p>
					<p class="mt-4 text-base text-neutral-600">
						Our holistic approach and user-friendly platform make it easier for people of all
						fitness levels to start and sustain a healthier and more balanced lifestyle.
					</p>
				</article>
			</div> -->
		</div>
	</div>
</div>
