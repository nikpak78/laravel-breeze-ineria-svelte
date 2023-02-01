<script> 
  import { inertia } from "@inertiajs/inertia-svelte";
</script>
  <main class="max-w-4xl m-auto h-screen p-14">
  <div class="min-h-screen  pt-6 sm:pt-0 ">
      
    <nav class=" bg-slate-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="flex items-center">
            <img src="/images/mini.svg"  class="h-6 mr-3 " alt="Logo" />
           
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a use:inertia href="/" class="text-sm text-gray-700 dark:text-gray-500 underline">Home</a>
            </li>
            <li>
                <a use:inertia href="/posts">Posts</a>
            </li>
            <li>
              <a use:inertia href="/posts/create">Create</a>
          </li>
          <li>
            <a use:inertia href="/categories">Categories</a>
        </li>
            <li>
                <a use:inertia href="/about" class="text-sm text-gray-700 dark:text-gray-500 underline">About</a>
            </li>
       
          </ul>
        </div>
      </div>
    </nav>
    
    
  <article>
      <slot />
  </article>
</main>