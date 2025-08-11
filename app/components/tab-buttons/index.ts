import Component from '@glimmer/component';
import { action } from '@ember/object';

interface TabsArgs {
  activeTab: string;
  setTab?: (tab: string) => void;
}

export default class TabsComponent extends Component<TabsArgs> {
  private selectTabFromButton(button: HTMLButtonElement | null) {
    if (button && this.args.setTab) {
      const label = button.textContent?.trim();
      if (label) {
        this.args.setTab(label);
      }
    }
  }

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

    const moveFocus = (index: number) => {
      const tab = tabs[index];
      if (tab) {
        tab.focus();
        this.selectTabFromButton(tab);
      }
    };

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        moveFocus((currentIndex + 1) % tabs.length);
        break;

      case 'ArrowLeft':
        event.preventDefault();
        moveFocus((currentIndex - 1 + tabs.length) % tabs.length);
        break;

      case 'Home':
        event.preventDefault();
        moveFocus(0);
        break;

      case 'End':
        event.preventDefault();
        moveFocus(tabs.length - 1);
        break;

      case ' ':
      case 'Enter':
        event.preventDefault();
        if (currentIndex >= 0) {
          this.selectTabFromButton(tabs[currentIndex] ?? null);
        }
        break;
    }
  }
}
