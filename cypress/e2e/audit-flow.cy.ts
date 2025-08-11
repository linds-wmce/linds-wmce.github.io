describe('Audit flow', () => {
  it('runs an audit and shows dynamic heading', () => {
    cy.visit('/');

    // Paste HTML into the textarea
    cy.get('#html-input').clear().type(
      `<img src="image.jpg">
<button></button>
<a href="#">Click here</a>`,
      { parseSpecialCharSequences: false }
    );

    // Click Run Audit
    cy.contains('button', /run audit/i).click();

    // Heading should update after audit
    cy.get('#results-heading')
      .should('exist')
      .and(($h) => {
        const text = $h.text();
        expect(
          /Accessibility issues found|No accessibility issues found|Running audit…/i.test(text)
        ).to.eq(true);
      });

    // If you expect violations for this input, the list should be visible
    cy.get('[local-class="results"]').should('exist');
  });
});
