const fs = require("fs");

// const postMethods = require("./posts");
const config = require("./config");
const home_page = require("./home_page");
const posts = [];
// const posts = fs
//   .readdirSync(config.dev.postsdir)
//   .map(post => post.slice(0, -3))
//   .map(post => postMethods.createPost(post))
//   .sort(function(a, b) {
//     return b.attributes.date - a.attributes.date;
//   });

// if (!fs.existsSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);

// postMethods.createPosts(posts);
home_page(posts);

//Copy in JS into repo
fs.readdirSync(config.dev.jsdir).map(function (file) {
  const write_js_path = config.dev.outjsdir + file;
  const read_js_path = config.dev.jsdir + file;
  fs.writeFileSync(write_js_path, fs.readFileSync(read_js_path));
  return file;
});

//Copy in CSS into repo
fs.readdirSync(config.dev.cssdir).map(function (file) {
  const write_css_path = config.dev.outcssdir + file;
  const read_css_path = config.dev.cssdir + file;
  fs.writeFileSync(write_css_path, fs.readFileSync(read_css_path));
  return file;
});