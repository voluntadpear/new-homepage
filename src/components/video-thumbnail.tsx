import { component$ } from "@builder.io/qwik";

type Props = {
  title: string;
  description: string;
  thumbnailSrc: string;
  url: string;
  class?: string;
};

export default component$((props: Props) => {
  return (
    <article class={props.class}>
      <a href={props.url} class="flex text-my-blue-dark space-x-4">
        <img
          src={props.thumbnailSrc}
          alt=""
          height="72"
          width="137"
          class="w-32 object-contain object-top mt-2"
        />
        <div class="flex flex-col">
          <p class="text-lg font-semibold">{props.title}</p>
          <p>{props.description}</p>
        </div>
      </a>
    </article>
  );
});
