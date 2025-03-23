import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GlassBuilder extends Component {
    @tracked diameter = 15.0;
    @tracked rect_w = 5;
    @tracked rect_h = 1.5;
    @tracked rect_count = 8;

    get inset_rect_offset() {
        let radius = this.diameter / 2.0;
        console.log(this.rect_h);
        let h_i = Math.sqrt(radius ** 2 - (this.rect_w / 2.0) ** 2);
        return h_i - this.rect_h / 2.0;
    }
}
