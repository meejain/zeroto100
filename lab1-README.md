# Lab 1: Getting Started with Adobe Experience Manager - Edge Delivery Services

This lab walks you through creating and developing a website using Adobe Experience Manager - Edge Delivery Services

## Prerequisites

Before starting this lab, ensure you have:

- A personal GitHub account
- A laptop (Mac or Windows) with an installed IDE — preferably an AI-enabled editor (Cursor is strongly recommended; VS Code is also acceptable)
- Node.js and npm installed on your local system

## Step 1: Create Your Repository from Boilerplate

1. Visit the [Dev Day Boilerplate repository](https://github.com/meejain/zeroto100)
2. Click **"Use this template"** → **"Create a new repository"**
3. Choose your GitHub user/org as the owner
4. Set the repository to **public** (recommended)
5. Set **"Include all branches"** to **On**
6. Click **"Create repository"**

## Step 2: Install AEM Code Sync

1. Visit [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync/installations/new)
2. Under **Repository access**, select **"Only select repositories"**
3. Choose your newly created repository
4. Click **"Save"**

Your site is now live at:
- **Preview**: `https://main--<repo>--<owner>.aem.page/`
- **Production**: `https://main--<repo>--<owner>.aem.live/`

> **Note**: Replace `<repo>` with your repository name and `<owner>` with your GitHub user/org.

## Step 3: Author and Manage Content

1. Navigate to [DA.live](https://da.live/start)
2. Add your newly created github repository link
3. Select the **AEM Boilerplate** option. This will create boilerplate content.
4. Visit https://da.live/apps/import and import the following pages using the **"By URL"** option:
   - `https://main--zeroto100--meejain.aem.live/lab1`
   - `https://main--zeroto100--meejain.aem.live/nav`
   - `https://main--zeroto100--meejain.aem.live/footer`
   
5. In the **Org** field, enter your organization name and in **Site** field, enter your repository name.
   - For example: If your DA.live URL is `https://da.live/#/meejain/zeroto100`, then:
     - **Org**: `meejain`
     - **Site**: `zeroto100`

## Step 4: Preview and Publish Content

1. In DA, Click the **Preview** button to preview your changes.
3. Once satisfied with the preview, click the **Publish** button to make your content live.
4. Your content will now be available on both preview and live URLs.

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

## Step 6: Install AEM Sidekick (Optional)

1. Install the [AEM Sidekick Chrome Extension](https://chrome.google.com/webstore/search/aem%20sidekick)
2. Pin the extension for easy access
3. Use Sidekick to preview and publish content.
