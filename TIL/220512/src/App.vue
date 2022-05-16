<template>
  <div>
    <h1 @click="msg += '!!'">{{ msg }} 난 App임</h1>
    <Parent />
  </div>
</template>

<script>
import Parent from "~/components/Parent";
import { computed } from "vue";

export default {
  components: { Parent },
  provide() {
    return {
      msg: computed(() => this.msg),
    };
  },
  data() {
    return {
      msg: "안녕",
    };
  },
};
</script>
