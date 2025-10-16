import Controller from '@ember/controller';

export default class IndexController extends Controller {
  activeTab = 'Audit';
  
  setTab = (tab: string) => {
    this.activeTab = tab;
  };
}
