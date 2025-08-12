import Component from '@glimmer/component';
import { action } from '@ember/object';
import type { AuditResult } from 'a11ycat/services/a11y-audit';

interface Args {
  results?: AuditResult[] | null;
  htmlInput?: string | null;
  isLoading?: boolean;
  auditRun?: boolean;
}

export default class AuditResults extends Component<Args> {
  private headingEl: HTMLElement | null = null;
  private sectionEl: HTMLElement | null = null;

  @action
  closeModal() {
    this.args.isLoading = false;
  }

  get hasRun() {
    const run = Boolean(this.args.auditRun);
    return run;
  }

  get resultCount() {
    const count = this.args.results?.length ?? 0;
    return count;
  }

  get hasResults() {
    const value = this.hasRun && this.resultCount > 0;
    return value;
  }

  get hasNoResults() {
    const value = this.hasRun && !this.args.isLoading && this.resultCount === 0;
    return value;
  }

  @action captureHeading(el: HTMLElement) {
    this.headingEl = el;
  }

  @action captureSection(el: HTMLElement) {
    this.sectionEl = el;
  }

  @action maybeScroll() {
    if (!this.sectionEl) {
      return;
    }

    if (this.args.isLoading || this.hasRun) {
      console.log('[AuditResults] Scrolling into view...');
      const prefersNoMotion =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

      this.sectionEl.scrollIntoView({
        behavior: prefersNoMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      this.sectionEl.focus({ preventScroll: true });
    }
  }

  @action onResultsChange() {
    if (this.hasRun && !this.args.isLoading && this.headingEl) {
      requestAnimationFrame(() => {
        this.headingEl?.focus();
      });
    }
  }
}
