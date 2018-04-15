import { Component, Vue } from 'vue-property-decorator'
import './m-newsletter.scss'
import aInput from '../../atoms/a-input'
import aButton from '../../atoms/a-button'
import template from './m-newsletter.html'

@Component({
  template,
  components: {
    aInput,
    aButton,
  }
})
export class mNewsletter extends Vue {

}
