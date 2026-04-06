# FinWise Wallet

A premium personal finance dashboard built with React, Tailwind CSS, Framer Motion, and Recharts.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the URL shown in the terminal, typically `http://localhost:5173`.

## Publish to GitHub

To upload this project to GitHub and share it with your provider:

1. Initialize git in the project folder:

```bash
git init
git add .
git commit -m "Initial FinWise Wallet project"
```

2. Create a GitHub repository from your account named `finwise-wallet`.
3. Add the remote and push:

```bash
git remote add origin https://github.com/<your-username>/finwise-wallet.git
git branch -M main
git push -u origin main
```

## Shareable live preview

To create a shareable link for any laptop:

1. Push this project to GitHub.
2. Use a web-based editor/viewer such as:
   - `https://stackblitz.com/github/<your-username>/<repo-name>`
   - `https://codesandbox.io/s/github/<your-username>/<repo-name>`

For example:

```text
https://stackblitz.com/github/your-username/finwise-wallet
```

Then provide that URL to your provider.

## Notes

- The dashboard entry component is at `src/components/DashboardShell.jsx`.
- `src/components/TransactionCard.jsx` contains the transaction card UI.
- Tailwind styles are configured in `tailwind.config.js`.
