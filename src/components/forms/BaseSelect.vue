<template>
  <div class="form-group">
    <label for="base-select">
      Select Label
    </label>
    <select
      class="form-control"
      id="base-select"
      aria-placeholder="please select"
    >
      <option value="" disabled selected hidden>please select...</option>
      <option>New Mexico</option>
      <option>Missouri</option>
      <option>Texas</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect'
}
</script>
<style lang="scss">
select {
  background: white
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23323F4B' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 0.75rem center/8px 10px;
}
</style>
