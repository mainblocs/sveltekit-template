<script>
	import { getAllProjects } from "$src/lib/projects";
	import DarkLogo from "./DarkLogo.svelte";
	import Suscribe from "./Suscribe.svelte";

</script>
<footer class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
    <div  class="flex flex-col gap-8 md:flex-row justify-between" style="opacity: 1; transform: none;">
        <div class="flex  flex-col  md:flex-row justify-between w-full md:w-1/3">
            <div class="font-display text-sm font-semibold tracking-wider text-neutral-950 w-[60%]">
                <h3>Work</h3>
                <ul class="mt-4 text-sm text-neutral-700">
                    {#each getAllProjects() as project}
                        <li class="mt-4">
                            <a data-sveltekit-reload class="transition hover:text-neutral-950" href={project.href}
                                >{project.client}
                            </a>
                        </li>
                    {/each}
                    <li class="mt-4"><a class="transition hover:text-neutral-950" href="/work">See all <span aria-hidden="true">→</span></a></li>
                </ul>
            </div>
            <div class="font-display text-sm font-semibold tracking-wider text-neutral-950">
                <h3>Company</h3>
                <ul class="mt-4 text-sm text-neutral-700">
                    <li class="mt-4">
                        <a class="transition hover:text-neutral-950" data-sveltekit-reload href="/about">About</a>
                    </li>
                    <li class="mt-4">
                        <a class="transition hover:text-neutral-950" data-sveltekit-reload href="/process">Process</a>
                    </li>
                    <li class="mt-4">
                        <a class="transition hover:text-neutral-950" data-sveltekit-reload href="/blog">Blog</a>
                    </li>
                    <li class="mt-4">
                        <a class="transition hover:text-neutral-950" data-sveltekit-reload href="/contact">Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-full md:w-1/3">
            <Suscribe/> 
        </div>
    </div>
    <div class="w-full flex gap-4 justify-between items-center my-16">
        <a href="/" aria-label="Home">
            <DarkLogo />
        </a>
        <p class="text-sm text-neutral-700">© shopifyfirst <!-- -->2023</p>
    </div>
</footer>
