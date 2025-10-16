# PR Preview Deployments

This repository is configured to automatically deploy PR previews using Surge.sh.

## How It Works

When you open or update a pull request:

1. **GitHub Actions builds your PR** and deploys it to Surge.sh
2. **Preview URL is posted** as a comment on the PR: `https://a11ycat-pr-[NUMBER].surge.sh`
3. **Updates automatically** when you push new commits
4. **Deployments expire** automatically after a period of inactivity

## Preview URL Format

```
https://a11ycat-pr-123.surge.sh
```

Where `123` is your PR number.

## Configuration Files

- `.github/workflows/pr-preview.yml` - Builds and deploys previews to Surge

## Setup Requirements

To enable PR preview deployments, you need to add a Surge token to your repository secrets:

1. **Install Surge CLI locally:**
   ```bash
   npm install -g surge
   ```

2. **Create/Login to Surge account:**
   ```bash
   surge login
   ```

3. **Get your Surge token:**
   ```bash
   surge token
   ```

4. **Add token to GitHub Secrets:**
   - Go to repository Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `SURGE_TOKEN`
   - Value: (paste your surge token)

## Why Surge Instead of GitHub Pages?

- **Avoids gh-pages branch conflicts** with your existing GitHub Pages deployment
- **Simpler setup** - no branch management required
- **Free for open source** projects
- **Automatic cleanup** - deployments expire after inactivity
- **No CNAME conflicts** - each PR gets its own subdomain

## Testing Locally

To test a production build locally:

```bash
yarn build --environment=production
npx surge ./dist
```

## Troubleshooting

If preview deployments aren't working:

1. Verify the `SURGE_TOKEN` secret is set in repository settings
2. Check workflow run logs in the Actions tab
3. Ensure the surge token hasn't expired (generate a new one if needed)

