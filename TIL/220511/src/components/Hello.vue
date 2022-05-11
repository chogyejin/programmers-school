<template>
  <div>
    <h1 @click="update">
      {{ newMsg }}
    </h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    name: [String, Number], // string, number 타입 둘 다 가능
  }, // props 받기
  data() {
    return {
      newMsg: this.message,
    };
  },
  methods: {
    update() {
      this.newMsg = "잘 가!!"; // 가공한 데이터를 활용
    },
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
