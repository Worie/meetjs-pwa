import Vue from 'vue';
import './types';
import store, { IStoreRootState } from './store/store';
import PortalVue from 'portal-vue';
import { createRouter } from './router'
import Root from './components/root';

Vue.use(PortalVue);

new Vue({
  store,
  el: '#app-main',
  router: createRouter(),
  render: (createComponent: Function) => createComponent(Root),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
});
