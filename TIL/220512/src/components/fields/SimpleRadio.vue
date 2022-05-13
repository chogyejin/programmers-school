<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in items" :key="item">
        <label>
          <!-- eslint-disable -->
          <input
            type="radio"
            :value="item"
            :name="title"
            @input="$emit('update:modelValue', $event.target.value)"
          />
          {{ item }}
          <!-- eslint-enable -->
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import fieldMixin from "./mixin";

export default {
  mixins: [fieldMixin],
};
</script>
