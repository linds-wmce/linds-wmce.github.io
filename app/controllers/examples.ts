import Controller from '@ember/controller';

export default class SamplesController extends Controller {
  activeTab = 'Examples';
  
  setTab = (tab: string) => {
    this.activeTab = tab;
  };
}
