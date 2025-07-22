


import Service from '@ember/service';
import axe from 'axe-core';

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
    // Create a container to inject HTML
    const container = document.createElement('div');
    container.innerHTML = html;
    container.setAttribute('role', 'document');
    container.style.position = 'absolute';
    container.style.left = '-9999px'; // visually hidden
    document.body.appendChild(container);

    try {
      const results = await axe.run(container);

      console.log('Raw axe-core results:', results); // Debugging log

      return results.violations.map((violation) => ({
        id: violation.id,
        description: violation.description,
        help: violation.help,
        impact: violation.impact ?? null,
        nodes: violation.nodes.map((node) => ({
          html: node.html,
          target: node.target.map((t) => String(t)),
        })),
      }));
    } catch (e) {
      console.error('Accessibility audit failed:', e);
      return [];
    } finally {
      // Always clean up
      document.body.removeChild(container);
    }
  }
}
