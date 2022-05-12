<template>
  <div>
    <slot :num="123"></slot>
    <slot name="xyz"></slot>
    <slot name="abc" my-name="chogyejin"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
