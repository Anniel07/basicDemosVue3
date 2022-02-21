<template>
  
  <div>
    <div class="container">
      <h1>Let's hear some stories!</h1>
      <ul class="list-group">
        <li
          v-for="story in orderedStories"
          :key="story.id"
          class="list-group-item"
        >
          {{ story.writer }} said "{{ story.plot }}" and upvoted
          {{ story.upvotes }} times.
        </li>
      </ul>
      <br />
      <button class="btn btn-primary" @click="order = order === 'desc' ? 'asc' : 'desc'">
        Reverse Order
      </button>

      <!-- the code bellow is only for filter the famous stories , nothing about
      sorting is done
      -->
      <h1>Let's hear some famous stories! ({{famous.length}})</h1>
      <ul class="list-group">
        <li v-for="story in famous" :key="story.id" class="list-group-item">
          {{ story.writer }} said "{{ story.plot }}" and upvoted
          {{ story.upvotes }} times.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortingDemo",
  data: function () {
    return {
      stories: [
        {
          id: 1,
          plot: "I crashed my car today!",
          writer: "Alex",
          upvotes: 28,
        },
        {
          id: 2,
          plot: "Yesterday, someone stole my bag!",
          writer: "John",
          upvotes: 60,
        },
        {
          id: 3,
          plot: "Someone ate my chocolate...",
          writer: "John",
          upvotes: 4,
        },
        {
          id: 4,
          plot: "I ate someone's chocolate!",
          writer: "Alex",
          upvotes: 15,
        },
      ],
      order: "desc",
    };
  },

  computed: {
    //this is a funtion
    orderedStories: function () {
      // params array and field to sort, is needed lodash is order to use _.orderBy
      return _.orderBy(this.stories, "upvotes", this.order);
    },
    famous: function (){
      return this.stories.filter((storie) => {
        return storie.upvotes > 20;
      });
    }
  },
};
</script>

