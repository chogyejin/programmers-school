<template>
  <div>
    <h1 @click="$emit('reverse', 11)">뒤집기</h1>
    <h1 @click="$emit('click')">클릭</h1>
    <input
      :value="myName"
      @input="$emit('update:myName', $event.target.value)"
    />
    <input
      :value="myHobby"
      @input="$emit('update:myHobby', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    myName: {
      type: String,
      default: "",
    },
    myHobby: {
      type: String,
      default: "",
    },
  },
  emits: {
    // 커스텀 이벤트 검사(할 거 없으면 null, 있으면 함수 정의)
    click: null,
    reverse: (number) => {
      if (number > 10) {
        return true;
      } else {
        console.error("10보다 작아용"); // 글자 뒤집히기는 함
        return false;
      }
    },
    "update:myName": null,
    "update:myHobby": null,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
