import { component$, Slot } from "@builder.io/qwik";
import { DesktopMenu, MobileMenu } from "~/components/header";
import { GitHub, LinkedIn, Twitter } from "~/components/icons/qwik";

export default component$(() => {
  return (
    <>
      <header class="bg-my-orange-light">
        <div class="lg:max-w-5xl mx-auto">
          <MobileMenu />
          <DesktopMenu />
          <h1 class="text-3xl text-my-blue mt-6 pb-6 md:ml-8 md:mt-24 lg:ml-0">
            Blog Posts
          </h1>
        </div>
      </header>
      <main class="bg-white pt-16 pb-24 px-3">
        <article class="prose lg:prose-xl lg:max-w-5xl lg:mx-auto">
          <Slot />
        </article>
      </main>
      <footer class="bg-my-orange-light">
        <div class="pt-8 pb-12 pl-4 md:pl-9 lg:pl-0 lg:pt-20 lg:pb-28 lg:max-w-5xl lg:mx-auto">
          <p class="text-my-blue underline md:text-2xl">
            <a href="/">Go back home</a>
          </p>
          <div class="flex items-center space-x-4 md:space-x-8 my-6">
            <GitHub class="w-6 h-6 md:w-8 md:h-8" />
            <Twitter class="w-6 h-6 md:w-8 md:h-8" />
            <LinkedIn class="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>
      </footer>
    </>
  );
});
