const layoutStore = {
    namespaced: true,
    state: {
      navMenuVisible: false,
    },
    mutations: {
      toggleNavMenu (state) {
        state.navMenuVisible = !state.navMenuVisible;
      },
      navMenuVisibility (state, visbility) {
        state.navMenuVisible = visbility;
      },
    },
    actions: {
      toggleNavMenu (context) {
        context.commit('toggleNavMenu');
      },
      setNavMenuVisibility (context, visibility) {
        context.commit('navMenuVisibility', visibility);
      },
      hideNavMenu (context) {
        context.commit('navMenuVisibility', false);
      },
      showNavMenu (context) {
        context.commit('navMenuVisibility', false);
      },
    },
    getters: {
  
    }
  }
  
  export default layoutStore;
  