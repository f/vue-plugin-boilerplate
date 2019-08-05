<template>
  <div>
    Hello {{ msg }}!
    <vue-plugin />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'world'
    };
  }
};
</script>

<style>
</style>
