# TDD and BDD using React/React-Redux

## Introduction
Test Driven and Behavior Driven development ensures that the application we develop have all the scenarios covered and that the chances of applications failing is reduced significantly. The project files in this repository cover the TDD and BDD approach for a React based application.

## How does TDD help with Application Development ?
In order to understand TDD we need to understand the approach itself. The TDD approach comprises of the following steps:

- Create a test case before implementing an application feature.
- Observe the test failing.
- Implement the feature covered in the test case so that the test case stops failing.

In the traditional method of software development (non TDD), the code for a feature is written without worrying about the test case, therefore whenever the test cases are developed and run we realise that the code written by us do not cater to many scenarios that were core to the application requirements. This leads to issues related to implementing certain missed features or debugging the code especially as the code grows. TDD approach ensure that the application when developed caters to all the business requirements during development.

**BDD** is a variation of TDD approach that is used to cover user scenarios and behaviors that affect the state of the application (user interactions).

## Tools used
 - Jest - Test runner developed by Facebook.
 - Enzyme - Testing utility developed by Airbnb.
 - React
 - Redux-Thunk
 - Fetch-Mock - To mock the response returned by a resource called using the Fetch API.
 - SFCookies - a Library to interact with browser cookies.