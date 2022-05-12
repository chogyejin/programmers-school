<template>
  <div>
    <Hello>
      <template #default="{ num }">
        {{ num }}
      </template>
      <template #abc="{ myName }">
        <h1>ABC {{ myName }}</h1>
      </template>
      <template #xyz>
        <h1>XYZ</h1>
      </template>
    </Hello>
    <Btn>클릭 하세요!</Btn>
    <Btn />
  </div>
</template>

<script>
import Hello from "~/components/Hello";

export default {
  // App 컴포넌트에 지역 컴포넌트 등록
  components: {
    Hello,
  },
};
</script>
