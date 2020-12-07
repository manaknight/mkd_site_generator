# Manaknightdigital site generator

## Steps

1.`npm install`

2.Go into `src/config.js` and set the fields you need.

3.Adjust the header.js and footer.js to what you need.

4.Change `home_page.js` to what you need.

5.For other pages, copy `home_page.js` and set `config.currentPage = 'home';` to your page. Then in `header.js` assign the highlighted navigation.

6.Add your css in `src/css` and it will copy all css to your public folder.

7.Add your js in `src/js` and it will copy all js to your public folder.

8.When ready to build run `npm run build`.

9.We gitignore all html/js/css in public folder so when we go live, it will need to be generated

10.REMEMBER to install `lit-html` VSCODE extension. This allow autocomplete inside js
