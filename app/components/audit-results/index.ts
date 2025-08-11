import Component from '@glimmer/component';
import { action } from '@ember/object';
import type { AuditResult } from 'a11ycat/services/a11y-audit';

interface Args {
  results?: AuditResult[] | null;
  htmlInput?: string | null;
  isLoading?: boolean;
  auditRun?: boolean; // <-- needed to drive the dynamic heading/states
}

export default class AuditResults extends Component<Args> {
  private headingEl: HTMLElement | null = null;

  // --- handy getters for your template ---
  get hasRun() {
    return Boolean(this.args.auditRun);
  }

  get resultCount() {
    return this.args.results?.length ?? 0;
  }

  get hasResults() {
    return this.hasRun && this.resultCount > 0;
  }

  get hasNoResults() {
    return this.hasRun && !this.args.isLoading && this.resultCount === 0;
  }

  @action
  captureHeading(el: HTMLElement) {
    this.headingEl = el;
  }

  @action
  onResultsChange() {
    // Only move focus after a completed run (not while loading)
    if (this.hasRun && !this.args.isLoading && this.headingEl) {
      requestAnimationFrame(() => this.headingEl?.focus());
    }
  }
}
