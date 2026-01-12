# Lab 1: Getting Started with AEM Edge Delivery Services

This lab walks you through creating and developing a website using Adobe Experience Manager (AEM) Edge Delivery Services.

## Prerequisites

Before starting, ensure you have:
- A GitHub account with basic Git knowledge
- Understanding of HTML, CSS, and JavaScript
- Node.js and npm installed for local development

## Step 1: Create Your Repository from Boilerplate

1. Visit the [Dev Day Boilerplate repository](https://github.com/meejain/zeroto100)
2. Click **"Use this template"** → **"Create a new repository"**
3. Choose your GitHub user/org as the owner
4. Set the repository to **public** (recommended)
5. Create the repository

## Step 2: Install AEM Code Sync

1. Visit [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync/installations/new)
2. Under **Repository access**, select **"Only select repositories"**
3. Choose your newly created repository
4. Click **"Save"**

Your site is now live at:
- **Preview**: `https://main--<repo>--<owner>.aem.page/`
- **Production**: `https://main--<repo>--<owner>.aem.live/`

## Step 3: Author and Manage Content

1. Navigate to [DA.live](https://da.live/start)
2. Add your newly created repository link (eg: https://github.com/meejain/zeroto100)
3. Select Option AEM Boilerplate

Learn more about authoring at [DA.live documentation](https://da.live/docs)

## Step 4: Install AEM Sidekick

1. Install the [AEM Sidekick Chrome Extension](https://chrome.google.com/webstore/search/aem%20sidekick)
2. Pin the extension for easy access
3. Use Sidekick to preview and publish content across environments

## Step 5: Set Up Local Development

### Install AEM CLI

```bash
npm install -g @adobe/aem-cli
```

### Clone Your Repository

```bash
git clone https://github.com/<owner>/<repo>
cd <repo>
```

### Start Local Development Server

```bash
aem up
```

This starts a local server at `http://localhost:3000/`


## Step 6: Develop Your Site

### Project Structure

```
├── blocks/          # Reusable content blocks
├── styles/          # Global styles
├── scripts/         # JavaScript utilities
├── head.html        # Global HTML head content
└── 404.html         # Custom 404 page
```

### Making Changes

1. Edit files in the `blocks/` folder
2. Changes appear immediately in your browser
3. Modify `.css` files for styling
4. Modify `.js` files for functionality

### Publishing Changes

```bash
git add .
git commit -m "Your commit message"
git push
```

Your changes will automatically deploy to:
- **Preview**: `https://<branch>--<repo>--<owner>.aem.page/`
- **Live**: `https://<branch>--<repo>--<owner>.aem.live/`

## Key Concepts

### Three Environments

1. **Local** (`localhost:3000`) - Development environment with your local code
2. **Preview** (`.aem.page`) - Staging environment for testing
3. **Live** (`.aem.live`) - Production environment for published content

### Content Sources

Edge Delivery Services supports multiple content sources:
- Document Authoring (DA.live) - Used in this tutorial
- Google Drive
- Microsoft SharePoint
- AEM Universal Editor

## Helpful Resources

- [AEM Documentation](https://www.aem.live/developer/tutorial)
- [Discord Community](https://discord.gg/aem)
- [Admin API Reference](https://www.aem.live/docs/admin.html)
- [AEM Status](https://status.adobe.com)
- [AEM.live Blog](https://www.aem.live/blog)

## Troubleshooting

### Common Issues

- **Port already in use**: Stop other servers or use `aem up --port 3001`
- **Code Sync not working**: Check GitHub App permissions
- **Changes not reflecting**: Clear browser cache or use incognito mode

### Getting Help

- Join the [Discord Community](https://discord.gg/aem)
- Check [AEM Community Overview](https://www.aem.live/community)
- Visit the [FAQ](https://www.aem.live/docs/faq)

## Next Steps

Once you've completed this lab:
1. Explore the [Anatomy of an AEM Project](https://www.aem.live/developer/anatomy-of-a-project)
2. Learn about [Block Development](https://www.aem.live/developer/block-collection)
3. Review [Performance Best Practices](https://www.aem.live/developer/keeping-it-100)

---

**Congratulations!** 🎉 You've successfully set up your first AEM Edge Delivery Services site!
