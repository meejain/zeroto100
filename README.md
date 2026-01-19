# Dev Day Lab - Zero to 100: Prompt, Build & Go Live with your High-Performance Personal Website with AI

A hands-on lab where you'll be building your very own personal website from the ground up with ease. You'll be using Adobe Experience Manager with AI tools like Cursor, and by the end, you'll be walking away with your own live site — a keepsake you can share and continue evolving

## Prerequisites

Before starting this lab, ensure you have:

- A **personal** GitHub account **(Do not use _adobe account)**
- A laptop (Mac, Windows Or Linux) with an installed IDE — preferably an AI-enabled editor (Cursor is strongly recommended; VS Code is also acceptable)
- Node.js (version 20 or higher) and npm installed on your local system

### Checking and Upgrading Node.js

Check your current Node.js version:

```bash
node --version
```

If your version is lower than 20.x.x, you'll need to upgrade:

- **Mac/Linux**: Use [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating) or download from [nodejs.org](https://nodejs.org/)
- **Windows**: Use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades) or download from [nodejs.org](https://nodejs.org/)

```bash
nvm install 20 # To install Node v20
node -v # Must now show Node v20.x.y installed
```
---

## Exercise 1: Bootstrap a Live Personal Site

**Objective**: Set up your GitHub repository, configure DA (Document Authoring), add your personal content, and publish your site.

**Outcome**: You will have a live personal website running on AEM Edge Delivery Services.

### Step 1: Create Your Repository from Boilerplate

1. Visit the [Dev Day Boilerplate repository](https://github.com/meejain/zeroto100)
2. Click **"Use this template"** → **"Create a new repository"**
<img width="700" alt="Screenshot 2026-01-13 at 7 28 19 PM" src="https://github.com/user-attachments/assets/04dd7645-7f8b-4294-97eb-0405915cc747" />

3. Choose your GitHub user as the owner
4. Provide the repository name
5. Set the repository to **public** (recommended)
6. Click **"Create repository"**

### Step 2: Install AEM Code Sync

1. Visit [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync/installations/new)
2. Select the "github-user" same as where you create the repo in the previous steps
<img width="400" alt="image" src="https://github.com/user-attachments/assets/cd43982d-0dcb-4758-a88d-eced776a0276" />

3. IMPORTANT: Under **Repository access**, select **"Only select repositories"**
4. Choose your newly created repository
5. Click **"Save"**

Your site is now live at:
- **Preview**: `https://main--<github-repo>--<github-user>.aem.page`
- **Production**: `https://main--<github-repo>--<github-user>.aem.live`
> 
> You may see a 404 page right now, which is OK since we are going to create the content in next steps.

### Step 3: Author and Manage Content

1. Navigate to [DA.live](https://da.live/start)
2. Add your newly created github repository link.
<img width="700" alt="image" src="https://github.com/user-attachments/assets/67d6b5f5-d036-41bc-a251-6a30518f143a" />

3. Click on **Go** Button.
4. Select the **No Sample Content** option and click **Make something wonderful**.
<img width="600" alt="image" src="https://github.com/user-attachments/assets/cdb2264d-1150-4516-ae0b-b0a72c366c40" />

5. We should now have an empty content space create for the site.
<img width="600" alt="image" src="https://github.com/user-attachments/assets/5167c77f-67ac-43e4-949e-04b347e43fe3" />

6. Let's import some sample content now. Visit https://da.live/apps/import and import the following pages using the **"By URL"** option. Import them as is, without modifying the URLs
   - `https://main--zeroto100--meejain.aem.live`
   - `https://main--zeroto100--meejain.aem.live/nav`
   - `https://main--zeroto100--meejain.aem.live/footer`
7. In the **Org** field, enter your github-user and in **Site** field, enter your github-repo.
   - For example: If your DA.live URL is `https://da.live/#/sdmcraft/dev-day-lab-3`, then:
     - **Org**: `sdmcraft`
     - **Site**: `dev-day-lab-3`
<img width="700" alt="image" src="https://github.com/user-attachments/assets/5cb9d167-5e45-43b1-9e8c-aa4feaf16635" />

8. Wait for the content to import successfully. It should take 15-30 secs.
9. You should now see the content imported for your site at https://da.live/#/[github-user]/[github-repo]
<img width="400" height="450" alt="image" src="https://github.com/user-attachments/assets/df996783-2dad-44d6-a522-1ef35562710d" />



### Step 4: Preview and Publish Content


1. Open up the page `https://da.live/edit#/[github-user]/[github-repo]/index` 
2. Click the **Preview** button to preview your changes.
  <img width="311" height="88" alt="Screenshot 2026-01-13 at 7 16 41 PM" src="https://github.com/user-attachments/assets/da191597-8e31-4238-b760-43da25ef2445" />

3. Once satisfied with the preview, click the **Publish** button to make your content live.
  <img width="311" height="88" alt="Screenshot 2026-01-13 at 7 16 41 PM" src="https://github.com/user-attachments/assets/da191597-8e31-4238-b760-43da25ef2445" />
  
4. Your content will now be available on both preview and live URLs.
5. Repeat steps 2 to 4 for `https://da.live/edit#/[github-user]/[github-repo]/nav` and `https://da.live/edit#/[github-user]/[github-repo]/footer`
6. Feel free to add your own personalized content to the page. Do the same **Preview/Publish** steps to visualize your changes.
   > Pro Tip: You can also visualize your changes inline by clicking on the preview button. <img width="57" height="67" alt="image" src="https://github.com/user-attachments/assets/7d6543b7-4dc7-452c-95b1-241978c4ba1c" />

**Congratulations!** 🎉 You have successfully bootstrapped your live personal website with default blocks on AEM Edge Delivery Services. Your site is now live and accessible on the web!

---

## Exercise 2: Know the Development Flow for EDS

**Objective**: Set up local development environment, make changes to code, and experience live reload.

**Outcome**: You will understand the local development workflow and see real-time changes reflected in your browser.

### Step 1: Install AEM CLI (If not already done)

```bash
npm install -g @adobe/aem-cli
```

### Step 2: Clone Your Repository (via SSH or HTTPS)

```bash
git clone https://github.com/<github-user>/<github-repo>
cd <github-repo>
```

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

---

## Exercise 3: Setup AI Tooling (Configure MCP). Build a Block Using AI

**Objective**: Configure AI tooling (MCP servers) and build a block using AI assistance.

**Outcome**: You will be able to leverage AI to accelerate your development work in EDS.

### Step 1: Configure MCP Servers

Before adding the MCP server configuration, you need to get the access tokens first.

#### 1.1 Get Access Tokens

**a) Get Helix Admin API Token:**

- Go to https://admin.hlx.page/login
- Use the `login_adobe` address to login with the Adobe identity provider
- You will be forwarded to https://admin.hlx.page/profile
- Open your browser's **Developer Tools** (F12)
- Go to the **Application** tab and **Storage**
- Under **Cookies**, find `auth_token`
- Copy the value of the `auth_token` cookie
- Place this token in notepad or similar for now - you'll need it in the next step as `{helix-token}`
<img width="800" alt="image" src="https://github.com/user-attachments/assets/a1dff6e0-ecc2-4e00-bcf3-786ee35948cc" />


**b) Get DA Live Admin API Token using Bookmarklet:**

**Step 1: Create the Bookmarklet**

- In your browser, create a new bookmark (Right-click bookmarks bar → Add Page)
- Name: `Get DA Token`
- In the URL/Location field, paste the following code:

```javascript
javascript:(async function(){if(!window.adobeIMS||typeof adobeIMS.getAccessToken!=='function'){alert('adobeIMS not available on this page');return;}try{const r=await adobeIMS.getAccessToken();if(!r||!r.token){alert('Token not found in response');console.log(r);return;}prompt('Adobe IMS Access Token (Ctrl/Cmd + C to copy):',r.token);}catch(e){console.error(e);alert('Failed to get access token');}})();
```

- Save the bookmark

**Step 2: Use the Bookmarklet**

- Navigate to https://da.live
- Click on the **Get DA Token** bookmarklet in your bookmarks bar
- A prompt will appear with your access token
- Copy the token
- Place this token in notepad or similar for now - you'll need it in the next step as `{da-token}`

#### 1.2 Add MCP Server Configuration

Now that you have both tokens, add the MCP servers to your IDE. **Replace `{helix-token}` and `{da-token}` with your actual tokens from step 1.1.**

**For Cursor IDE:**

1. Open Cursor IDE
2. Go to **Cusrsor > Setting > Cursor Settings** → **Tools & MCP**
3. Add the following configuration (replace the token placeholders with your actual tokens):

> **Note**: If you already have other MCP servers configured, just add `helix-mcp-server` and `da-live-admin` to your existing `mcpServers` object. Don't replace your entire configuration!

```json
{
  "mcpServers": {
    "helix-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "github:jindaliiita/eds-mcp"
      ],
      "env": {
        "HELIX_ADMIN_API_TOKEN": "{helix-token}"
      }
    },
    "da-live-admin": {
      "command": "npx",
      "args": [
        "-y",
        "github:meejain/mcp-da-live-admin"
      ],
      "env": {
        "DA_ADMIN_API_TOKEN": "{da-token}"
      }
    }
  }
}
```
4. After successful configuration, you should see the Helix and DA MCP servers available and enabled.
<img width="1028" height="378" alt="Screenshot 2026-01-13 at 7 46 55 PM" src="https://github.com/user-attachments/assets/f2cba43a-98f3-49e7-bc24-ee22861dc110" />

**For Visual Studio Code:**

1. Open VS Code
2. Add the following configuration (replace the token placeholders with your actual tokens):

> **Note**: If you already have other MCP servers configured, just add `helix-mcp-server` and `da-live-admin` to your existing `mcpServers` object. Don't replace your entire configuration!

```json
{
  "mcpServers": {
    "helix-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "github:jindaliiita/eds-mcp"
      ],
      "env": {
        "HELIX_ADMIN_API_TOKEN": "{helix-token}"
      }
    },
    "da-live-admin": {
      "command": "npx",
      "args": [
        "-y",
        "github:meejain/mcp-da-live-admin"
      ],
      "env": {
        "DA_ADMIN_API_TOKEN": "{da-token}"
      }
    }
  }
}
```
3. Click on "Configure Tools" icon at the bottom of AI Chat window in VSCode.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/c3107dec-0018-4850-9ac2-e2914e4f23a6" />

4. Enable `da-live-admin` and `helix-mcp-server`

<img width="610" height="501" alt="image" src="https://github.com/user-attachments/assets/8baa6d3a-b2b3-4868-b5b8-281faf2180f7" />

5. Once enabled successfully, the list of tools should appear.

### Step 2: Install GitHub CLI and Add Agent Skills

#### 2.1 Install GitHub CLI (If not present)

**For macOS:**

See the [official installation guide](https://github.com/cli/cli/blob/trunk/docs/install_macos.md#homebrew)

**For Windows:**

See the [official installation guide](https://github.com/cli/cli/blob/trunk/docs/install_windows.md)

**For Linux:**

See the [official installation guide](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#recommended-official)

> **Note**: After installation, you may need to authenticate with GitHub by running `gh auth login` before using `gh` commands.

#### 2.2 Install gh-upskill Extension

Install the gh-upskill extension for GitHub CLI:

```bash
gh extension install trieloff/gh-upskill
```

#### 2.3 Add AEM Skills to Your Project

Navigate to your project root directory:

```bash
cd <github-repo>
```

Then run:

```bash
gh upskill adobe/helix-website --dest-path .claude/skills --all
```

This command will add AEM-specific skills to your project, enabling AI agents to better understand and work with AEM Edge Delivery Services patterns and best practices.

### Step 3: Build a Block Using AI

Now that you have MCP servers configured, you can use AI to help you build blocks and manage content. Here are some sample workflows and prompts to get you started:

#### Sample Workflow: Replace a Block with Another Block Type

This workflow demonstrates a complete development cycle - from content editing to code generation to publishing.

**Scenario**: Replace a `cards-skills` block with an `accordion` block while preserving the content.

**Step-by-step prompts:**

1. **Content Edit and Preview** (using Cursor/VS Code):
   ```
   Get the page from DA at https://da.live/edit#/[github-user]/[github-repo]/[path], 
   replace the cards-skills block with an Accordion block containing the same content, 
   and preview the page.
   ```
   
   This prompt will:
   - Fetch the page content from DA
   - Replace the block structure
   - Update the content on DA
   - Provide the page with new content

2. **Code Generation** (if the block doesn't exist yet):
   ```
   Write the code for the Accordion block as well.
   ```
   
   This prompt will:
   - Generate the block's JavaScript (`accordion.js`)
   - Generate the block's CSS (`accordion.css`)
   - Follow the project's coding standards
   
   **Follow-up: Adapt Styling from Existing Design**
   
   After the basic accordion block is generated, you can adapt styling from an existing design:
   ```
   Can you check accordion designed on the page - https://lab2--zeroto100--meejain.aem.live/lab2 
   and convert the styling as is
   ```
   
   This will:
   - Inspect the accordion design
   - Extract the visual styling
   - Apply the same design to your accordion block

3. **Push Code to Repository** (manual or AI-assisted):
   ```
   Push the updated code to the repository
   ```
   
   Or manually:
   ```bash
   git add blocks/accordion/
   git commit -m "Add accordion block"
   git push origin main
   ```

4. **Publish the Resource** (using DA):
   - Use the Publish button in DA.live
   - Or use this prompt:
   ```
   Publish the resource https://da.live/edit#/[github-user]/[github-repo]/[path]
   ```

#### More Sample Prompts

**Creating a New Block:**
```
Create a hero-banner block with a heading, subtext, background image, 
and call-to-action button. Match the existing design system.
```

**Modifying an Existing Block:**
```
Update the cards block to add hover animations and ensure it's 
responsive across mobile, tablet, and desktop breakpoints.
```

**Debugging a Block:**
```
The carousel block isn't working properly. Debug the issue and fix it.
```

**Content Management:**
```
Get the page from DA at https://da.live/edit#/[github-user]/[github-repo]/[path] 
and update the hero section text.
```

**Performance Optimization:**
```
Review all blocks and optimize them for Core Web Vitals. 
Ensure images are lazy-loaded and CSS is minimal.
```

**Congratulations!** 🎉 You have successfully completed Lab 2 and you have a live personal website on which you have built your own block using AI!

**Check Your Website's Performance:**

After publishing your content, verify your Lighthouse score:

1. Visit [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your live website URL: `https://main--{github-repo}--{github-user}.aem.live/{path}`
3. Click "Analyze" to see your Core Web Vitals and Lighthouse scores
4. Aim for a score of 100 on Performance, Accessibility, Best Practices

**What You've Accomplished:**
- Built and deployed a custom block on AEM - Edge Delivery Services
- Published a live personal website
- Learned EDS development patterns and best practices
- Can now use AI to accelerate your EDS development

---

## Troubleshooting

### MCP Installation Issues with npx

If you're facing issues with MCP server installation or the servers are not connecting properly, try clearing the npx cache:

```bash
rm -rf ~/.npm/_npx
```
