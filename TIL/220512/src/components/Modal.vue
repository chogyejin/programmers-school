<template>
  <div>
    <div @click="onModal">
      <slot name="activator"></slot>
    </div>
    <teleport to="body">
      <template v-if="isShow">
        <div class="modal" @click="offModal">
          <div
            class="modal__inner"
            :style="{ width: `${parseInt(width, 10)}px` }"
            @click.stop
          >
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
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onModal() {
      this.isShow = true;
    },
    offModal() {
      this.isShow = false;
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
  }
}
</style>
