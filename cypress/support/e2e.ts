// cypress/support/e2e.ts
/// <reference types="cypress" />
import 'cypress-axe';

// pretty-print each violation and highlight nodes on the page
Cypress.Commands.add(
  'checkA11yWithLog',
  (options: Parameters<typeof cy.checkA11y>[1] = null, skipFailures = false) => {
    cy.injectAxe();

    // add a simple highlighter style once
    cy.window({ log: false }).then((win) => {
      if (!win.document.getElementById('cy-a11y-highlight-style')) {
        const style = win.document.createElement('style');
        style.id = 'cy-a11y-highlight-style';
        style.textContent = `
          [data-cy-a11y] { outline: 3px solid #e11d48 !important; outline-offset: 2px !important; }
        `;
        win.document.head.appendChild(style);
      }
    });

    cy.checkA11y(
      null,
      options,
      (violations) => {
        const count = violations.length;
        cy.log(`🔎 a11y: ${count} violation${count === 1 ? '' : 's'}`);

        violations.forEach((v) => {
          cy.log(`❌ ${v.id} — ${v.help} (${v.impact || 'n/a'})`);
          if (v.helpUrl) cy.log(`   ℹ️ ${v.helpUrl}`);

          v.nodes.forEach((node, idx) => {
            const selector = node.target.join(', ');
            // Highlight and scroll to the first matching element
            cy.get(selector, { log: false })
              .first()
              .then(($el) => {
                const el = $el.get(0);
                if (!el) return;

                el.setAttribute('data-cy-a11y', v.id);
                el.scrollIntoView({ block: 'center', inline: 'nearest' });

                const html = el.outerHTML.replace(/\s+/g, ' ').slice(0, 220);
                cy.log(`   #${idx + 1} ▶ ${selector}`);
                cy.log(`       ${html}${el.outerHTML.length > 220 ? '…' : ''}`);
              });
          });
        });
      },
      skipFailures
    );
  }
);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Inject axe, run a11y, log rule, targets, and snippet.
       * Also adds a red outline to impacted elements on the page.
       * @param options axe run options (e.g. { includedImpacts: ['serious','critical'] })
       * @param skipFailures don't fail the test (default false)
       */
      checkA11yWithLog(
        options?: Parameters<typeof cy.checkA11y>[1],
        skipFailures?: boolean
      ): Chainable<void>;
    }
  }
}
export {};
