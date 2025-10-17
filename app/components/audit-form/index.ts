import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import type A11yAuditService from "a11ycat/services/a11y-audit";
import type { AuditResult } from "a11ycat/services/a11y-audit";

interface AuditFormArgs {}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const MIN_LOADING_MS = 2000;

export default class AuditFormComponent extends Component<AuditFormArgs> {
  @service declare a11yAudit: A11yAuditService;

  @tracked htmlInput = "";
  @tracked urlInput = "";
  @tracked isLoading = false;
  @tracked auditResults: AuditResult[] | null = null;
  @tracked auditRun = false;
  @tracked errorMessage: string | null = null;

  // 🔹 Raw HTML input handling
  @action
  handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.htmlInput = target.value;

    if (!this.htmlInput.trim()) {
      this.auditResults = null;
      this.auditRun = false;
      this.errorMessage = null;
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
      
      setTimeout(() => {
        const resultsElement = document.getElementById('audit-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } finally {
      this.isLoading = false;
    }
  }

  @action
  handleClear() {
    this.htmlInput = "";
    this.auditResults = null;
    this.auditRun = false;
    this.errorMessage = null;
  }

  @action
  handleFileUpload() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".html,.htm";
    fileInput.style.display = "none";

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
          this.errorMessage = null;
        };
        reader.readAsText(file);
      }

      document.body.removeChild(fileInput);
    };

    document.body.appendChild(fileInput);
    fileInput.click();
  }

  // 🔹 URL auditing
  @action
  handleUrlInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.urlInput = target.value;
  }

  @action
  clearUrl() {
    this.urlInput = "";
    this.auditResults = null;
    this.auditRun = false;
    this.errorMessage = null;
  }

  @action
  async runUrlAudit() {
    this.auditRun = true;
    this.isLoading = true;
    this.errorMessage = null;

    try {
      const [results] = await Promise.all([
        this.a11yAudit.runAuditForUrl(this.urlInput),
        sleep(MIN_LOADING_MS),
      ]);
      this.auditResults = results;
      
      setTimeout(() => {
        const resultsElement = document.getElementById('audit-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      this.auditResults = null;
    } finally {
      this.isLoading = false;
    }
  }
}
