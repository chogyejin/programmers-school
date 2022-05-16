<template>
  <div>
    <h1>난 World</h1>
    <div>{{ reversedMsg }}</div>
    <div>{{ storedMsg }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    reversedMsg() {
      return this.$store.getters.reversedMsg;
    },
    storedMsg() {
      return this.$store.state.message.msg;
    },
  },
};
</script>
