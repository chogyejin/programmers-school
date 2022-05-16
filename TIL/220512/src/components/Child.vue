<template>
  <div>
    <h1>난 자식!</h1>
    <h1>{{ msg.value }}</h1>
  </div>
</template>

<script>
export default {
  inject: ["msg"],
};
</script>
