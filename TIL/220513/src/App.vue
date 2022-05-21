<template>
  <div>
    <router-link to="/"> Home </router-link>
    <router-link to="/about"> About </router-link>
    <router-link
      :to="{
        name: 'docsId',
        params: { id: 777 },
        query: { name: 'chogyejin', age: 27 },
      }"
    >
      docs 아이디
    </router-link>
    <button @click="$router.push('/')">홈으로</button>
    <button @click="$router.push('/about')">About으로</button>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
