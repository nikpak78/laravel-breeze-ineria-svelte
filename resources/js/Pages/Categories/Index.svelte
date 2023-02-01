
<svelte:head>
    <title>Categories Page</title>
</svelte:head>

<script>
    import LayoutBase from "@/Layouts/LayoutBase.svelte";
    import { useForm, inertia } from "@inertiajs/inertia-svelte";
    export let categories;
    let focusForm;
    let form = useForm({
        name: null,
        
       
    });
    function focus() {
        focusForm.focus();
    }

    function submit() {
        focus();
        $form.post("/categories");
        $form.reset();
    }
</script>
<LayoutBase>
 
    <h1>Hifrom Categories page</h1>

    <form on:submit|preventDefault={submit}>
        <div class="mt-8">
            <label
                for="name"
                class="block text-sm font-medium text-gray-700"
                >Title</label
            >
            <div class="mt-1">
                <input
                    bind:value={$form.name}
                    bind:this={focusForm}
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="name"
                />
            </div>
            {#if $form.errors.name}
                <div class="form-error text-red-500">
                    {$form.errors.name}
                </div>
            {/if}
        </div>


        <button
            disabled={$form.processing}
            type="submit"
            class="inline-flex mt-4 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Submit
        </button>
    </form>
    {#each categories as category (category.id)}
  <li>
        <a use:inertia href={`/categories/${category.slug}`}>{category.name}
     
    </a>
</li>
    <button
    class="inline-flex mt-4 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
    use:inertia={{
        href: `/categories/${category.id}`,
        method: "delete",
    }}>Delete Link</button>
    {/each}
</LayoutBase>