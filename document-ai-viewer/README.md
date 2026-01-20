# 📚 Document AI Viewer

> Beautiful hosted HTML documents for the Firma ecosystem, auto-deployed and embeddable in Notion.

## 🚀 Quick Setup (GitHub Desktop)

### Step 1: Publish to GitHub
1. Open **GitHub Desktop**
2. Click **File** → **Add Local Repository**
3. Browse to this `document-ai-viewer` folder
4. Click **Add Repository**
5. Click **Publish repository** (top right)
6. ✅ **Make it Public** (required for hosting)
7. Click **Publish Repository**

### Step 2: Auto-Deploy with Netlify (Recommended)
1. Go to https://app.netlify.com
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** and authorize
4. Select your `document-ai-viewer` repository
5. Click **Deploy site**
6. ✅ Done! You'll get a URL like: `https://YOUR-SITE.netlify.app`

**OR** use Vercel:
1. Go to https://vercel.com
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Click **Deploy**

### Step 3: Embed in Notion
1. Copy your deployed URL (e.g., `https://YOUR-SITE.netlify.app`)
2. Open your Notion page
3. Type `/embed`
4. Paste your URL
5. Press Enter and resize!

---

## 📁 Repository Structure

```
document-ai-viewer/
├── index.html              # Main viewer/landing page
├── docs/                   # All your HTML documents
│   ├── seedbase-light-paper.html
│   ├── master-strategy.html
│   ├── entity-structure.html
│   └── [future docs go here]
├── README.md              # This file
├── netlify.toml           # Deploy configuration
└── .gitignore            # Git ignore file
```

---

## ✨ Adding New Documents

### Method 1: Via GitHub Desktop (Easy)

When Claude creates a new HTML document for you:

1. Save the HTML file to the `docs/` folder
2. Open **GitHub Desktop**
3. You'll see the new file in "Changes"
4. Add a commit message: "Add [document name]"
5. Click **Commit to main**
6. Click **Push origin**
7. ✅ Netlify/Vercel auto-deploys it in 30 seconds!

### Method 2: Ask Claude (Automated)

Just say:
```
"Add this HTML to my document-ai-viewer repo and update the index"
```

Claude will:
- ✅ Save the file to `docs/`
- ✅ Update `index.html` with a new card
- ✅ Give you the commit command for GitHub Desktop
- ✅ Update your Notion database with the live URL

---

## 🔗 Your Links

After deployment, your URLs will be:

- **Main Viewer:** `https://YOUR-SITE.netlify.app`
- **Seedbase Light Paper:** `https://YOUR-SITE.netlify.app/docs/seedbase-light-paper.html`
- **Master Strategy:** `https://YOUR-SITE.netlify.app/docs/master-strategy.html`
- **Entity Structure:** `https://YOUR-SITE.netlify.app/docs/entity-structure.html`

### Custom Domain (Optional)
Both Netlify and Vercel support custom domains for free:
- `docs.yourcompany.com`
- Settings → Domain management → Add custom domain

---

## 🎨 Customization

### Update the Main Viewer
Edit `index.html` to:
- Change colors/branding
- Update Notion links
- Add new document cards

### Replace Placeholder Docs
The current docs in `docs/` are placeholders. To get the full interactive versions:

1. Ask Claude: "Create the full [document name] HTML"
2. Replace the placeholder file
3. Commit and push via GitHub Desktop
4. Auto-deploys!

---

## 🔄 Workflow Example

**You:** "Claude, create a beautiful HTML pitch deck about Seedbase"

**Claude creates:** `seedbase-pitch-deck.html`

**You:**
1. Save it to `docs/seedbase-pitch-deck.html`
2. Open GitHub Desktop
3. Commit: "Add Seedbase pitch deck"
4. Push to GitHub
5. ✅ Live at: `https://YOUR-SITE.netlify.app/docs/seedbase-pitch-deck.html`

**Claude also:**
- Updates your Notion database with the live URL
- Tags it appropriately (Seedbase, Marketing, Pitch Deck)
- Links it to the Notion version if it exists

---

## 💡 Pro Tips

### Auto-Update Index
When you add a new doc, update `index.html`:

```html
<a href="docs/your-new-doc.html" class="doc-card">
    <h3>Your New Document Title</h3>
    <p>Brief description here</p>
    <span class="doc-badge badge-strategy">Type</span>
</a>
```

Or ask Claude: "Add [document] to the index page"

### Preview Locally
Before pushing, you can preview:
1. Double-click `index.html`
2. Opens in your browser
3. Check links and formatting

### Rollback if Needed
GitHub Desktop makes it easy:
1. **History** tab → Right-click any commit
2. **Revert changes in commit**
3. Push the revert

---

## 🆘 Troubleshooting

**"Repository not found"**
- Make sure you published it as **Public** not Private

**"Deploy failed"**
- Check that `index.html` is in the root folder
- Verify all links in `index.html` are correct

**"Can't embed in Notion"**
- Must use deployed URL, not local file path
- URL must be HTTPS (Netlify/Vercel are always HTTPS)

**Need help?**
Just ask Claude! I can help with:
- Fixing deployment issues
- Updating the index
- Creating new docs
- Customizing design

---

## 🎯 Next Steps

1. ✅ Publish to GitHub (via GitHub Desktop)
2. ✅ Deploy to Netlify or Vercel
3. ✅ Embed in Notion
4. ✅ Replace placeholder docs with full versions
5. ✅ Start adding new documents!

---

**🎉 You're ready to go! Your Document AI system is fully automated.**

Questions? Just ask Claude in your conversation!
