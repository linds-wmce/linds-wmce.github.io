import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import type A11yAuditService from 'a11ycat/services/a11y-audit';
import type { AuditResult } from 'a11ycat/services/a11y-audit';

export default class AuditFormComponent extends Component {
  @service declare a11yAudit: A11yAuditService;

  @tracked htmlInput = '';
  @tracked auditResults: AuditResult[] = [];

  @action
  updateInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.htmlInput = target.value;
  }

  @action
  async runAudit(event: Event) {
    event.preventDefault();

    if (!this.htmlInput.trim()) {
      this.auditResults = [];
      return;
    }

    this.auditResults = await this.a11yAudit.runAudit(this.htmlInput);
  }
}
