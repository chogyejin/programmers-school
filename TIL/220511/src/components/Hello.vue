<template>
  <h1
    :class="$attrs.class"
    :style="$attrs.style">
    Hellooooo
  </h1>
  <h2 @click="$attrs.onClick">
    what
  </h2>
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
