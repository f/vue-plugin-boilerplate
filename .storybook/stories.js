import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';

import VuePlugin from '../src/vue-plugin';

Vue.use(Vuex);
Vue.use(VuePlugin);

const withSettings = component => ({
  myPluginSettings: new VuePlugin(),
  ...component
});

const stories = storiesOf('VuePlugin', module);

stories
  // Add some stories here to make your plugin more descriptive
  .add(
    'My Customs  Component',
    () =>
      withSettings({
        template: `
        <div>
          <vue-plugin />
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-plugin\`

        \`\`\`html
        <template>
          <vue-plugin />
        </template>
        \`\`\`
      `
    }
  )
  .add(
    'My Custom Component with another markup',
    () =>
      withSettings({
        template: `
        <div>
          <b>Hello</b>
          <vue-plugin />
          <i>world</i>
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-plugin\` with other components

        \`\`\`html
        <template>
          <div>
            <b>Hello</b>
            <vue-plugin />
            <i>world</i>
          </div>
        </template>
        \`\`\`
      `
    }
  );
