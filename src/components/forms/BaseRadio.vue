<template>
  <div class="form-check">
    <input type="radio" :id="id" name="formCheck" class="form-check-input" />
    <label :for="id" class="form-check-label required">Radio Label</label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
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
