# Playwright Automation Framework

## Overview
This project is a Playwright-based automation framework designed for end-to-end testing of web applications. It includes configurations for running tests in various environments and browsers, including support for UI scenarios with Chrome browser popups.

## Project Structure
- **src/config**: Contains environment-specific configurations.
- **src/pages**: Page Object Model (POM) classes for different pages.
- **src/test**: Test scripts and base test setup.
- **src/utils**: Utility classes and helper functions.
- **test-data**: Test data files.

## Key Features
- **Playwright Integration**: Supports multiple browsers (Chromium, Firefox, WebKit).
- **Custom Test Setup**: Includes a base test setup for login and navigation.
- **Environment Configurations**: Easily switch between environments (e.g., production, staging).
- **UI Scenarios**: Run tests with Chrome browser popups enabled.

## How to Run Tests
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run all tests:
   ```bash
   npx playwright test
   ```
3. Run tests with Chrome browser popups:
   ```bash
   npx playwright test --project=chromium-popup
   ```

## Reporting
Test results are available in the `playwright-report` directory. Open `index.html` to view the report.

## Troubleshooting
- Ensure the correct environment is set in `src/config`.
- Use the `chromium-popup` project for UI scenarios requiring visible browser windows.

## License
This project is licensed under the MIT License.