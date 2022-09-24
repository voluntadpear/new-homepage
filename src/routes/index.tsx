import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Card from "~/components/card";
import CtaButton from "~/components/cta-button";
import Header from "~/components/header";
import VideoThumbnail from "~/components/video-thumbnail";

export default component$(() => {
  return (
    <>
      <Header>
        <div class="lg:max-w-5xl lg:mx-auto">
          <h1 class="text-5xl md:text-6xl text-my-blue text-center pt-36 md:pt-72">
            Hi! I'm Guille!
          </h1>
          <p class="text-2xl md:text-3xl text-my-blue text-center mt-3.5 md:mt-6">
            Front-end Developer
          </p>
          <div class="flex items-center justify-center space-x-4 md:space-x-8 my-6">
            <svg
              class="w-6 h-6 md:w-8 md:h-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1.5C6.202 1.5 1.5 6.319 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214.525.099.717-.234.717-.52 0-.258-.009-.933-.014-1.833-2.92.652-3.539-1.444-3.539-1.444-.478-1.242-1.167-1.575-1.167-1.575-.951-.67.07-.656.07-.656 1.055.075 1.608 1.111 1.608 1.111.938 1.645 2.457 1.172 3.056.895.094-.693.366-1.171.666-1.439-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.137 1.078-2.887-.108-.272-.469-1.37.103-2.85 0 0 .881-.291 2.888 1.101a9.836 9.836 0 0 1 2.63-.36c.89.004 1.79.121 2.629.36 2.006-1.392 2.883-1.101 2.883-1.101.572 1.48.21 2.578.103 2.85.67.754 1.078 1.715 1.078 2.887 0 4.134-2.456 5.044-4.795 5.31.375.334.712.99.712 1.993 0 1.44-.014 2.602-.014 2.953 0 .286.188.624.722.516 4.181-1.42 7.186-5.452 7.186-10.205C22.5 6.32 17.798 1.5 12 1.5Z"
                fill="#2E343B"
              />
            </svg>
            <svg
              class="w-6 h-6 md:w-8 md:h-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.368 6.378c-.767.34-1.592.57-2.458.673a4.286 4.286 0 0 0 1.881-2.367 8.565 8.565 0 0 1-2.716 1.039 4.279 4.279 0 0 0-7.29 3.902 12.148 12.148 0 0 1-8.82-4.47 4.257 4.257 0 0 0-.58 2.15c0 1.485.756 2.795 1.904 3.562a4.267 4.267 0 0 1-1.938-.536v.055a4.282 4.282 0 0 0 3.432 4.195 4.305 4.305 0 0 1-1.932.073 4.283 4.283 0 0 0 3.996 2.971 8.583 8.583 0 0 1-6.334 1.772 12.108 12.108 0 0 0 6.559 1.922c7.87 0 12.173-6.52 12.173-12.173 0-.186-.004-.37-.012-.554a8.667 8.667 0 0 0 2.135-2.214Z"
                fill="#2E343B"
              />
            </svg>
            <svg
              class="w-6 h-6 md:w-8 md:h-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.73 11.4727V11.4401C12.7233 11.4511 12.7161 11.4622 12.7089 11.4727H12.73Z"
                fill="#2E343B"
              />
              <path
                d="M20.8555 1.97569H3.02471C2.17127 1.97569 1.47913 2.65133 1.47913 3.48403V21.5235C1.47913 22.3558 2.17127 23.0314 3.02471 23.0314H20.8555C21.7102 23.0314 22.4023 22.3554 22.4023 21.5235V3.48403C22.4023 2.65091 21.7098 1.97569 20.8555 1.97569ZM7.82107 19.602H4.66089V10.0944H7.82107V19.602ZM6.2412 8.79558H6.22003C5.16 8.79558 4.4742 8.06533 4.4742 7.15305C4.4742 6.22045 5.18117 5.51052 6.26194 5.51052C7.34313 5.51052 8.00819 6.22045 8.02935 7.15305C8.02935 8.06533 7.34271 8.79558 6.2412 8.79558ZM19.2168 19.602H16.0566V14.5144C16.0566 13.2368 15.5994 12.3647 14.456 12.3647C13.5831 12.3647 13.0632 12.9527 12.8342 13.5208C12.7508 13.7236 12.7305 14.0072 12.7305 14.2917V19.6016H9.57028C9.57028 19.6016 9.61177 10.9851 9.57028 10.0939H12.7305V11.4397C13.1504 10.792 13.9014 9.86958 15.5791 9.86958C17.6581 9.86958 19.2172 11.2289 19.2172 14.1495V19.602H19.2168Z"
                fill="#2E343B"
              />
            </svg>
          </div>
          <p class="text-lg text-my-blue-dark w-56 md:w-72 mt-14 lg:mt-24 ml-4 md:ml-14 lg:text-3xl lg:font-light lg:ml-0 lg:w-[26rem]">
            I like to tackle challenges, learn from them, write about them, and
            have fun while in the process!
          </p>
        </div>
      </Header>
      <main>
        <section class="bg-white md:py-52">
          <div class="lg:max-w-5xl lg:mx-auto flex flex-col space-y-6">
            <h2 class="mt-24 md:my-24 ml-4 md:ml-10 text-3xl text-my-blue lg:text-4xl lg:ml-0">
              Latest posts ✨
            </h2>
            <div class="mx-3 md:mx-6 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-7 lg:gap-x-12 md:gap-y-12 lg:mx-0">
              <Card
                title="My first blog post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis libero quisas orci elementum, eget condimentum lorem..."
                url="https://dev.to/abc/def"
                showCTA
              />
              <Card
                title="My second blog post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis libero quisas orci elementum, eget condimentum lorem..."
                url="#"
                showCTA
              />
              <Card
                title="My third blog post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis libero quisas orci elementum, eget condimentum lorem..."
                url="#"
                showCTA
              />
              <p class="text-lg pl-4 md:pl-2 md:text-xl underline text-my-blue md:col-span-full lg:text-2xl pb-8 md:pb-24">
                <a>View all blog posts</a>
              </p>
            </div>
          </div>
        </section>
        <section class="bg-my-orange-light px-4 md:px-10 py-8 md:py-52 text-my-blue-dark">
          <div class="lg:max-w-5xl lg:mx-auto">
            <h2 class="text-3xl text-my-blue">About me 👋</h2>
            <div class="md:flex lg:justify-between lg:pt-16 lg:max-w-4xl">
              <img
                loading="lazy"
                class="rounded-full w-32 h-32 lg:w-64 lg:h-64 object-cover float-right mt-2 md:float-none md:order-last"
                style="shape-outside: circle()"
                height="128"
                width="128"
                src="/pic1.webp"
                alt="Guille"
              />
              <div>
                <p class="pt-2 md:max-w-md">
                  I’m Guillermo Peralta Scura, a web developer focused on the
                  front-end. I enjoy building UIs and after some experience with
                  different technologies, I’ve found the Web as my platform of
                  choice.
                </p>
                <p class="pt-4 md:max-w-md">
                  I’m part of the Web team at{" "}
                  <span class="font-semibold">PSPDFKit</span>, where I’ve been
                  involved in adding new features to the SDK, coordinating with
                  other teams, and mentoring other co-workers, across areas such
                  as support, sales, and development. Take a look at the public
                  demo of this platform.
                </p>
                <p class="pt-4 md:max-w-md">
                  The Web can run on multiple devices and under a single
                  codebase. You have competing engines and end-user browsers
                  competing and bringing new features all the time, plus, it’s
                  constantly evolving and having new features being added to it
                  all the time. It never stops being an exciting area to be in!
                </p>
              </div>
            </div>
            <h3 class="pt-8 text-2xl text-my-blue lg:text-3xl">Hobbies 🎸</h3>
            <div class="md:flex lg:justify-between lg:pt-16 lg:max-w-4xl">
              <img
                loading="lazy"
                class="rounded-full w-32 h-32 lg:w-64 lg:h-64 object-cover float-left md:float-none mr-2"
                style="shape-outside: circle()"
                height="128"
                width="128"
                src="/pic2.webp"
                alt="Me playing guitar"
              />
              <p class="mt-6 md:max-w-md">
                Although my guitar skills are lacking ;), I enjoy attempting to
                play it in a somewhat acceptable way. Besides that, I like to
                watch a good movie or some series on Netflix.
              </p>
            </div>
            <CtaButton class="mt-6 md:mt-16 mx-auto">
              Download my resume
            </CtaButton>
          </div>
        </section>
        <section class="bg-white mt-4 text-my-blue-dark md:px-10 md:py-52">
          <div class="lg:max-w-5xl lg:mx-auto flex flex-col space-y-8">
            <h2 class="mt-7 ml-4 md:ml-0 md:mt-0 text-3xl text-my-blue">
              My Bookmarks 🔖
            </h2>
            <div class="ml-4 md:ml-0 md:max-w-md lg:max-w-lg">
              <p>
                Links from around the Web that I find useful for work, or they
                are interesting reads, or whatever...
              </p>
              <p>
                This is all for my personal use but I’m deciding to make them
                public because why not! They can be useful for someone else 🤷🏻‍♂️
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-3 md:gap-x-9 lg:gap-x-36 gap-y-6 md:gap-y-16 mx-2 md:mx-0">
              <Card
                title="Streams Standard"
                url="https://streams.spec.whatwg.org/"
                showCTA={false}
              />
              <Card
                title="Why Efficient Hydration in JavaScript Frameworks is so Challenging"
                url="https://dev.to/this-is-learning/why-efficient-hydration-in-javascript-frameworks-is-so-challenging-1ca3"
                showCTA={false}
              />
              <Card
                title="React 18: Streaming SSR"
                url="https://nextjs.org/docs/advanced-features/react-18/streaming"
                showCTA={false}
              />
              <Card title="React 18: Streaming SSR" url="#" showCTA={false} />
            </div>
            <p class="pl-4 md:pl-0 underline text-my-blue text-lg md:text-xl lg:text-2xl pb-8">
              <a>View all bookmarks</a>
            </p>
          </div>
        </section>
        <section class="bg-my-orange-light px-4 py-8 text-my-blue-dark md:px-10 md:py-52">
          <div class="lg:max-w-5xl lg:mx-auto">
            <h2 class="text-3xl text-my-blue">Speaking 🎙</h2>
            <div class="text-my-blue md:grid md:grid-cols-2">
              <VideoThumbnail
                class="mt-8"
                title="PSPDFKit SharePoint Integration"
                description="Live webinar in which I introduced the PSPDFKit integration for SharePoint Online"
                thumbnailSrc={"/video2.webp"}
                url="https://www.youtube.com/watch?v=GhvStHDIuto"
              />
              <VideoThumbnail
                class="mt-8"
                title="Meetup Mayo 2020 JavaScript Py"
                description="Meetup that I co-organized and in which I made a talk about accessibility in React apps (Spanish)"
                thumbnailSrc={"/video1.webp"}
                url="https://www.youtube.com/watch?v=kV-M3aZ3y9c"
              />
              <p>
                <a class="block mt-8 md:text-xl underline lg:text-2xl">
                  View all talks
                </a>
              </p>
            </div>
          </div>
        </section>
        <section class="bg-white py-14 mb-0 px-4 md:px-10 md:py-52 text-my-blue-dark">
          <div class="lg:max-w-5xl lg:mx-auto space-y-6 md:space-y-12">
            <h2 class="text-3xl text-my-blue">Contact ✉️</h2>
            <div class="flex flex-col md:flex-row">
              <p class="md:max-w-md">
                You can send me an e-mail to{" "}
                <span class="font-semibold">gperaltascura[at]gmail.com</span> or
                follow me on Twitter at&nbsp;
                <span class="font-semibold">@voluntadpear</span>
              </p>
              <CtaButton class="mt-6 mx-auto md:mt-0">
                Download my resume
              </CtaButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
