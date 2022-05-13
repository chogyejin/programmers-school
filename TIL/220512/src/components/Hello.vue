<template>
  <Modal v-model="isShow" closeable>
    <template #activator>
      <h1>헬로 컴포넌트의 모달</h1>
    </template>
    <h3>모달 창</h3>
    <textarea ref="editor" v-model="msg"></textarea>
    <button @click="submit">제출</button>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      msg: "메시지를 입력하세요",
      isShow: false,
    };
  },
  watch: {
    isShow(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.$refs.editor.focus(); // isShow가 바뀌고 DOM의 다음 변화주기 때 focus
        });
      }
    },
  },
  methods: {
    submit() {
      console.log(this.msg);
    },
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
textarea {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}
</style>
