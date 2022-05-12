<template>
  <button>
    <slot>fallback 이름</slot>
  </button>
</template>

<script>
export default {
  methods: {
    log() {
      console.log("클릭");
    },
  },
};
</script>

<style scoped lang="scss">
button {
  padding: 10px 20px;
  &:hover {
    background-color: orange;
    transform: scale(1.2);
  }
}
</style>
