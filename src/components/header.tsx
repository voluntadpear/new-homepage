import { component$, Fragment, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <Fragment>
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
    </Fragment>
  );
});
