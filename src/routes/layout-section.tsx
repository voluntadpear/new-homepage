import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead, useDocumentHead } from "@builder.io/qwik-city";
import { DesktopMenu, MobileMenu } from "~/components/header";
import { GitHub, LinkedIn, Twitter } from "~/components/icons/qwik";

export const titleSuffix = " | Guille";

export default component$(() => {
  const head = useDocumentHead();

  return (
    <>
      <header class="bg-my-orange-light">
        <div class="lg:max-w-5xl mx-auto">
          <MobileMenu />
          <DesktopMenu />
          <h1 class="text-3xl md:text-4xl text-my-blue mt-7 pb-6 ml-4 md:ml-8 md:mt-24 lg:ml-0">
            {head.title.replace(titleSuffix, "")}
          </h1>
        </div>
      </header>
      <Slot />
      <footer class="bg-my-orange-light">
        <div class="pt-8 pb-12 pl-4 md:pl-9 md:pt-16 lg:pl-0 lg:pt-20 lg:pb-28 lg:max-w-5xl lg:mx-auto">
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

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title}${titleSuffix}`,
  };
};
