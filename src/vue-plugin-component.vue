<template>
  <p>
    I am a custom component provided by your plugin, you can delete me if you wish.
    This is a value from instance:
    <b>{{ $myPlugin.world() }}</b>
    <!-- <button @click="increment()">increment ({{ counter }})</button> -->
  </p>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';

// export default {
//   computed: {
//     ...mapGetters('counterStore', ['counter'])
//   },
//   methods: {
//     ...mapActions('counterStore', ['increment'])
//   }
// };
</script>
