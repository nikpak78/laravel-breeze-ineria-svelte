<script>
    import { inertia } from "@inertiajs/inertia-svelte";

    export let post;
</script>

<tr>
    <td>
        <div class="flex items-center space-x-3">
            <div class="avatar">
                <div class=" w-12 h-12">
                    <a use:inertia href={`/posts/${post.slug}`}>
                        <img
                            class="w-12 h-12"
                            alt={post.title}
                            src={"/uploads/images/" + post.image}
                        />
                    </a>
                </div>
            </div>
            <div>
                <div class="font-bold">
                    <a use:inertia href={`/posts/${post.slug}`}
                        >{post.title}
                    </a>
                </div>
            </div>
        </div></td
    >
    <td>
        {post.description}
        <br />
    </td>
    {#each post.categories as category}
        <td>{category.name}</td>
    {/each}

    <th>
        <button
            class="inline-flex mt-4 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            use:inertia={{
                href: `/posts/${post.id}`,
                method: "delete",
            }}>Delete Post</button
        >
    </th>
</tr>
