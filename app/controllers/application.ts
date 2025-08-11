import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import type A11yAuditService from 'a11ycat/services/a11y-audit';
import type { AuditResult } from 'a11ycat/services/a11y-audit';

export default class ApplicationController extends Controller {
  @service declare a11yAudit: A11yAuditService;

  @tracked activeTab = 'Audit';
  @tracked htmlInput = '';

  @action
  updateInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.htmlInput = target.value;
  }

  @action
  setTab(name: string) {
    this.activeTab = name;
  }

  @tracked auditResults: AuditResult[] = [];

  @action
  async runAudit(event: Event) {
    event.preventDefault();
    this.auditResults = await this.a11yAudit.runAudit(this.htmlInput);
  }
}
