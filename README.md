# Amaysim Web Automation

This project contains automated UI tests for the Amaysim website using **WebdriverIO**.  
Environment-specific test runs are managed via npm scripts defined in `package.json`.

---

## 🚀 Running Tests Locally

To execute tests on your local machine:

```bash
# Install dependencies
npm install

# Run tests against PROD environment
npm run prod

# Run tests against SIT environment
npm run sit

# Run tests against STG environment
npm run stg

# Run tests against UAT environment
npm run uat
