import Service from "@ember/service";
import axe, { AxeResults } from "axe-core";

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
    const container = document.createElement("div");
    container.innerHTML = html;
    container.setAttribute("role", "document");
    container.style.position = "absolute";
    container.style.left = "-9999px";
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
      console.error("Accessibility audit failed:", e);
      return [];
    } finally {
      container.remove();
    }
  }

  async runAuditForUrl(url: string): Promise<AuditResult[]> {
    try {
      const response = await fetch("https://a11ycat-litterbox-production.up.railway.app/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const results = await response.json();

      // Map results from litterbox to same shape as runAudit
      return results.violations.map((violation: any) => ({
        id: violation.id,
        description: violation.description,
        help: violation.help,
        impact: violation.impact ?? null,
        nodes: violation.nodes.map((node: any) => ({
          html: node.html,
          target: node.target.map(String),
        })),
      }));
    } catch (e) {
      console.error("URL audit failed:", e);
      return [];
    }
  }
}
