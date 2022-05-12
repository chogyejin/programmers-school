<template>
  <div>
    <h1>Hello 컴포넌트</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log("hello 만들어짐");
  },
  unmounted() {
    console.log("hello 없어짐");
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
