import { test, expect, Page } from '@playwright/test';

test('Lead Management Workflow', async ({ page }: { page: Page }) => {
  // Navigate to the login page
  await page.goto('https://automatedtests.stg.monument.io/login');

  // Login to the application
  await page.getByTestId('email-input').fill('darby.hadley+4@monument.io');
  await page.getByTestId('password-input').fill('A3ihWgE>');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate to the Leads section
  const leadsLink = page
    .getByTestId('component-lib-navigation-sidebar-menu-wrapper')
    .getByRole('link', { name: 'Leads' });
  await expect(leadsLink).toBeVisible();
  await leadsLink.click();

  // Add a new lead
  const addLeadButton = page.getByRole('button', { name: 'Add Lead' });
  await expect(addLeadButton).toBeVisible();
  await addLeadButton.click();

  const formatName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

  const userData = {
    firstName: 'Lucas',
    lastName: 'Coan Mazzuco',
    email: 'LucasCoanMazzuco@gmail.com'
  };

  // Preenchendo os campos no formulário
  await page.getByLabel('First Name *').fill(userData.firstName);
  await page.getByLabel('Last Name *').fill(userData.lastName);
  await page.getByLabel('Email').fill(userData.email);

  await page
    .getByRole('row', { name: 'Austin Facility 1 6543 Mill' })
    .getByRole('button')
    .click();

  await page.getByRole('button', { name: 'Save' }).click();

  // Verify lead creation
  await expect(page.getByText('Lead created!')).toBeVisible();

  // Navigate back to Leads
  await page.getByRole('link', { name: 'Leads' }).click();
  await expect(page.getByRole('link', { name: formatName(userData.firstName, userData.lastName) })).toBeHidden();

  // Dismiss the lead
  await page.getByTestId('MoreVerticalRegularIcon').first().click();
  await page.getByText('Dismiss Lead').click();

  await page.getByLabel('Reason for Dismissal *').click();
  await page.getByText('No Longer Needs Storage').click();
  await page.getByRole('button', { name: 'Dismiss', exact: true }).click();

  // Verify lead dismissal
  await expect(page.getByText('Lead dismissed!')).toBeVisible();
  await expect(page.getByRole('link', { name: formatName(userData.firstName, userData.lastName) })).toBeHidden();
});