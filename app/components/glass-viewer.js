import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GlassViewer extends Component {
  get plate_radius() {
    return this.args.plate_diameter / 2.0;
  }

  get view_box() {
    let min_x = -1.1 * this.plate_radius;
    let min_y = -1.1 * this.plate_radius;
    let width = 1.1 * this.plate_radius * 2;
    let height = 1.1 * this.plate_radius * 2;
    return `${min_x} ${min_y} ${width} ${height}`;
  }

  get rect_x() {
    return -this.args.rect_w / 2.0;
  }

  get rect_y() {
    return -this.args.rect_h / 2.0 - this.args.rect_offset;
  }

  get rect_rotations() {
    let rotation = 360 / this.args.rect_count;
    let rect_count = Number(this.args.rect_count);
    let rotations = [...Array(rect_count).keys()].map((x) => x * rotation);
    return rotations;
  }
}
