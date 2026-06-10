require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const Sitemap = require("react-router-sitemap").default;
const path = require("path");

const router = require("../src/App").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://pflogistic.com/") // replace with your actual domain
    .save(path.resolve(__dirname, "./public/sitemap.xml"));
}

generateSitemap();
