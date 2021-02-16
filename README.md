![Meal Manager](https://i.imgur.com/UkluIw4.png)
---
# Table of Contents
- [Problem](#problem)
- [Solution](#solution)
- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)
# Problem
The current system used in our chapter is ineffective. It involves copying and pasting from a google document that holds all the recipes, adding up the ingredient manually, and assigning the pickup locations from memory. It is a tedious and boring task that often results in an error when an ingredient is forgotten to be added to the shopping list. This can often result in having to go shopping outside of normal shopping days making it inconvenient for members of the chapter. 

# Solution
This system allows the user to generate a menu and shopping list within minutes. The user can create a menu for either this week or the next week. This is done by selecting the meals from a dropdown and generating the shopping list. After purchasing the ingredient, the receipts can be added to keep track of finances for the food committee.

This repo contains the front-end of the meal manager. It is built with [Ember.js](https://emberjs.com/) which uses an MVC framework similar to Ruby on Rails. The web pages were designed with printability in mind since the menus and shopping lists have to be printed. Data is served via a RESTful API provided by the [back-end](https://github.com/dca123/food-api). 

# Features
-   Create and update menus up to two weeks
-   Create and update meals from the database along with ingredients
-   Generate shopping lists ordered by location and type of ingredient
-   Add receipts
-   Keep track of finances by week and semester
# Technologies
- [Ember.js](https://emberjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)

# Usage
1. Install dependencies
```bash
npm install
```
2. Start the database
```bash
npm run start
```
Navigate to [localhost:4200](http://localhost:4200/)
