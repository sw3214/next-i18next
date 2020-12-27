const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  backend: {
    loadPath: `./public/static/locales/{{lng}}/{{ns}}.json`,
    addPath: `/locales/add/{{lng}}/{{ns}}.json`,
  },
})
