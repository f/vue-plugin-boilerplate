<p align="center">
<img src="./resources/vue-plugin-boilerplate.png" width="400">
</p>

---

> This plugin is created for **plugin creators** and the **devs who want to make their own work open-sourced**. Enjoy!

This is a package for creating Vue plugins easily. You'll be able to create your own open-sourced plugin easily with great features.

<h3 align="center"><a href="https://github.com/f/vue-plugin-boilerplate/wiki">🚀 Open step by step guide to create a robust and well-designed Vue Plugin</a></h3>

## Features
- Create Vue **components**, **directives** on install.
- Create or **inject Vuex stores**.
- **Add runtime accessors** to Vue instances.
- Configured Storybook integration
- Nuxt plugin support
- TypeScript type definitions

## Installation

### Using **GitHub Template Repository**

GitHub provides a feature to create repositories from another repositories. You can simply click the botton above to create a new project from this project structure.

Click following button to create a new project from this one or click the one above.

<a href="https://github.com/f/vue-plugin-boilerplate/generate">
  <img src="./resources/use-this-template-button.png" width="150" />
</a>

It will ask you the repository name and it will be automatically cloned.

### Using Shell

```bash
git clone --depth 1 https://github.com/f/vue-plugin-boilerplate.git
cd vue-plugin-bolierplate
```

### `press` Command

For both **shell** and **GitHub Template** you should run the `press` command.

`press` file is a script to rewrite some words in this package according to your changes. When you run it you'll be prompted as following:

```
Your plugin name? (with dahshes like vue-plugin-boilerplate): vue-querystring-state
Your plugin class name? (pascal case like VuePlugin): VueQuerystringState
Your plugin accesor name? (like "helloWorld" to be used as this.$helloWorld): queryStringState
Your plugin's GitHub address? (like "f/vue-plugin-boilerplate"): f/vue-querystring-state

Heya! Your package vue-querystring-state is ready to develop!

Pressing created some leftovers. You can run following commands to remove them now:

  ...

```

And your package will be ready to develop!

Do not forget to edit `package.json` details!

## Plugin Development

**Vue Plugin Boilerplate** provides you many cool features you can provide in your plugin.

#### `src/vue-****.js`

This is the main file of your plugin, I don't recommend you to replace its initialization script. So let's start with `options`.

##### The `options`

You may need to provide some optional keys to your user. The `accessorName` is an option by default since your plugin accessor may have some conflict with another plugin. Allowing users to replace it makes it flexible.

```js
constructor(options = {}) {
  const defaults = {
    // This is your plugin's options. It will be accessible with this.options
    accessorName: '$myPlugin'
  };
  //...
}
```

##### Custom Components, Directives etc.

You'll see the part below on `src/vue-****.js`:

```js
// Delete this line if your plug-in doesn't provide any components
Vue.component('VuePlugin', VuePluginComponent);
// Vue.directive('your-custom-directive', customDirective);
```

This part registers your own global components once. So you can inject another things like **directives**, **mixins**, etc. *(Directive part is commented out but you can enable it)*

##### Instance Methods

You may want to create some custom methods in your user's Vue instances. The boilerplate allows you to create some custom methods or getters, etc.

You can see the following code in `src/vue-****.js`:

```js
// Some instance methods that you can access from this.$myPlugin
world() {
  return 'world';
}
```

This method will be accessible in your user's instances:

```vue
<script>
export default {
  mounted() {
    console.log(this.$yourPluginAccessor.world())
  }
}
</script>
```

##### Injecting into Vuex

One of the best features of this plugin is to inject some custom stores into your user's Vuex store.

You'll see the following code (commented-out) in `src/vue-****.js`:
```js
if (store && !store._modules.get(['yourCustomStore'])) {
  store.registerModule('yourCustomStore', customVuexStore);
}
```

You can change `yourCustomStore` to anything you want, you can also register multiple stores.

This is a simple example that you can inject to Vuex store.
```js
if (store && !store._modules.get(['counter'])) {
  store.registerModule('counter', {
    state: {
      counter: 0
    },
    getters: {
      counter: state => state.counter
    },
    actions: {
      increment({ commit }) {
        commit('increment')
      }
    },
    mutations(state) {
      state.counter = state.counter + 1;
    }
  });
}
```

> ⚠️ If you want to inject your user's store, please uncomment these lines and add `vuex` to dependencies by running `yarn add -P vuex` and `yarn add vuex`.

## Examples

In `examples` file, you'll see a folder named `generic`. You can rename or duplicate it to show many features to your user.

## Storybook

Your plugin includes a `.storybook` folder includes the **showcase** of your plugin, you can simply start adding your stories of your components.

**Storybook will also be really useful and is recommended on development stage of your plugin.**

## Plugin Testing

This boilerplate doesn't have an automated test yet. But this boilerplate provides a nice `examples` directory runs with **Poi**.

You can make them run `yarn example:generic` to view your plugin running.

### License

MIT
