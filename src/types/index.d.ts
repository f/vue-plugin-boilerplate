import Vue, { PluginFunction } from 'vue';
// import { Store } from 'vuex';

export class VuePlugin {
  constructor(options?: VuePluginOptions);

  static install(): PluginFunction<any>;
  // static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;

  // Your instance methods
  world(): string;
}

export interface VuePluginOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $myPlugin: VuePlugin;
    __$VuePluginInstance: VuePlugin;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myPluginSettings?: VuePluginOptions | VuePlugin
  }
}
