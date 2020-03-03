<template>
  <div class="w-full max-w-screen-xl mx-auto mb-10">
    <div class="flex flex-col min-h-screen md:flex-row">
      <div class="w-screen bg-white md:w-2/4">
        <div class="flex flex-wrap items-end h-full">
          <div class="p-12 text-left w-12/12">
            <h1>HolidayTaxis Colours</h1>
            <p>
              The primary brand colour is a bold, reliable dark blue, with a
              palette of secondary blue tints to use alongside where needed.
            </p>
            <p>
              We use a vibrant green sparingly as an accent colour, mainly for
              CTA’s.
            </p>
            <p>
              A range of cool greys are used throughout the website.
            </p>
            <p>
              Body copy typeface colour is dark slate grey.
            </p>
          </div>
          <div
            v-for="(color, index) in colors.gray"
            :key="index"
            class="color"
            :class="color"
          ></div>
        </div>
      </div>
      <div class="w-screen md:w-1/4 bg-primary-700">
        <div class="flex items-end h-full">
          <div
            v-for="(color, index) in colors.primary"
            :key="index"
            class="color"
            :class="color"
          ></div>
        </div>
      </div>
      <div class="w-screen md:w-1/4 bg-secondary-600">
        <div class="flex items-end h-full">
          <div
            v-for="(color, index) in colors.secondary"
            :key="index"
            class="color"
            :class="color"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pallet',
  components: {},
  data () {
    return {
      colors: {
        gray: [
          'bg-white',
          'bg-gray-100',
          'bg-gray-200',
          'bg-gray-300',
          'bg-gray-400',
          'bg-gray-500',
          'bg-gray-600',
          'bg-gray-700',
          'bg-gray-800',
          'bg-gray-900'
        ],
        primary: [
          'bg-primary-200',
          'bg-primary-300',
          'bg-primary-400',
          'bg-primary-500',
          'bg-primary-600',
          'bg-primary-700'
        ],
        secondary: [
          'bg-secondary-100',
          'bg-secondary-200',
          'bg-secondary-300',
          'bg-secondary-400',
          'bg-secondary-500',
          'bg-secondary-600'
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.color {
  @apply flex-auto h-16;
}
</style>
