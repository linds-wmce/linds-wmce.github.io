# a11ycat 🐱

An accessibility auditing tool that helps developers identify and fix accessibility issues in their web applications. 

**Features:**
- Audit HTML snippets directly in your browser
- Audit live websites by URL via our backend API
- Powered by [axe-core](https://github.com/dequelabs/axe-core) for comprehensive accessibility testing
- Built with Ember.js

## 🌐 Hosting

- **Frontend**: Hosted on [GitHub Pages](https://linds-wmce.github.io/)
- **Backend API**: Hosted on [Railway](https://a11ycat-litterbox-production.up.railway.app)

### Backend
The backend API `a11ycat-litterbox` handles URL-based accessibility audits by:
- Fetching the target URL's HTML content
- Running axe-core accessibility checks server-side
- Returning structured violation data to the frontend

**API Endpoint**: `https://a11ycat-litterbox-production.up.railway.app/audit`

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

```bash
git clone https://github.com/linds-wmce/linds-wmce.github.io.git
cd linds-wmce.github.io
yarn install
```

## Running / Development

```bash
ember serve
```

- Visit your app at [http://localhost:4200](http://localhost:4200)
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests)

### Running Tests

```bash
ember test                # Run tests once
ember test --server       # Run tests in watch mode
```

### Linting

```bash
yarn lint                 # Check for linting errors
yarn lint:fix             # Auto-fix linting errors
```

### Building

```bash
ember build                              # Development build
ember build --environment production     # Production build
```

### Deploying

The app automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

- **Production**: Automatically deployed via GitHub Actions to [linds-wmce.github.io](https://linds-wmce.github.io/)
- **Preview Deployments**: Automatic preview URLs are generated for each pull request

Manual deployment is handled by CI/CD - simply merge to `main` to deploy.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
