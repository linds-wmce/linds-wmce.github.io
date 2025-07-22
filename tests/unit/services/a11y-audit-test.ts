import Service from '@ember/service';
import * as axe from 'axe-core';

export interface AuditResult {
  id: string;
  description: string;
  help: string;
  impact: string | null;
  nodes: { html: string; target: string[] }[];
}

export default class A11yAuditService extends Service {
  async runAudit(html: string): Promise<AuditResult[]> {
    const container = document.createElement('div');
    container.innerHTML = html;
    container.setAttribute('role', 'document');
    document.body.appendChild(container);

    const results = await (axe as any).run(container);

    document.body.removeChild(container);

    return results.violations.map((v: axe.Result) => ({
      id: v.id,
      description: v.description,
      help: v.help,
      impact: v.impact ?? null,
      nodes: v.nodes.map((node) => ({
        html: node.html,
        target: Array.isArray(node.target)
          ? node.target.map(String)
          : [String(node.target)],
      })),
    }));
  }
}
