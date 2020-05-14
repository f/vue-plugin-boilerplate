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
- Configured Storybook integration.
- **Nuxt** compatible.
- **TypeScript** type definitions.
- Including a **Kitchensink**

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
git clone --depth 1 https://github.com/f/vue-plugin-boilerplate.git vue-my-cool-plugin
cd vue-my-cool-plugin
```

### `press` Command

For both **shell** and **GitHub Template** you should run the `press` command.

`press` file is a script to rewrite some words in this package according to your changes. When you run it you'll be prompted as following:

```
Your plugin name? (with dahshes like vue-plugin-boilerplate): vue-my-cool-plugin
Your plugin class name? (pascal case like VuePlugin): VueMyCoolPlugin
Your plugin accesor name? (like "helloWorld" to be used as this.$helloWorld): cool
Your plugin's GitHub address? (like "f/vue-plugin-boilerplate"): f/vue-my-cool-plugin

Heya! Your package vue-querystring-state is ready to develop!

Pressing created some leftovers. You can run following commands to remove them now:

  ...

```

And your package will be ready to develop!

Do not forget to edit `package.json` details!

## Plugin Development

**[Please read Wiki to deep dive into plugin development.](https://github.com/f/vue-plugin-boilerplate/wiki)**

## Examples

In `examples` file, you'll see a folder named `kitchensink`. You can rename or duplicate it to show many features to your user.

## Storybook

Your plugin includes a `.storybook` folder includes the **showcase** of your plugin, you can simply start adding your stories of your components.

**Storybook will also be really useful and is recommended on development stage of your plugin.**

## Plugin Testing

This boilerplate doesn't have an automated test yet. But this boilerplate provides a nice `examples` directory runs with **Poi**.

You can make them run `yarn example:kitchensink` to view your plugin running.

### License

MIT
