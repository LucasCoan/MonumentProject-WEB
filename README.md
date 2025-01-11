# Lead Management Workflow Test - Playwright

This project is a set of automated tests using **Playwright** and **TypeScript** to validate the lead management workflow in a web application. The test covers logging into the application, creating a new lead, validating the creation, and the lead dismissal process.

## Description

The code performs the following steps:

1. **Login to the application**: Fills in the email and password fields and logs in with predefined credentials.
2. **Access the "Leads" section**: Navigates to the "Leads" section of the system.
3. **Create a new lead**: Fills out a form with predefined data (first name, last name, and email) and saves the new lead.
4. **Validate lead creation**: Verifies if the new lead has been created and appears in the list.
5. **Dismiss a lead**: Performs the "dismiss" action on the newly created lead.
6. **Validate lead dismissal**: Verifies if the lead was removed from the list after the dismissal action.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**: Playwright and TypeScript are dependencies of Node.js. You can verify if Node.js is installed by running `node -v` in the terminal.
- **npm**: npm (Node Package Manager) is also required to manage dependencies.

## Installation

Follow the steps below to set up the environment and run the tests:

### 1. Clone the repository

If you don’t have the repository yet, clone it to your local machine:

```bash
git clone <REPOSITORY-URL>
cd <REPOSITORY-FOLDER>
```

### 2. Install the dependencies

Playwright needs to be set up for the project. Run the following command to install the necessary browsers:
```bash
npm install
```

### 3. Playwright setup

Playwright needs to be set up for the project. Run the following command to install the necessary browsers:
```bash
npx playwright install
```
### 4. Compile TypeScript code

If you need to manually compile the TypeScript code, you can run:
```bash
npx tsc
```

### 5. Run the tests

To run the tests, execute the following command:
```bash
npx playwright test
```

### 6. Code Structure

1. **userData**: An object containing the example data for the new lead (first name, last name, and email).
2. **formatName**: A function that formats the full name by concatenating the `firstName` and `lastName`, ensuring the correct format.
3. **UI Tests**: The code uses Playwright to interact with the application, filling out forms and checking if leads are created and dismissed correctly.

### 7. Contributing

If you want to contribute to this project, follow these steps:

1. **Fork the repository**.
2. **Create a branch for your feature or bug fix**.
3. **Make the changes and submit a pull request explaining the changes made**.

### 8. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
