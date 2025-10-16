import Controller from '@ember/controller';

export default class examplesController extends Controller {
  activeTab = 'examples';
  
  setTab = (tab: string) => {
    this.activeTab = tab;
  };
}
