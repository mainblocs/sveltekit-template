<script lang="ts">
	import Contact from '$components/Contact.svelte';
	import HeroSvg from '$components/HeroSvg.svelte';
	import { getAllProjects, getProjectBySlug } from '$lib/projects';
	export let data;
	let projects = getAllProjects();
    let project = projects.find((project) => project.slug === data.slug);
    let servicesDone:string[] = project?.service.split(',') || [];
    let improvements = project?.improvements || [];
    let moreProjects = projects?.filter((project) => project.slug !== data.slug) || [];
</script>


<article class="mt-24 sm:mt-32 lg:mt-40">
    <header>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 text-center">
            <div class="mx-auto max-w-2xl lg:max-w-none">
                <div style="opacity: 1; transform: none;">
                    <h1>
                        <span class="block font-display text-base font-semibold text-neutral-950"
                            >Case Study</span
                        ><span class="sr-only"> - </span><span
                            class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl mx-auto"
                            >{project?.title}</span
                        >
                    </h1>
                    <div class="mt-6 max-w-3xl text-xl text-neutral-600 mx-auto">
                        <p>
                            {project?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div style="opacity: 1; transform: none;">
            <div class="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:max-w-none">
                        <div class="mx-auto max-w-5xl">
                            <dl class="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                                <div
                                    class="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0"
                                >
                                    <dt class="font-semibold">Client</dt>
                                    <dd>{project?.client}</dd>
                                </div>
                                <div
                                    class="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0"
                                >
                                    <dt class="font-semibold">Year</dt>
                                    <dd><time datetime={project?.date}>{project?.date}</time></dd>
                                </div>
                                <div
                                    class="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0"
                                >
                                    <dt class="font-semibold">Service</dt>
                                    <dd>{project?.service}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-y border-neutral-200 bg-neutral-100">
                <div class="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                    <div class="group relative">
                        <img
                            alt=""
                            decoding="async"
                            data-nimg="1"
                            class="w-full"
                            src={project?.image.src}
                            style="color: transparent; filter: grayscale(1);"
                        />
                        <div
                            class="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
                            aria-hidden="true"
                        >
                            <img
                                alt=""
                                width="3648"
                                height="3117"
                                decoding="async"
                                data-nimg="1"
                                class="w-full"
                                src={project?.image.src}
                                style="color: transparent;"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div class="mx-auto max-w-2xl lg:max-w-none">
            <div style="opacity: 1; transform: none;">
                <div
                    class="[&amp;>*]:mx-auto [&amp;>*]:max-w-3xl [&amp;>:first-child]:!mt-0 [&amp;>:last-child]:!mb-0"
                >
                    <div class="typography">
                        <h2>Overview</h2>
                        <p>
                            {project?.description}
                        </p>
                        <h2>What we did</h2>
                    </div>
                    <ul role="list" class="my-6 flex flex-wrap gap-4">
                        {#each servicesDone as serviceDone}
                        <li class="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                            {serviceDone}
                        </li>
                        {/each}
                    </ul>
                    <div class="typography" />
                    <figure
                        class="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16 my-32"
                    >
                        <blockquote
                            class="col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2"
                        >
                            <p>
                               {project?.testimonial.content}
                            </p>
                        </blockquote>
                        <div
                            class="col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl"
                        >
                            <img
                                alt=""
                                loading="lazy"
                                decoding="async"
                                data-nimg="1"
                                class="h-12 w-12 object-contain bg-gray-400 p-8  sm:aspect-[7/9] sm:h-auto sm:w-full"
                                src={project?.logo}
                                style="color: transparent;"
                            />
                        </div>
                        <figcaption
                            class="text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base"
                        >
                            <span class="font-semibold">{project?.testimonial.author.name}<span
                                class="hidden font-semibold sm:inline"
                                >,
                            </span><br class="sm:hidden" /><span class="sm:font-semibold"
                                >{project?.testimonial.author.role}</span
                            >
                        </figcaption>
                    </figure>
                    <div class="typography" />
                    <div class="my-32 !max-w-none">
                        <dl
                            class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none"
                        >
                            {#each improvements as improvement}
                            <div
                                class="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
                                style="opacity: 1; transform: none;"
                            >
                                <dt class="mt-2 text-base text-neutral-600">{improvement.title}</dt>
                                <dd class="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
                                    {improvement.scale}
                                </dd>
                            </div>
                            {/each}
                        </dl>
                    </div>
                    <div class="typography" />
                </div>
            </div>
        </div>
    </div>
</article>
<div class="relative pt-24 sm:pt-32 lg:pt-40 mt-24 sm:mt-32 lg:mt-40">
    <div
        class="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50"
    >
     <HeroSvg height="h-[100%]" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="max-w-2xl" style="opacity: 1; transform: none;">
                <h2>
                    <span
                        class="block font-display tracking-tight [text-wrap:balance] text-2xl font-semibold text-neutral-950"
                        >More case studies</span
                    >
                </h2>
            </div>
        </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                { #each moreProjects as moreProject }
                <div style="opacity: 1; transform: none;">
                    <article>
                        <div
                            class="relative flex flex-col items-start pl-8 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
                        >
                            <h3 class="mt-6 text-base font-semibold text-neutral-950">
                                {moreProject.title}
                            </h3>
                            <time datetime="2022-10" class="order-first text-sm text-neutral-600"
                                >{moreProject.date}</time
                            >
                            <p class="mt-2.5 text-base text-neutral-600">
                               {moreProject.description}
                            </p>
                            <a
                                class="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700" data-sveltekit-reload
                                aria-label="Read more: Get a hodl of your health"
                                href={moreProject.href}
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
<Contact/>
