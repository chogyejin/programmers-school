<template>
  <div style="transform: scale(1)">
    <Modal width="300px">
      <template #activator>
        <button>모달 켜기</button>
      </template>
      <h3>App.vue</h3>
    </Modal>
    <Hello />
  </div>
</template>

<script>
// import Modal from "./components/Modal.vue"; // 지역으로 등록할 때
import Hello from "~/components/Hello";

export default {
  components: { Hello },
  data() {
    return {};
  },
  methods: {},
};
</script>
