<template>
  <div class="style__page">
    <div class="w-screen p-12 text-left md:w-1/2">
      <h1>Typography</h1>
      <p>Our brand heading typeface is <strong>Varela Round Regular</strong></p>
      <p>
        For everything else including body copy we use Open Sans in several
        weights.
      </p>
    </div>
    <div class="w-screen h-full p-12 md:w-1/2">
      <div class="p-4 overflow-hidden ">
        <div class="mb-6">
          <code>.text-xs</code>
          <p class="text-xs text-gray-800 truncate">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
        <div class="mb-6">
          <code>.text-sm</code>
          <p class="text-sm text-gray-800 truncate">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
        <div class="mb-6">
          <code>p .text-base</code>
          <p class="text-gray-800 truncate">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
        <div class="mb-6">
          <code>strong</code>
          <p>
            <strong class="text-gray-800 truncate">
              Five or six big jet planes zoomed quickly by the new tower.
            </strong>
          </p>
        </div>
        <div class="mb-6">
          <code>h6 .h6</code>
          <p class="text-gray-800 truncate h6">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
        <div class="mb-6">
          <code>h5 .h5</code>
          <p class="text-gray-800 truncate h5">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
        <div class="mb-6">
          <code>h4 .h4</code>
          <p class="text-gray-800 truncate h4">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
        <div class="mb-6">
          <code>h3 .h3</code>
          <p class="text-gray-800 truncate h3">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
        <div>
          <code>h2 .h2</code>
          <p class="text-gray-800 truncate h2">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
        <div>
          <code>h1 .h1</code>
          <p class="text-gray-800 truncate h1">
            Five or six big jet planes zoomed quickly by the new tower.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Typography'
}
</script>
<style lang="scss">
.style__page {
  @apply flex flex-wrap items-center justify-center mb-10 w-full min-h-screen;

  > div:nth-of-type(2) {
    @apply bg-gray-100;
  }
}
</style>
