/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import tugas_searchPage from './tugas_searchPage'
Given('I Click Search', () => {
   tugas_searchPage.visit()
})
When('Input Online in Search table', () => {
    tugas_searchPage.search()
})
Then('I should see my search in page', () => {
    tugas_searchPage.h2()
})