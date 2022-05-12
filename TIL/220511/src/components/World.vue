<template>
  <h1>World</h1>
</template>

<script>
export default {
  created() {
    console.log("world 만들어짐");
  },
  unmounted() {
    console.log("world 없어짐");
  },
};
</script>
