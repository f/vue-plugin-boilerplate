# VuePlugin

Your plugin description...

## Installation

### 1. Install
```
yarn add vue-plugin
# or
npm i vue-plugin --save
```

### 2. Plug-in
```js
import VuePlugin from 'vue-plugin'

Vue.use(VuePlugin)

new Vue({
  // your vue config
  myPluginSettings: new VuePlugin(),
})
```

### 3. Use in your components

```vue
<template>
  <vue-plugin />
</template>

<script>
  export default {
    async created() {
      console.log(this.$myPlugin);
    },
  };
</script>
```

## License
MIT