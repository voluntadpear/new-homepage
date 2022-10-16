import { component$ } from "@builder.io/qwik";

type Props = {
  title: string;
  class?: string;
  summary: string;
};

export default component$((props: Props) => {
  return (
    <header
      class={`border border-my-orange-dark rounded-lg text-my-blue-dark${
        props.class ? ` ${props.class}` : ""
      }`}
    >
      <h2 class="text-3xl md:text-4xl py-2 border-b border-my-orange-dark pl-4">
        {props.title}
      </h2>
      <p class="pl-4 py-4">{props.summary}</p>
    </header>
  );
});
