# Simple example - add Path: next-i18next

## What is this?

This is an attempt to use `addPath` in `i18n.js` to add a path for localizations.  For instance, it may be beneficial to collate localization namespaces for a certain portions of a project into in one place; `addPath` can potentially help out with that as various separate projects are combined into a single larger project.  So here, the goals are:
* enable the localizations in `/public/static/locales/add/` to translate.
* if possible, have the ability to `addPath` for a `/public/static/locales/add1` and `/public/static/locales/add2` as well.

Note that the localization files `footer.json` and `second-page.json` have been moved inside the `add` directory just so we can demonstrate whether or not the `addPath` is working.  In context, if `addPath` works, then the footer will have the real localized text.  If `addPath` does not work, then the footer will have the default key text of `description`.  The updated `locales` directory structure is as follows:

```
public
+-- static
    +-- locales
        +-- add
            +-- de
                +-- footer.json
                +-- second-page.json
            +-- en
                +-- footer.json
                +-- second-page.json
        +-- de
            +-- common.json
        +-- en
            +-- common.json
```

# <<< orignial README.md for Simple Example follows >>>

# Simple example: next-i18next

## What is this?

This subdirectory is a simple example of how to use [next-i18next](https://github.com/isaachinman/next-i18next) with [NextJs](https://github.com/zeit/next.js) to get translations up and running quickly and easily, while fully supporting SSR, multiple namespaces with codesplitting, etc.

## For more info...

You may have arrived here from the [NextJs](https://github.com/zeit/next.js) repository, or the [react-i18next](https://github.com/i18next/react-i18next/) repository. Either way, for more documentation, please visit the [main README](https://github.com/isaachinman/next-i18next).
