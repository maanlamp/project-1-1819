# Project 1 @cmda-minor-web · 2018-2019

![Live demo thumbnail](./src/images/search.gif)

[Try out the live demo!](https://maanlamp-oba-project-1.netlify.com/)

<br/>

---

<br/>

## Glossary
<details>
	<summary>Click to expand</summary>

- [Project 1 @cmda-minor-web · 2018-2019](#project-1-cmda-minor-web--2018-2019)
	- [Glossary](#glossary)
	- [Getting started](#getting-started)
	- [Concept](#concept)
		- [Features](#features)
			- [Autocompletion](#autocompletion)
			- [Error feedback](#error-feedback)
			- [Extra suggestions](#extra-suggestions)
	- [License](#license)

</details>

<br/>
<br/>
<br/>

## Getting started
To get searching, firstly clone the repo.

Then, install dependencies:
```shell
npm i
```

Then, run some form of a server to host the webapp. I recommend [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

<br/>
<br/>

## Concept

This repo contains a webapp built to showcase possible improvements to the autosuggest feature for the OBA. It also searches for items in the database, and allows for more casual browsing through suggested items based on your search, and suggested categories.

<br/>

### Features
The concept is based on a couple of concise but important features.

#### Autocompletion
Autocompletion now not only suggests titles, it gets a coverimage and a short description aswell.

![Look at this sweet autosuggest!](./src/images/autosuggest.gif)

#### Error feedback
The webapp tells you if you search for something non-existant:

![Look at this sweet autosuggest!](./src/images/noContent.gif)

#### Extra suggestions
Whenever you have searched for an item within the OBA catalogue, the app will recommend a few other items based on what you have searched. It will also expose some genres/categories for the user to explore.

<br/>
<br/>

## License
Licensed under MIT, copyright [@maanlamp](https://github.com/maanlamp)