<template>
  <div class="form-check">
  <input
    value=""
    type="checkbox"
    id="base-checkbox"
    checked=""
    name="formCheck"
    class="form-check-input"
  />
  <label for="base-checkbox" class="form-check-label required"
    >Checkbox Label</label
  >
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox'
}
</script>
<style lang="scss">
.form-check {
  @apply flex items-center mb-1;

  label {
  @apply block font-semibold tracking-wide text-sm;
  }

  .form-check-input {
  @apply mr-2;
  }

  .form-check-label {
  }
}
</style>
