import Component from '@glimmer/component';
import { action } from '@ember/object';

interface AuditFormArgs {
  htmlInput: string;
  updateInput: (event: Event) => void;
  runAudit: (event: Event) => void;
  clearResults?: () => void;
}

export default class AuditFormComponent extends Component<AuditFormArgs> {
  @action
  handleInput(event: Event) {
    // Just update the HTML input value
    this.args.updateInput(event);

    const value = (event.target as HTMLTextAreaElement).value.trim();
    if (value === '' && this.args.clearResults) {
      this.args.clearResults();
    }
  }

  @action
  handleSubmit(event: Event) {
    event.preventDefault();
    this.args.runAudit(event);
  }
}
