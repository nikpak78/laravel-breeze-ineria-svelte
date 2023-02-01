<script>
    import LayoutBase from "@/Layouts/LayoutBase.svelte";

    import Editor from "@tinymce/tinymce-svelte";
    import { useForm, inertia,  } from "@inertiajs/inertia-svelte";
    
    let form = useForm({
        
        title: null,
        image: null,
        description: null,
        body: "",
        categories: "",
       
    });
    export let categories = [];
   
    let focusForm;

    function focus() {
        focusForm.focus();
    }

    function submit() {
        focus();
        $form.post("/posts");
        $form.reset();
    }
</script>

<svelte:head>
    <title>Post Create</title>
</svelte:head>
<LayoutBase>
    <div class="py-12">
        <div class="p-6 bg-white border-b border-gray-200">
            <form on:submit|preventDefault={submit}>
                <div class="mt-8">
                    <label
                        for="title"
                        class="block text-sm font-medium text-gray-700"
                        >Title</label
                    >
                    <div class="mt-1">
                        <input
                            bind:value={$form.title}
                            bind:this={focusForm}
                            type="text"
                            name="title"
                            id="title"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="title"
                        />
                    </div>
                    {#if $form.errors.title}
                        <div class="form-error text-red-500">
                            {$form.errors.title}
                        </div>
                    {/if}
                </div>
                <div class="mt-2">
                <label
                for="title"
                class="block text-sm font-medium text-gray-700"
                >Category</label
            >
                <select
                multiple
                bind:value={$form.categories}
                
                bind:this={focusForm}
                name="categories" id="categories" 
                class="
                  mt-1
                  block
                  w-full
                  pl-3
                  pr-10
                  py-2
                  text-base
                  border-gray-300
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  sm:text-sm
                  rounded-md
                "
              >
              {#each categories as category (category.id)}
                <option value={category.id}>
                    {category.name}
                </option>
                {/each}
              </select>
            </div>
              

                <div class="mt-8">
                    <label
                        for="title"
                        class="block text-sm font-medium text-gray-700"
                        >Description</label
                    >
                    <div class="mt-1">
                        <input
                            bind:value={$form.description}
                            bind:this={focusForm}
                            type="text"
                            name="description"
                            id="description"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="description"
                        />
                    </div>

                    {#if $form.errors.description}
                        <div class="form-error text-red-500">
                            {$form.errors.description}
                        </div>
                    {/if}
                </div>

                <div class="mt-8">
                    <label
                        for="body"
                        class="block text-sm font-medium text-gray-700"
                        >body</label
                    >

                    <Editor
                        
                        id="body"
                        type="text"
                        name="body"
                        bind:this={focusForm}
                        bind:value={$form.body}
                    />

                    {#if $form.errors.body}
                        <div class="form-error text-red-500">
                            {$form.errors.body}
                        </div>
                    {/if}
                </div>

                <div>
                    <input
                        type="file"
                        on:input={(e) => ($form.image = e.target.files[0])}
                    />
                    {#if $form.progress}
                        <progress value={$form.progress.percentage} max="100">
                            {$form.progress.percentage}%
                        </progress>
                    {/if}
                    {#if $form.errors.image}
                        <div class="form-error text-red-500">
                            {$form.errors.image}
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
        </div>

    </div>
</LayoutBase>
