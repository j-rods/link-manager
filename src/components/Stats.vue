<template>
  <div class="stats">
    <h1>Stats Component</h1>
    <p>There are currently {{ countLinks }} links</p>
    <button @click="removeAllLinks">Remove all links</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'Stats',
  data() {
    return {
      msg: '',
    }
  },
  computed: {
    ...mapGetters([
      'countLinks'
    ]),
  },
  methods: {
    ...mapActions([
      'removeAll'
    ]),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = 'All Links removed'
      })
      .catch(error => {
        console.log(error)
      })
    }

  }
};
</script>

<style scoped>
button {
  padding: 10px;
  margin-top: 30px;
  width: 100%;
  background: none;
  border: 1px solid lightgrey;
  outline: 0;
  cursor: pointer;
}
</style>
