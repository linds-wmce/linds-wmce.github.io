# PR Bot Information

This repository uses an automated bot to post helpful information about your PR and replace macros in your PR description.

## How It Works

When you create or update a pull request, the `pr-macros` workflow:
1. Posts a comment with preview URLs and task links
2. Replaces macros in your PR description with actual values

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

## PR Body Macros

You can use these macros in your PR description, and they'll be automatically replaced with actual values:

- **`$PREVIEW_URL`** or **`$PREVIEW`** → Replaced with `https://a11ycat-pr-[NUMBER].surge.sh`
- **`$COMMIT_SHA`** → Replaced with the full commit SHA (40 characters)
- **`$SHORT_SHA`** → Replaced with the short commit SHA (7 characters)
- **`$COMMIT_LINK`** → Replaced with a full GitHub commit URL

**Example:**
```markdown
Test the changes at $PREVIEW_URL

This PR includes commit $SHORT_SHA
```

**Becomes:**
```markdown
Test the changes at https://a11ycat-pr-123.surge.sh

This PR includes commit abc1234
```

The macros will automatically update when new commits are pushed!

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

