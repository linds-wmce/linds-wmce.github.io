import Component from '@glimmer/component';

interface AuditFormArgs {
  htmlInput: string;
  updateInput: (event: Event) => void;
  runAudit: (event: Event) => void;
}

export default class AuditFormComponent extends Component<AuditFormArgs> {}
