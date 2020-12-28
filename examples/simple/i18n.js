const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),

  //   derivative of @artze solution, updated to match the simple project locales folder structure.
  backend: {
    loadPath: function(lng, ns) {
      if (typeof window == "undefined") {
        // return path.resolve(`./public/locales/${lng}/${ns}.json`);
        return path.resolve(`./public/static/locales/${lng}/${ns}.json`);
      } else {
        return `/locales/${lng}/${ns}.json`;
      }
    },

    // ----
    // These "addPath" options don't actually add the path...
    // Trying to figure out how to make the paths available.
    // ----
    addPath: function(lng, ns) {
      if (typeof window == "undefined") {
        // return path.resolve(`./public/locales/${lng}/${ns}.json`);
        return path.resolve(`./public/static/locales/add/${lng}/${ns}.json`);
      } else {
        return `/locales/add/${lng}/${ns}.json`;
      }
    },
    // ----
    // additional attempts at adding path which didn't work:
    // ----
    // addPath: "/locales/add/{{lng}}/{{ns}}.json"
    // addPath: "http://localhost:3000/static/locales/add/{{lng}}/{{ns}}.json"  // Note, these locations are available via web browser
    // addPath: function(lng, ns) {
    //   return `http://localhost:3000/static/locales/add/${lng}/${ns}.json`
    // },
    // addPath: function(lng, ns) {
    //   if (typeof window == "undefined") {
    //     // return path.resolve(`./public/locales/${lng}/${ns}.json`);
    //     return path.resolve(`./public/static/locales/add/${lng}/${ns}.json`);
    //   } else {
    //     return `http://localhost:3000/static/locales/add/${lng}/${ns}.json`;
    //   }
    // },
  }

})
