# Lab: Getting Started with Adobe Experience Manager - Edge Delivery Services

This lab walks you through creating and developing a website using Adobe Experience Manager - Edge Delivery Services

## Prerequisites

Before starting this lab, ensure you have:

- A personal GitHub account
- A laptop (Mac or Windows) with an installed IDE — preferably an AI-enabled editor (Cursor is strongly recommended; VS Code is also acceptable)
- Node.js and npm installed on your local system

---

## Exercise 1: Bootstrap a Live Personal Site with Default Blocks

**Objective**: Set up your GitHub repository, configure DA.live, add your personal content, and publish your site.

**Outcome**: You will have a live personal website with default blocks running on AEM Edge Delivery Services.

### Step 1: Create Your Repository from Boilerplate

1. Visit the [Dev Day Boilerplate repository](https://github.com/meejain/zeroto100)
2. Click **"Use this template"** → **"Create a new repository"**
3. Choose your GitHub user/org as the owner
4. Set the repository to **public** (recommended)
5. Set **"Include all branches"** to **On**
6. Click **"Create repository"**

### Step 2: Install AEM Code Sync

1. Visit [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync/installations/new)
2. Under **Repository access**, select **"Only select repositories"**
3. Choose your newly created repository
4. Click **"Save"**

Your site is now live at:
- **Preview**: `https://main--<repo>--<owner>.aem.page/`
- **Production**: `https://main--<repo>--<owner>.aem.live/`

> **Note**: Replace `<repo>` with your repository name and `<owner>` with your GitHub user/org.

### Step 3: Author and Manage Content

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

### Step 4: Preview and Publish Content

1. In DA, Click the **Preview** button to preview your changes.
2. Once satisfied with the preview, click the **Publish** button to make your content live.
3. Your content will now be available on both preview and live URLs.

**Congratulations!** 🎉 You have successfully bootstrapped your live personal website with default blocks on AEM Edge Delivery Services. Your site is now live and accessible on the web!

### Optional: Install AEM Sidekick

For easier content preview and publishing workflow:

1. Install the [AEM Sidekick Chrome Extension](https://chrome.google.com/webstore/search/aem%20sidekick)
2. Pin the extension for easy access
3. Navigate to your site (preview or live URL)
4. Click the Sidekick icon in your browser
5. Use Sidekick to preview and publish content directly from your browser without going to DA.live

---

## Exercise 2: Know the Development Flow for EDS

**Objective**: Set up local development environment, make changes to code, and experience live reload.

**Outcome**: You will understand the local development workflow and see real-time changes reflected in your browser.

### Step 1: Install AEM CLI

```bash
npm install -g @adobe/aem-cli
```

### Step 2: Clone Your Repository

```bash
git clone https://github.com/<owner>/<repo>
cd <repo>
```

> Replace `<owner>` with your GitHub username and `<repo>` with your repository name.

### Step 3: Start Local Development Server

```bash
aem up
```

This starts a local server at `http://localhost:3000/`

Your browser should automatically open. If not, navigate to http://localhost:3000/ manually.

### Step 4: Make a Minor Change and See Live Reload

Let's make a simple CSS change to see live reload in action:

1. Open your project in your IDE (Cursor or VS Code)
2. Navigate to `styles/styles.css`
3. Find the `body` selector and modify a style property. For example, change the background color:

```css
body {
  /* Add or modify this line */
  background-color: black;
}
```

4. Save the file (Ctrl/Cmd + S)
5. Watch your browser automatically reload and display the change!

**Congratulations!** 🎉 You now understand the EDS development flow:
- Make changes locally
- See instant feedback in the browser
- Iterate quickly without waiting for builds or deployments
