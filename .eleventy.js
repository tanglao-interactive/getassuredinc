module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Current year global data
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());
  eleventyConfig.addGlobalData("siteUrl", "https://getassuredinc.pang-app.com");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
