<template>
  <button @click="log">버튼</button>
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
