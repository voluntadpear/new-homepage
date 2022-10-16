import { component$, Slot, useContext, $ } from "@builder.io/qwik";
import { MenuContext } from "~/root";
import { Close, Hamburger } from "./icons/qwik";

export default component$(() => {
  return (
    <header>
      <MobileMenu />
      <DesktopMenu />
      <header class="bg-my-orange-light pb-12 snap-start">
        <Slot />
      </header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 69 1434 219.8"
        class="bg-white -mt-px"
      >
        <path d="m 0 96 C 1224 545 783 69 1434 69 H 0 Z" fill="#FFBF69" />
      </svg>
    </header>
  );
});

export const MobileMenu = component$(() => {
  const state = useContext(MenuContext);

  const hideMenu = $(() => {
    state.menuVisible = false;
  });

  return state.menuVisible ? (
    <div class="fixed inset-0 bg-white/80 backdrop-blur wk-backdrop-blur">
      <button
        class="fixed w-12 h-12 right-8 top-6"
        type="button"
        onClick$={() => {
          state.menuVisible = !state.menuVisible;
        }}
      >
        <Close class="w-12 h-12" />
        <span class="sr-only">Close menu</span>
      </button>
      <nav class="mt-36 ml-8">
        <ul class="flex flex-col space-y-8 text-3xl text-my-blue">
          <li>
            <a href="#top" onClick$={hideMenu}>
              Home 🏠
            </a>
          </li>
          <li>
            <a href="#posts" onClick$={hideMenu}>
              Latest Posts ✨
            </a>
          </li>
          <li>
            <a href="#about" onClick$={hideMenu}>
              About Me 👋
            </a>
          </li>
          <li>
            <a href="#bookmarks" onClick$={hideMenu}>
              My Bookmarks 🔖
            </a>
          </li>
          <li>
            <a href="#speaking" onClick$={hideMenu}>
              Speaking 🎙
            </a>
          </li>
          <li>
            <a href="#contact" onClick$={hideMenu}>
              Contact ✉️
            </a>
          </li>
        </ul>
      </nav>
    </div>
  ) : (
    <button
      class="fixed w-12 h-12 right-8 top-6 md:hidden"
      type="button"
      onClick$={() => (state.menuVisible = !state.menuVisible)}
    >
      <Hamburger class="w-12 h-12" />
      <span class="sr-only">Menu</span>
    </button>
  );
});

export const DesktopMenu = component$(() => {
  return (
    <nav class="hidden md:block lg:max-w-5xl mx-auto">
      <ul class="flex justify-around pt-9 text-my-blue lg:text-lg lg:pt-16 lg:justify-between">
        <li>
          <a href="#top">Home 🏠</a>
        </li>
        <li>
          <a href="#posts">Latest Posts ✨</a>
        </li>
        <li>
          <a href="#about">About Me 👋</a>
        </li>
        <li>
          <a href="#bookmarks">My Bookmarks 🔖</a>
        </li>
        <li>
          <a href="#speaking">Speaking 🎙</a>
        </li>
        <li>
          <a href="#contact">Contact ✉️</a>
        </li>
      </ul>
    </nav>
  );
});
