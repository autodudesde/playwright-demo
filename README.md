[![Playwright](https://playwright.dev/img/playwright-logo.svg)](https://playwright.dev/ "Playwright")


Testing with Playwright:
==================================================
---

This is based on:
https://github.com/deviantintegral/ddev-playwright

Many thanks go out to Andrew Berry @deviantintegral and Randy Fay @rfay for their work on this.

## DOCS

There is a really nice documentation which you can find on:
https://playwright.dev/docs/

Despite there is a very good documentation, we will try to give you a short overview of how
to use Playwright in this setup.

---

## How to install

> :warning: Experimental: This is a work in progress and not yet fully tested.

```ddev start``` should take care of a correct setup.

Run:

    git clone git@github.com:autodudesde/playwright-demo.git .
    ddev start

---

You will be asked a few questions during the installation:

* "Need to install Playwright, OK to proceed?" -> Answer: yes
* "Do you want to use TypeScript or JavaScript?" -> Answer: TypeScript
* "Where to put your end-to-end tests?" -> Answer: tests
* "Add a GitHub workflow?" -> Answer: no
* "Install Playwright browsers?" -> Answer: yes
* "Install Playwright operating system dependencies?" -> Answer: yes

After installing Playwright, you will be asked:

* "/var/www/html/test/playwright/playwright.config.ts already exists. Override it?" -> Answer: no


## How to use

Like in the repo of Andrew Berry @deviantintegral, the tests are stored in ```test/playwright/tests```.
This makes it possible, to add playwright tests directly to your project if you want.

---
Start  project:

    ddev start

---

To find out, how to access the kasmvnc server desktop, run:

    ddev describe

Then open the URL with specific port in the browser.

There is a .htaccess protection in place, so you have to enter the credentials.
The credentials are:

Username: (your username on your machine)

Password: secret

---

Start the test GUI:

    ddev playwright test --ui

It should open a new browser window with the Playwright test GUI. (testdomain.ddev.site::8444)

---

Start the test recorder (codegen):

    ddev playwright codegen

---

### How to use the command line:

---

Start a specific test from command line:

    ddev playwright test tests/Customer/Directory/test

If you want to watch how Playwright interacts with the website, use the ```--headed``` option:

    ddev playwright test tests/Customer/Directory/test --headed

---

Viewing the result of a command line test:

    ddev playwright show-report

Then open the file ```tests/playwright/playwright-report/index.html``` in your Browser. (Right click -> Open in -> Browser)

---

### Visual comparison, good to know:

---

If you run the test for the first time, it will fail because of missing
screenshots to compare. But it will create the screenshots on that first
run, so every thing is fine.

If you want to update the screenshots, you can run:

    ddev playwright test tests/Customer/Directory/test --update-snapshots

---

If you run the tests locally, you must add the domain to ```docker-compose.external_links.yaml```.

Otherwise the tests will fail and you receive a 403 forbidden error.
