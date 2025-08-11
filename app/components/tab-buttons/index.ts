import Component from '@glimmer/component';
import { action } from '@ember/object';

interface TabsArgs {
  activeTab: string;
  setTab: (tab: string) => void;
}

export default class TabsComponent extends Component<TabsArgs> {
  @action
  handleKeydown(event: KeyboardEvent) {
    const tabs = Array.from(
      (event.currentTarget as HTMLElement).querySelectorAll<HTMLButtonElement>(
        '[role="tab"]'
      )
    );
    const currentIndex = tabs.findIndex(
      (tab) => tab.getAttribute('aria-selected') === 'true'
    );

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      const nextTab = tabs[nextIndex];
      if (nextTab) {
        nextTab.focus();
        this.args.setTab(nextTab.textContent!.trim());
      }
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      const prevTab = tabs[prevIndex];
      if (prevTab) {
        prevTab.focus();
        this.args.setTab(prevTab.textContent!.trim());
      }
    }

    if (event.key === 'Home') {
      event.preventDefault();
      if (tabs[0]) {
        tabs[0].focus();
        this.args.setTab(tabs[0].textContent!.trim());
      }
    }

    if (event.key === 'End') {
      event.preventDefault();
      const lastTab = tabs[tabs.length - 1];
      if (lastTab) {
        lastTab.focus();
        this.args.setTab(lastTab.textContent?.trim() ?? '');
      }
    }
  }
}
