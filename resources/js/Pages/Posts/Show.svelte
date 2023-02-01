<script>
    export let post;
    
    import LayoutBase from "@/Layouts/LayoutBaseinertia } from "@inertiajs/inertia-svelte";

</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>
<LayoutBase>

    
 <div class="text-4xl font-black"> {post.title}</div>
 <img class=" mb-5 h-96 w-full"  alt='{post.title}'  src={'/uploads/images/' + post.image}  />
     <div class="">{@html post.body}</div> 
     {#each post.categories as category }
     <li>
        <a use:inertia href={`/categories/${category.slug}`}>
            {category.name}
      </a>
          
    
   </li>
   {/each} 
</LayoutBase>