<template>
  <div class="linkManager">
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addLink">
        <input class="link-input" type="text" placeholder="Add a Link" v-model="newLink" />
      </form>
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{ link | formatLink }}
        </li> 
      </ul>
    </div>
    <div class="right">
      <stats />
    </div>
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'LinkManager',
  data() {
    return {
      newLink: '',
    }
  },
  components: {
    Stats
  },
  computed: {
    ...mapState([
      'title',
      'links',
      ]),
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newLink);
      this.newLink = '';
    }
  },
  filters: {
    formatLink: function(value) {
      if (!value) return ''
      if (value.indexOf("http://") == 0 || value.indexOf("https://") == 0) {
        return value
      } else {
        return 'http://' + value
      }
    }
  }
};
</script>

<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .linkManager {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

</style>
