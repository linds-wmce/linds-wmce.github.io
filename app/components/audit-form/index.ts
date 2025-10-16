import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import type A11yAuditService from 'a11ycat/services/a11y-audit';
import type { AuditResult } from 'a11ycat/services/a11y-audit';

interface AuditFormArgs {
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const MIN_LOADING_MS = 2000;

export default class AuditFormComponent extends Component<AuditFormArgs> {
  @service declare a11yAudit: A11yAuditService;

  @tracked activeTab = 'Audit';
  @tracked htmlInput = '';
  @tracked isLoading = false;
  @tracked auditResults: AuditResult[] | null = null;
  @tracked auditRun = false;

  @action
  updateInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.htmlInput = target.value;

    if (!this.htmlInput.trim()) {
      this.auditResults = null;
      this.auditRun = false;
    }
  }

  @action
  async runAudit(event: Event) {
    event.preventDefault();
    this.auditRun = true;
    this.isLoading = true;

    try {
      const [results] = await Promise.all([
        this.a11yAudit.runAudit(this.htmlInput),
        sleep(MIN_LOADING_MS),
      ]);
      this.auditResults = results;
    } finally {
      this.isLoading = false;
    }
  }

  @action
  handleInput(event: Event) {
    this.updateInput(event);
  }

  @action
  handleSubmit(event: Event) {
    this.runAudit(event);
  }

  @action
  handleClear() {
    this.htmlInput = '';
    this.auditResults = null;
    this.auditRun = false;
  }

  @action
  handleFileUpload() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.html,.htm';
    fileInput.style.display = 'none';
    
    fileInput.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          this.htmlInput = content;
          this.auditResults = null;
          this.auditRun = false;
        };
        reader.readAsText(file);
      }
      
      document.body.removeChild(fileInput);
    };
    
    document.body.appendChild(fileInput);
    fileInput.click();
  }

  @action
  closeModal() {
    this.isLoading = true;
  }
}
