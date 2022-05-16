<template>
  <div>
    <Hello />
    <World />
  </div>
</template>

<script>
import Hello from "~/components/Hello";
import World from "~/components/World";

export default {
  components: { Hello, World },
  data() {
    return {
      msg: "안녕",
    };
  },
};
</script>
