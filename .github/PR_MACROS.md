# PR Bot Information

This repository uses an automated bot to post helpful information about your PR.

## How It Works

When you create or update a pull request, the `pr-macros` workflow automatically posts a comment with:

## What Gets Posted

The bot automatically posts a comment containing:

### 🌐 Preview Deployment URL
Direct link to your Surge preview deployment: `https://a11ycat-pr-[NUMBER].surge.sh`

### 📋 Task Link
Automatically extracted from your branch name and linked to the appropriate task tracker.

**Supported branch naming patterns:**
- **Jira:** `PROJ-123-feature` → Links to `[PROJ-123](jira-url)`
- **Linear:** `LIN-456-bugfix` → Links to `[LIN-456](linear-url)`
- **GitHub Issues:** `issue-789-update` or `#789-fix` → Links to `[#789](github-issue-url)`

### 🔗 Latest Commit SHA
Shows the short SHA of the most recent commit

**Example Bot Comment:**
```markdown
## 🤖 PR Information

**🌐 Preview Deployment:** https://a11ycat-pr-123.surge.sh  
**📋 Task Link:** [PROJ-123](https://your-org.atlassian.net/browse/PROJ-123)  
**🔗 Latest Commit:** abc1234

_This comment will update automatically when you push new commits._
```

## Branch Naming Conventions

To make the most of automatic task linking, name your branches with the task identifier:

- `PROJ-123-description` (Jira)
- `LIN-456-description` (Linear)  
- `issue-789-description` (GitHub Issues)
- `#789-description` (GitHub Issues shorthand)

If no task identifier is found, the macro will display: "_No task ticket found in branch name_"

## Configuration

The macro workflow is defined in `.github/workflows/pr-macros.yml`.

To customize:
- Update Jira/task tracker URLs in the workflow file
- Add support for other task management systems
- Modify branch name patterns

## When the Bot Comments Update

The bot comment is automatically created/updated when:
- ✅ PR is opened
- ✅ PR description is edited  
- ✅ New commits are pushed (updates commit SHA)

The bot will update the same comment rather than creating multiple comments, keeping your PR thread clean.

