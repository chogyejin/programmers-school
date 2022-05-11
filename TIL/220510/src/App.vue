<template>
  <div>
    <h1 class="adsf">
      {{ msg }}
    </h1>
    <Hello />
  </div>
</template>

<script>
import Hello from "~/components/Hello";

export default {
  components: {
    Hello,
  },
  data() {
    return { msg: "안녕ㅇ" };
  },
};
</script>
