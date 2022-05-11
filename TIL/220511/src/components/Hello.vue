<template>
  <div>
    <h1>{{ id }} // {{ title }} // {{ email }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: {
      type: String,
      required: true,
    },
    email: { type: String, default: "aa@aa.com" },
  },
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
