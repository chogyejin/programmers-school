<template>
  <h1 ref="hello">Hello 컴포넌트</h1>
  <h1 ref="world">world</h1>
</template>

<script>
export default {
  mounted() {
    const h1Element = this.$refs.hello;
    console.log(h1Element);
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
