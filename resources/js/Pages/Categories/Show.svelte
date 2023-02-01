<script>
    export let category;
    import LayoutBase from "@/Layouts/LayoutBase.svelte";
    import { inertia } from "@inertiajs/inertia-svelte";

</script>

<svelte:head>
    <title>{category.name}</title>
</svelte:head>
<LayoutBase>

    
 <div class="text-4xl font-black"> {category.name}</div>
 {#each category.posts as post }
 <li>
 <a use:inertia href={`/posts/${post.slug}`}
 >{post.title}
</a>
</li>
 {/each}
 
</LayoutBase>