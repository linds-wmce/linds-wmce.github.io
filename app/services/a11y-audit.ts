import Service from '@ember/service';
import axe, { AxeResults } from 'axe-core';

export interface AuditResult {
  id: string;
  description: string;
  help: string;
  impact: string | null;
  nodes: {
    html: string;
    target: string[];
  }[];
}

export default class A11yAuditService extends Service {
  async runAudit(html: string): Promise<AuditResult[]> {
    // Inject the provided HTML into an offscreen container
    const container = document.createElement('div');
    container.innerHTML = html;
    container.setAttribute('role', 'document');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    document.body.appendChild(container);

    try {
      const results: AxeResults = await axe.run(container);

      return results.violations.map((violation) => ({
        id: violation.id,
        description: violation.description,
        help: violation.help,
        impact: violation.impact ?? null,
        nodes: violation.nodes.map((node) => ({
          html: node.html,
          target: node.target.map(String),
        })),
      }));
    } catch (e) {
      // Don’t throw—just return empty so UI stays happy
      // eslint-disable-next-line no-console
      console.error('Accessibility audit failed:', e);
      return [];
    } finally {
      container.remove();
    }
  }
}
