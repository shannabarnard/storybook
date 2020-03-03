<template>
  <div class="form-group">
    <label for="base-input">
      Input Label
    </label>
    <input
      id="base-input"
      class="form-control"
      type="text"
      placeholder="input"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput'
}
</script>

<style lang="scss">
.form-group {
  @apply text-left mb-4;

  label {
    @apply block font-semibold tracking-wide text-sm mb-2;
  }

  input,
  select,
  textarea,
  .form-control {
    @apply appearance-none block w-full border border-gray-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight;

    &:focus {
      @apply border-primary-700;
    }
  }
}
</style>
