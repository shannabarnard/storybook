<template>
<!-- Using utilities: -->
<button class="inline-block px-3 py-2 font-semibold uppercase rounded hover:bg-gray-400">
  <slot />
</button>
</template>

<style lang="scss">
  .btn {
    @apply px-3 py-2 rounded inline-block font-semibold uppercase;

    &:hover {
      @apply bg-green-400;
    }
  }

  .btn-primary {
    @apply bg-primary-700 text-white;

    &:hover {
      @apply bg-primary-800;
    }

    &.btn-flat {
      @apply bg-transparent text-primary-700;

      &:hover {
        @apply bg-primary-300;
      }
    }
  }

  .btn-primary-outline {
    @apply border border-solid border-primary-700 text-primary-700;

    &:hover {
      @apply bg-primary-800 text-white;
    }
  }

  .btn-secondary {
    @apply bg-secondary-600 text-white;

    &:hover {
      @apply bg-secondary-700;
    }

    &.btn-flat {
      @apply bg-transparent text-secondary-600;

      &:hover {
        @apply bg-secondary-200 text-secondary-900;
      }
    }
  }

  .btn-secondary-outline {
    @apply border border-solid border-secondary-600 text-secondary-600;

    &:hover {
      @apply bg-secondary-700 text-white;
    }
  }

  .btn-danger {
    @apply bg-red-600 text-white;

    &:hover {
      @apply bg-red-700;
    }

    &.btn-flat {
      @apply bg-transparent text-red-700;

      &:hover {
        @apply bg-red-200 text-red-700;
      }
    }
  }

  .btn-danger-outline {
    @apply border border-solid border-red-600 text-red-600;

    &:hover {
      @apply bg-red-700 text-white;
    }
  }

  .btn-light {
    @apply bg-gray-300;

    &:hover {
      @apply bg-gray-400;
    }
  }

  .btn-light-outline {
    @apply border border-solid border-gray-500;

    &:hover {
      @apply bg-gray-500;
    }
  }

  .btn-link {
    @apply text-primary-700 lowercase;

    &:hover {
      @apply bg-transparent underline;
    }
  }
</style>
