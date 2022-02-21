<template>
  <div>
    <li class="list-group-item">
      {{ story.writer }} said "{{ story.plot }}". Story upvotes
      {{ story.upvotes }}.
      <button v-show="!story.voted" @click="upvote" class="btn btn-success">
        Upvote
      </button>
    </li>
  </div>
</template>

<script>
//StoryUpvote Component, this component is used in StorieWithVotesIndex.vue
export default {
  name: "StoryUpvote",
  props: {
    story: Object,
  },
  methods: {
    upvote: function(){
      //console.log(this.story.id)
      this.story.voted = true
      this.story.upvotes++
    }
  }
};
</script>

