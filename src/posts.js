let config = require("./config");
const fm = require("front-matter");
const fs = require("fs");
const marked = require("./old/marked");
const header = require("./header");
const footer = require("./footer");

function convert_fields(data) {
  if (data.attributes.title) {
    data.blogName = data.attributes.title;
  }
  if (data.attributes.description) {
    data.blogDescription = data.attributes.description;
  }

  data.currentPage = 'blog';
  return data;
}

const post_html = data => `
${header(Object.assign(config, convert_fields(data)))}
  <div class="container">
    <div class="row">
      <div class="col-md-12 my-5">
      <header class="my-5">
          <a href="/">Go back home</a>
          <p>—</p>
      </header>

      <div class="content">
          <h1>${data.attributes.title}</h1>
          <p>${new Date(parseInt(data.attributes.date)).toDateString()}</p>
          <hr />
          ${data.body}
      </div>
      </div>
    </div>
  </div>
${footer(Object.assign(config, convert_fields(data)))}
`;

const createPost = postPath => {
  const data = fs.readFileSync(`${config.dev.postsdir}/${postPath}.md`, "utf8");
  const content = fm(data);
  content.body = marked(content.body);
  content.path = postPath;
  return content;
};

const createPosts = posts => {
  posts.forEach(post => {
    if (!fs.existsSync(`${config.dev.outdir}/blog/${post.path}`))
      fs.mkdirSync(`${config.dev.outdir}/blog/${post.path}`);

    fs.writeFile(
      `${config.dev.outdir}/blog/${post.path}/index.html`,
      post_html(post),
      e => {
        if (e) throw e;
        console.log(`${post.path}/index.html was created successfully`);
      }
    );
  });
};

module.exports = {
  createPost: createPost,
  createPosts: createPosts
};
