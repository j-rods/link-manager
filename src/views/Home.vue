<template>
  <div class="home">
    <LinkManager />
  </div>
</template>

<script>
// @ is an alias to /src
import LinkManager from '@/components/LinkManager.vue';

export default {
  name: 'home',
  components: {
    LinkManager,
  },
};
</script>
