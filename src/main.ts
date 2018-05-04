import Vue from 'vue';
import './types';
import PortalVue from 'portal-vue';
import { createRouter } from './router'
import Root from './components/root';
import './scss/main.scss';

Vue.use(PortalVue);

new Vue({
  el: '#app-main',
  router: createRouter(),
  render: (createComponent: Function) => createComponent(Root),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function(registration) {
  }).catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}
