import { devMode } from './utils';
import VuePluginComponent from './vue-plugin-component.vue';

export default class VuePlugin {
  constructor(options = {}) {
    const defaults = {
      // This is your plugin's options. It will be accessible with this.options
      accessorName: '$myPlugin'
    };
    this.options = { ...defaults, ...options };
    this.initialized = false;
  }

  init(Vue, store) {
    if (devMode() && !install.installed) {
      console.warn(
        `[vue-plugin] not installed. Make sure to call \`Vue.use(VuePlugin)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    // HERE IS YOUR PLACE TO DEVELOP YOUR COMPONENT
    // You can use `this.options` property to access options.

    // Delete this line if your plug-in doesn't provide any components
    Vue.component('VuePlugin', VuePluginComponent);

    // Vue.directive('your-custom-directive', customDirective);

    // if (store && !store._modules.get(['yourCustomStore'])) {
    //   store.registerModule('yourCustomStore', customVuexStore);
    // }

    // DO NOT REMOVE FOLLOWING LINE!
    this.initialized = true;
  }

  // Some instance methods that you can access from this.$myPlugin
  world() {
    return 'world';
  }
}

export function install(Vue) {
  const isDev = devMode();
  if (install.installed && Vue) {
    if (isDev) {
      console.warn(
        '[vue-plugin] already installed. Vue.use(VuePlugin) should be called only once.'
      );
    }
    return;
  }

  Vue.mixin({
    /**
     * VuePlugin init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      const { myPluginSettings, store, parent } = this.$options;

      let instance = null;
      if (myPluginSettings) {
        instance =
          typeof myPluginSettings === 'function'
            ? new myPluginSettings()
            : new VuePlugin(myPluginSettings);
        // Inject store
        instance.init(Vue, store);
      } else if (parent && parent.__$VuePluginInstance) {
        instance = parent.__$VuePluginInstance;
        instance.init(Vue, parent.$store);
      }

      if (instance) {
        // Store helper for internal use
        this.__$VuePluginInstance = instance;
        this[instance.options.accessorName] = instance;
      }
    },

    // You can add more hooks here, but you shouldn't remove `beforeCreate`
    mounted() {
      console.log('Hey! I am running on every mount, please remove me!');
    }
  });

  install.installed = true;
  if (isDev) {
    console.info('[vue-plugin] is plugged in.');
  }
}

VuePlugin.install = install;
