<template>
  <div>
    <h1>DocumnetsId 컴포넌트</h1>
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
};
</script>
