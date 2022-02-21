<template>
  <div>
    <li class="list-group-item">{{ story.writer }} said "{{ story.plot }}"</li>
  </div>
</template>

<script>
//Story Component, this component is used in UsingComponentsDemo.vue 
export default {
  name: "Story",
  props: {
    story: Object,
  },
};
</script>

