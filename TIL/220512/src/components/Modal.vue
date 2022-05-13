<template>
  <div>
    <div @click="onModal">
      <slot name="activator"></slot>
    </div>
    <teleport to="body">
      <template v-if="modelValue">
        <div class="modal" @click="offModal">
          <div
            class="modal__inner"
            :style="{ width: `${parseInt(width, 10)}px` }"
            @click.stop
          >
            <button v-if="closeable" class="close" @click="offModal">X</button>
            <slot></slot>
          </div>
        </div>
      </template>
    </teleport>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 400,
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      defalut: false,
    },
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(newValue) {
      if (newValue) {
        window.addEventListener("keyup", this.keyupHandler);
      } else {
        // remove 하지 않으면 모달이 꺼져도 이벤트리스너가 있음 => 메모리 낭비
        window.removeEventListener("keyup", this.keyupHandler);
      }
    },
  },
  methods: {
    onModal() {
      // this.modelValue = true;
      this.$emit("update:modelValue", true);
    },
    offModal() {
      this.$emit("update:modelValue", false);
    },
    keyupHandler(event) {
      if (event.key === "Escape") {
        console.log("esc로 모달 닫기");
        this.offModal();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 10px 10px rgba(black, 0.2);
    button.close {
      float: right;
    }
  }
}
</style>
