const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),

  // I know this package is not react-i18next, but was just looking here for 
  // examples on how to use the backend loadPath and addPath.
  // https://www.robinwieruch.de/react-internationalization

  // From documentation in next-i18next and the following, it looks like backend 
  // properites should be passed through and we can load additional resources... 
  //    https://github.com/isaachinman/next-i18next/issues/307
  //
  // However, I have been unsuccessful in getting the configuration to point to 
  //    /public/static/locales/add/
  //
  // I believe I have tried every permutation of paths for localePath above as well 
  // as backend paths, but still can not get the localizations found under /locales/add 
  // to be translated.  This project represents an example of what I think *should* work, 
  // but doesn't.
  backend: {
    loadPath: function(lng, ns) {
      if (typeof window == "undefined") {
        return path.resolve(`./public/static/locales/add/${lng}/${ns}.json`);
      } else {
        return `/locales/add/${lng}/${ns}.json`;
      }
    }
  },

})
