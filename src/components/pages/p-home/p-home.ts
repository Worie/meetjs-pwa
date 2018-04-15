import { Component, Vue } from 'vue-property-decorator';

// terrible - path should always be absolute
import oTopbar from '../../organisms/o-topbar';
import oFooter from '../../organisms/o-footer';
import oMain from '../../organisms/o-main';

// it'd be cool if we didnt have to explicitly load those,too
import './p-home.scss';
import template from './p-home.html';

@Component({
  template,
  components: {
    oTopbar,
    oMain,
    oFooter,
  }
})
export class pHome extends Vue {
  
}
