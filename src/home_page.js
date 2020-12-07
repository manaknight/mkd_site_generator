let config = require("./config");
const fs = require("fs");

config.currentPage = 'home';
const header = require("./header");
const footer = require("./footer");

const home_page_str = posts => html`
  ${header(config)}
  <p> Home Page</p>
  ${footer(config)}
`;

const build = (posts) => {
  fs.writeFile(`${config.dev.outdir}/index.html`, home_page_str(posts), e => {
    if (e) throw e;
    // console.log(`index.html was created successfully`);
  });
};

module.exports = build;
