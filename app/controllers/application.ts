import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import type A11yAuditService from '../services/a11y-audit';
import type { AuditResult } from '../services/a11y-audit';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const MIN_LOADING_MS = 1200;

export default class ApplicationController extends Controller {
  @service declare a11yAudit: A11yAuditService;

  @tracked activeTab = 'Audit';
  @tracked htmlInput = '';
  @tracked auditResults: AuditResult[] = [];
  @tracked isLoading = false;

  @action updateInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.htmlInput = target.value;
  }

  @action setTab(name: string) {
    this.activeTab = name;
  }

  @action
  async runAudit(event: Event) {
    event.preventDefault();

    this.isLoading = true;

    try {
      const [results] = await Promise.all([
        this.a11yAudit.runAudit(this.htmlInput),
        sleep(MIN_LOADING_MS),
      ]);

      this.auditResults = results as AuditResult[];
    } finally {
      this.isLoading = false;
    }
  }

  @action
  focusResults(element: HTMLElement) {
    if (this.auditResults?.length >= 0) {
      element.focus();
    }
  }
}
