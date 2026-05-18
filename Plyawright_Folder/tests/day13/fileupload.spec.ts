import { test, expect, Page, chromium, Browser } from '@playwright/test';

test('file upload test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
  // it should have type='file attribute
  await page.locator("#single-file").setInputFiles("/Users/enverjume/naveen_2026/enver/js_2026/Plyawright_Folder/tests/day13/mytest.txt");

// remove file if no remove button
await page.locator("#single-file").setInputFiles([]);
  // Expect a title "to contain" a substring.
await page.pause();
});


test('multiple files  upload test', async ({ page }) => {

  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
  // it should have type='file attribute
  await page.locator(
    "#multi-file").setInputFiles(
    [
    "/Users/enverjume/naveen_2026/enver/js_2026/Plyawright_Folder/tests/day13/mytest.txt",  // file 1
    "/Users/enverjume/naveen_2026/enver/js_2026/Plyawright_Folder/tests/day13/mytext2.txt" // file 2
    ]
  );

  // for multiple files upload, check if multiple attribute there 

  // Expect a title "to contain" a substring.
await page.pause();
});


test('single file  upload if no type=file is available test', async ({ page }) => {

    // if type='file' attribute is not present ...
  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

  let [fileUpload] = await Promise.all([

  page.waitForEvent('filechooser'),
  page.locator('#custom-upload-btn').click()
  ]);
  await fileUpload.setFiles('/Users/enverjume/naveen_2026/enver/js_2026/Plyawright_Folder/tests/day13/mytest.txt');


  // for multiple files upload, check if multiple attribute there 

  // Expect a title "to contain" a substring.
await page.pause();
});

test('multiple files  upload if no type=file is available test', async ({ page }) => {

    // if type='file' attribute is not present ...
  await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

  let [fileUpload] = await Promise.all([

  page.waitForEvent('filechooser'),
  page.locator('#custom-upload-btn').click()
  ]);
  await fileUpload.setFiles([
    '/Users/enverjume/naveen_2026/enver/js_2026/Plyawright_Folder/tests/day13/mytest.txt',
     "/Users/enverjume/naveen_2026/enver/js_2026/Plyawright_Folder/tests/day13/mytext2.txt"

]);
await fileUpload.setFiles([
    
]);


  // for multiple files upload, check if multiple attribute there 

  // Expect a title "to contain" a substring.
await page.pause();
});