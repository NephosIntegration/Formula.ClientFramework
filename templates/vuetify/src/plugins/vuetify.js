//import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors'

const opts = {
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.green.darken1, // #E53935
        secondary: colors.green.lighten4, // #FFCDD2
        accent: colors.blue.base // #3F51B5
      },
      light: {
        primary: colors.green.darken1, // #E53935
        secondary: colors.green.lighten4, // #FFCDD2
        accent: colors.blue.base // #3F51B5
      }
    }
  }
};

Vue.use(Vuetify);

export default new Vuetify(opts);
