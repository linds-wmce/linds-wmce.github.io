import Component from '@glimmer/component';
import { action } from '@ember/object';
import type { AuditResult } from 'a11ycat/services/a11y-audit';

interface Args {
  results?: AuditResult[];
}

export default class examples extends Component<Args> {

  @action
  copyCode(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;
    const pre = button.nextElementSibling as HTMLElement | null;

    if (!pre) return;

    const code = pre.innerText;
    navigator.clipboard.writeText(code).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 1500);
    });
  }
}
