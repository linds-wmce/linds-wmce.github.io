import Component from '@glimmer/component';
import { action } from '@ember/object';
import type { AuditResult } from 'a11ycat/services/a11y-audit';

interface Args {
  results?: AuditResult[] | null;
  htmlInput?: string | null;
  isLoading?: boolean;
}

export default class AuditResults extends Component<Args> {
  private headingEl: HTMLElement | null = null;

  @action
  captureHeading(el: HTMLElement) {
    this.headingEl = el;
  }

  @action
  onResultsChange() {
    if (!this.args.isLoading && this.headingEl) {
      requestAnimationFrame(() => this.headingEl?.focus());
    }
  }
}
