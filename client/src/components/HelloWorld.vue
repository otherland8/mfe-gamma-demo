<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div id="accordion-collapse" data-accordion="collapse">
    <h2 id="accordion-collapse-heading-1">
      <button
        type="button"
        class="gamma-flex gamma-items-center gamma-justify-between gamma-w-full gamma-p-5 gamma-font-medium gamma-rtl:text-right gamma-text-gray-500 gamma-border gamma-border-b-0 gamma-border-gray-200 gamma-rounded-t-xl focus:gamma-ring-4 focus:gamma-data-ring-gray-200 dark:focus:gamma-data-ring-gray-800 dark:gamma-data-border-gray-700 dark:gamma-data-text-gray-400 hover:gamma-data-bg-gray-100 dark:hover:gamma-data-bg-gray-800 gamma-gap-3"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span>What is the MFE architecture?</span>
        <svg
          data-accordion-icon
          class="gamma-w-3 gamma-h-3 gamma-rotate-180 gamma-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-1"
      aria-labelledby="accordion-collapse-heading-1"
    >
      <div
        class="gamma-p-5 gamma-border gamma-border-b-0 gamma-border-gray-200 dark:gamma-border-gray-700 dark:gamma-bg-gray-900"
      >
        <p class="gamma-mb-2 gamma-text-gray-500 dark:gamma-text-gray-400">
          The idea behind Micro Frontends is to think about a website or web app
          as a composition of features which are owned by independent teams.
          Each team has a distinct area of business or mission it cares about
          and specialises in. A team is cross functional and develops its
          features end-to-end, from database to user interface.
        </p>
      </div>
    </div>
    <h2 id="accordion-collapse-heading-2">
      <button
        type="button"
        class="gamma-flex gamma-items-center gamma-justify-between gamma-w-full gamma-p-5 gamma-font-medium rtl:gamma-text-right gamma-text-gray-500 gamma-border gamma-border-b-0 gamma-border-gray-200 focus:gamma-ring-4 focus:gamma-ring-gray-200 dark:focus:gamma-ring-gray-800 dark:gamma-border-gray-700 dark:gamma-text-gray-400 hover:gamma-bg-gray-100 dark:hover:gamma-bg-gray-800 gamma-gap-3"
        data-accordion-target="#accordion-collapse-body-2"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-2"
      >
        <span>Why would you use micro-frontends?</span>
        <svg
          data-accordion-icon
          class="gamma-w-3 gamma-h-3 gamma-rotate-180 gamma-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-2"
      class="gamma-hidden"
      aria-labelledby="accordion-collapse-heading-2"
    >
      <div
        class="gamma-p-5 gamma-border gamma-border-b-0 gamma-border-gray-200 dark:gamma-border-gray-700"
      >
        <p class="gamma-mb-2 gamma-text-gray-500 dark:gamma-text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software
          so everything you see in the library has a design equivalent in our
          Figma file.
        </p>
        <p class="gamma-text-gray-500 dark:gamma-text-gray-400">
          Check out the
          <a
            href="https://flowbite.com/figma/"
            class="gamma-text-blue-600 dark:gamma-text-blue-500 hover:gamma-underline"
            >Figma design system</a
          >
          based on the utility classes from Tailwind CSS and components from
          Flowbite.
        </p>
      </div>
    </div>
    <h2 id="accordion-collapse-heading-3">
      <button
        type="button"
        class="gamma-flex gamma-items-center gamma-justify-between gamma-w-full gamma-p-5 gamma-font-medium rtl:gamma-text-right gamma-text-gray-500 gamma-border gamma-border-gray-200 focus:gamma-ring-4 focus:gamma-ring-gray-200 dark:focus:gamma-ring-gray-800 dark:gamma-border-gray-700 dark:gamma-text-gray-400 hovergamma-:bg-gray-100 dark:hover:gamma-bg-gray-800 gamma-gap-3"
        data-accordion-target="#accordion-collapse-body-3"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-3"
      >
        <span>What are the differences between micro-frontends and classic frontend architectures?</span>
        <svg
          data-accordion-icon
          class="gamma-w-3 gamma-h-3 gamma-rotate-180 gamma-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-3"
      class="gamma-hidden"
      aria-labelledby="accordion-collapse-heading-3"
    >
      <div
        class="gamma-p-5 gamma-border gamma-border-t-0 gamma-border-gray-200 dark:gamma-border-gray-700"
      >
        <p class="gamma-mb-2 gamma-text-gray-500 dark:gamma-text-gray-400">
          The main difference is that the core components from Flowbite are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Another difference is that Flowbite relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p class="gamma-mb-2 gamma-text-gray-500 dark:gamma-text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and
          even Tailwind UI as there is no technical reason stopping you from
          using the best of two worlds.
        </p>
        <p class="gamma-mb-2 gamma-text-gray-500 dark:gamma-text-gray-400">
          Learn more about these technologies:
        </p>
        <ul
          class="gamma-ps-5 gamma-text-gray-500 gamma-list-disc dark:gamma-text-gray-400"
        >
          <li>
            <a
              href="https://flowbite.com/pro/"
              class="gamma-text-blue-600 dark:gamma-text-blue-500 hover:gamma-underline"
              >Flowbite Pro</a
            >
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="nofollow"
              class="gamma-text-blue-600 dark:gamma-text-blue-500 hover:gamma-underline"
              >Tailwind UI</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
