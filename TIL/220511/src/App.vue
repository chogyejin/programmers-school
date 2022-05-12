<template>
  <div>
    <Hello ref="hello" />
    <div v-if="!isEdit">
      <h1>{{ msg }}</h1>
      <button @click="onEdit">수정버튼</button>
    </div>
    <div v-else>
      <input
        ref="editor"
        v-model="msg"
        type="text"
        @keyup.enter="isEdit = false"
      />
    </div>
  </div>
</template>

<script>
import Hello from "~/components/Hello";

export default {
  // App 컴포넌트에 지역 컴포넌트 등록
  components: {
    Hello,
  },
  data() {
    return {
      msg: "",
      isEdit: false,
    };
  },
  mounted() {
    console.log(this.$refs.hello); // 컴포넌트(proxy 객체)
    console.log(this.$refs.hello.$refs.world); // 컴포넌트 속 ref 찾기
  },
  methods: {
    onEdit() {
      this.isEdit = true; // 데이터가 바뀐 후 화면에 바로 보여지는 것 보장 안됨
      this.$nextTick(() => {
        this.$refs.editor.focus();
      });
    },
  },
};
</script>
