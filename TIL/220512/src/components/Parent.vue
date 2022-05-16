<template>
  <div>
    <h1>난 Parent임</h1>
    <Child />
  </div>
</template>

<script>
import Child from "~/components/Child";

export default {
  components: { Child },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
