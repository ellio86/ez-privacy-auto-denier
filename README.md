# Ezoic GateKeeper Auto Denier

You may have noticed when browsing the web that your data is sold to hundreds and hundreds of vendors when you click "Accept all cookies", which can be the instinctual thing to do for many. One cookie prompt that I see often is this one (see [this website](https://www.ezoic.com/)): 

![Ez Cookie Banner 1 with accept necessary cookies button](chrome_rWRd9FYO07.png)

This banner is part of the consent management platform [Ezoic GateKeeper](https://www.ezoic.com/gatekeeper/). This banner is fine as you are easily able to only accept necessary cookies using the black button, however on some sites [like this one](https://www.appsloveworld.com/csharp/100/236/xslloadexception-resolving-of-external-uris-was-prohibited), that button is nowhere to be seen:

![Ez Cookie Banner 2 without accept necessary cookies button](chrome_nsixWULImm.png)

This means that the user has to go into the options and manually untick every checkbox in order to deny cookie consent. Annoying!

This extension will automatically open the consent settings when it detects that there is a GateKeeper cookie banner on the page and uncheck all of the cookie consent checkboxes, then save your preferences.

## Demo of auto denier working (gif)
[Any checkbox that cannot be unchecked is a required/necessary cookie/vendor]
![Gif of auto cookie consent denier working](https://i.imgur.com/gHRs298.gif)

# Dev notes
## Requirements
- Node js >= v18.13.0

## First time setup
**Ensure that you are using the correct version of node (check with `nvm list`, change with `nvm use [version]`)**

Run `npm install` in a cmd window at the root of the project; this will create the `node_modules` folder with our node modules we just installed in. Use `npm ic` if you're having caching problems during development.

## Building the extension
**Ensure that you are using the correct version of node (check with `nvm list`, change with `nvm use [version]`)**

Run `npm run build` and the `dist` folder will be generated. Contents from the `public` folder are copied over and contents of the `src` folder are compiled from TypeScript into JavaScript and output to the `dist` folder.

## Adding the extension to chrome
Navigate to chrome://extensions in a chromium browser. Click load unpacked and point it towards the dist folder generated above. 

