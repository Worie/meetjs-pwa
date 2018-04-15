import { Component, Vue } from 'vue-property-decorator'
import './a-button.scss'
import template from './a-button.html'

@Component({
  template,
  components: {
  },
  props: {
    content: {
      required: true,
      type: String,
    },
  }
})
export class aButton extends Vue {

}
