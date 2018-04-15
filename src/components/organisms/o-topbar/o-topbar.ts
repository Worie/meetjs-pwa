import { Component, Vue } from 'vue-property-decorator'
import './o-topbar.scss'
import aInput from '../../atoms/a-input'

import template from './o-topbar.html'

@Component({
  template,
  components: {
    aInput,
  }
})
export class oTopbar extends Vue {

}
