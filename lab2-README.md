# Lab 2: Build Your Own Block

## Step 1: Configure MCP Servers

### 1.1 Configure Helix MCP Server

#### For Cursor IDE:

1. Open Cursor IDE
2. Go to **Cursor Settings** → **Tools & MCP**
3. Add the following configuration:

```json
"helix-mcp-server": {
  "command": "npx",
  "args": [
    "-y",
    "github:jindaliiita/eds-mcp"
  ],
  "env": {
    "HELIX_ADMIN_API_TOKEN": "{token}"
  }
}
```

#### For Visual Studio Code:

1. Open VS Code
2. Create or edit the MCP configuration file at:
   - **Windows**: `%APPDATA%\Code\User\globalStorage\rooveterinaryinc.roo-cline\settings\cline_mcp_settings.json`
   - **macOS/Linux**: `~/.config/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json`
3. Add the following configuration:

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
        "HELIX_ADMIN_API_TOKEN": "{token}"
      }
    }
  }
}
```

#### Retrieve Access Token (Same for both Cursor and VS Code):
   - Go to https://admin.hlx.page/login
   - Use the `login_adobe` address to login with the Adobe identity provider
   - You will be forwarded to https://admin.hlx.page/profile
   - Open your browser's **Developer Tools** (F12)
   - Go to the **Application** tab and **Storage**
   - Under **Cookies**, find `auth_token`
   - Copy the value of the `auth_token` cookie
   - Replace `"{token}"` in the configuration with your actual token

### 1.2 Configure DA Live Admin MCP Server

#### For Cursor IDE:

1. In Cursor Settings → Tools & MCP, add:

```json
"da-live-admin": {
  "command": "npx",
  "args": [
    "-y",
    "github:meejain/mcp-da-live-admin"
  ],
  "env": {
    "DA_ADMIN_API_TOKEN": "{token}"
  }
}
```

#### For Visual Studio Code:

1. Edit the same MCP configuration file and add DA Live Admin to the `mcpServers` object:

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
        "HELIX_ADMIN_API_TOKEN": "{token}"
      }
    },
    "da-live-admin": {
      "command": "npx",
      "args": [
        "-y",
        "github:meejain/mcp-da-live-admin"
      ],
      "env": {
        "DA_ADMIN_API_TOKEN": "{token}"
      }
    }
  }
}
```

#### Get your DA Admin API Token using Bookmarklet (Same for both Cursor and VS Code):

   **a) Create the Bookmarklet**
   
   - In your browser, create a new bookmark (Right-click bookmarks bar → Add Page)
   - Name: `Get DA Token`
   - In the URL/Location field, paste the following code:
   
   ```javascript
   javascript:(async function(){if(!window.adobeIMS||typeof adobeIMS.getAccessToken!=='function'){alert('adobeIMS not available on this page');return;}try{const r=await adobeIMS.getAccessToken();if(!r||!r.token){alert('Token not found in response');console.log(r);return;}prompt('Adobe IMS Access Token (Ctrl/Cmd + C to copy):',r.token);}catch(e){console.error(e);alert('Failed to get access token');}})();
   ```
   
   - Save the bookmark

   **b) Use the Bookmarklet**
   
   - Navigate to https://da.live
   - Click on the **Get DA Token** bookmarklet in your bookmarks bar
   - A prompt will appear with your access token
   - Copy the token
   - Replace `"{token}"` in the DA Live Admin configuration with your actual token

