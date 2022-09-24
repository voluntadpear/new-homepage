import { component$ } from "@builder.io/qwik";
import { Arrow, ArrowExternal } from "./icons/qwik";

type CTAURLProps = {
  showCTA: true;
  url: string;
};

type OnlyURLProps = {
  showCTA: false;
  url: string;
};

type NoURLProps = {
  showCTA?: null | undefined;
  url?: null | undefined;
};

type Props = {
  title: string;
  class?: string;
  description?: string;
} & (NoURLProps | OnlyURLProps | CTAURLProps);

export default component$((props: Props) => {
  return (
    <article
      class={`border border-my-orange-dark rounded-lg text-my-blue-dark pb-2.5 pr-6${
        props.class ? ` ${props.class}` : ""
      }`}
    >
      <p class="text-2xl py-2 border-b border-my-orange-dark pl-4 -mr-6 line-clamp-3">
        {props.title}
      </p>
      {props.description ? (
        <p class="pl-4 pt-1.5">{props.description}</p>
      ) : null}
      {props.url ? <Link url={props.url} showCTA={props.showCTA} /> : null}
    </article>
  );
});

type LinkProps = {
  url: string;
  showCTA: boolean;
};

export const Link = component$((props: LinkProps) => {
  const { url } = props;
  let showDomain = false;

  try {
    const parsedURL = new URL(url);
    if (!parsedURL.hostname.includes(process.env.DOMAIN ?? "")) {
      showDomain = true;
    }
  } catch (error) {
    // no-op
  }

  return (
    <p class="pl-4 font-medium mt-3">
      <a href={url} class="flex justify-between items-center">
        {props.showCTA ? (
          <span>
            Read post&nbsp;
            {showDomain ? (
              <ArrowExternal class="inline" />
            ) : (
              <Arrow class="inline" />
            )}
          </span>
        ) : null}
        {showDomain ? (
          <span class="font-light break-words overflow-hidden lg:text-lg">
            {new URL(url).hostname}
          </span>
        ) : null}
      </a>
    </p>
  );
});
