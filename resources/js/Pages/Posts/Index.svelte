<script>
    export let posts;
    import LayoutBase from "@/Layouts/LayoutBase.svelte";
    import Pagination from "@/Components/Pagination.svelte";
    import Table from "@/Components/Table.svelte";
</script>

<svelte:head>
    <title>Blog Page</title>
</svelte:head>
<LayoutBase>
    <h1 class=" text-3xl font-bold px-2 py-2">Post page</h1>

    <div class="overflow-x-auto w-full">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                {#each posts.data as post (post.id)}
                <Table post={post} />
                {/each}
            </tbody>
        </table>
    </div>
    <div class="flex ">
        <Pagination links={posts.links} />
    </div>
</LayoutBase>
