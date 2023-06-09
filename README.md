# Cypress Bootcamp Demonstration

This is an example of cypress demonstration

# Why Cypress?

## In a nutshell

Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

We make it possible to:

- Set up tests
- Write tests
- Run tests
- Debug Tests

Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

This enables you to write faster, easier and more reliable tests.

## Who uses Cypress?

Our users are typically developers or QA engineers building web applications using modern JavaScript frameworks.

Cypress enables you to write all types of tests:

- End-to-end tests
- Component tests
- Integration tests
- Unit tests
- Cypress can test anything that runs in a browser.

## How to setup or install cypress end to end testing

_Disregard this if you already installed a node on your devices_

Must installed a node in your devices from https://nodejs.org/en/download

### Steps:

- Open your terminal/command prompt
- Create a directory
- Install the cypress using `npm install cypress --save-dev`
- Run your cypress example using npx cypress open

## Environment variables

Create a cypress.env.json file in the root directory of the projects

```
{
  "USERNAME": "",
  "PASSWORD": ""
}

```

### Run the Cypress Script Test

- run `npm install` to install all the cypress dependencies
- `npm run cypress:run_please` for running the Login tests specs directly
- `npm run cypress:open_please` for opening the cypress dashboard panel
