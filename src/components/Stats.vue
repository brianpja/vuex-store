<template>
  <div class="stats">
    <h1>This is in a different Stats Component</h1>
    <p>There are currently {{ countLinks }} links</p>

    <button v-on:click="removeAllLinks">Remove all links</button>
    <p v-if="isLoading">Processing request...</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Stats',
  data() {
    return {
      msg: '',
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters([
      'countLinks'
    ]),

  },
  methods: {
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions([
      'removeAll'
    ]),
    setLoading(bool) {
      this.isLoading = bool;
    },
    removeAllLinks() {
      this.setLoading(true)
      this.removeAll().then(() => {
        this.setLoading(false)
        this.msg = 'Poof! They are gone!'
      })
    }
  }
}
</script>

<style scoped>
  button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
  }
</style>