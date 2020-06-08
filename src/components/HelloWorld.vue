<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{ link }}
        </li>
      </ul>
    </div>
    <div class="right">
      <stats />
    </div>
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue'
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  components: {
    Stats
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ]),
    // other properties added here
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
