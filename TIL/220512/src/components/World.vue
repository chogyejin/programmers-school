<template>
  <div>
    <h1>난 World</h1>
    <div>{{ reversedMsg }}</div>
    <div @click="decreaseCount">
      {{ count }}
    </div>
  </div>
</template>

<script>
import { state, getters, mutations } from "~/store";

export default {
  data() {
    return state;
  },
  computed: {
    reversedMsg: getters.reversedMsg,
  },
  methods: {
    decreaseCount: mutations.decreaseCount,
  },
};
</script>
