<template>
  
  <div>
    <div class="container">
      <h1>Let's hear some stories!</h1>
      <div>
        <h3>Alex's stories</h3>
        <ul class="list-group">
          <li
            v-for="story in filterByName('Alex')"
            :key="story.id"
            class="list-group-item"
          >
            {{ story.writer }} said "{{ story.plot }}"
          </li>
        </ul>
        <br />
        <h3>John's stories</h3>
        <ul class="list-group">
          <li
            v-for="story in filterByName('John')"
            :key="story.id"
            class="list-group-item"
          >
            {{ story.writer }} said "{{ story.plot }}"
          </li>
        </ul>

        <br />
        <!-- Searching by plot  -->
        <div class="form-group">
          <label for="query"> What are you looking for? </label>
          <input v-model="query" class="form-control" />
        </div>
        <h3>Search results:</h3>
        <ul class="list-group">
          <!-- using computed property to filter -->
          <li
            v-for="story in filterByPlot"
            :key="story.id"
            class="list-group-item"
          >
            {{ story.writer }} said "{{ story.plot }}"
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiltringDemo",
  data: function () {
    return {
      stories: [
        {
          id: 1,
          plot: "I crashed my car today!",
          writer: "Alex",
        },
        {
          id: 2,
          plot: "Yesterday, someone stole my bag!",
          writer: "John",
        },
        {
          id: 3,
          plot: "Someone ate my chocolate...",
          writer: "John",
        },
        {
          id: 4,
          plot: "I ate someone's chocolate!",
          writer: "Alex",
        },
      ],
      query: ""
    };
  },
  methods: {
    filterByName(name) {
      return this.stories.filter((storie) => {
        return storie.writer.toLowerCase() === name.toLowerCase();
      });
    },
  },
  computed: {
    //this is a funtion
    filterByPlot() {
      return this.stories.filter((storie) => {
        return storie.plot.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  },
};
</script>

