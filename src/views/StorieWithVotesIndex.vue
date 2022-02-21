<template>
  <!-- REQUIRED MAIN CONTAINER-->

  <div class="container">
    <h1>Let's hear some stories!</h1>
    <ul class="list-group">
      <story-upvote v-for="story in stories" :key="story.id" :story="story" />
    </ul>
  </div>
</template>

<script>

import StoryUpvote from './StoryUpvote.vue';

/**
 * This comp is used with StoryUpvote
 */
export default {
  components: { StoryUpvote }, // StorieWithVotesIndex use StoryUpvote component
  name: "StorieWithVotesIndex",

  data: function () {
    return {
      stories: [
        {
          id: 1,
          plot: "I crashed my car today!",
          writer: "Alex",
          voted: false,
          upvotes: _.random(0, 10)
        },
        {
          id: 2,
          plot: "Yesterday, someone stole my bag!",
          writer: "John",
          voted: false,
          upvotes: _.random(0, 10)
        },
        {
          id: 3,
          plot: "Someone ate my chocolate...",
          writer: "John",
          voted: false,
          upvotes: _.random(0, 10)
        },
        {
          id: 4,
          plot: "I ate someone's chocolate!",
          writer: "Alex",
          voted: false,
          upvotes: _.random(0, 10)
        },
      ],
    };
  },
  
  
};
</script>

