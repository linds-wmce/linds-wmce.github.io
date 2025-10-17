import Component from '@glimmer/component';

export default class FooterComponent extends Component {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}

