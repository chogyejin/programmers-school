<template>
  <div>
    <!-- count는 mixin, msg는 App의 msg-->
    <h1>{{ count }}</h1>
    <h1>{{ msg }}</h1>
    <Hello />
  </div>
</template>

<script>
import Hello from "~/components/Hello";
import sampleMixin from "./mixins/sample";

export default {
  components: {
    Hello,
  },
  mixins: [sampleMixin],
  data() {
    return { msg: "안녕ㅇ" };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await this.$myFetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(res);
    },
  },
};
</script>
