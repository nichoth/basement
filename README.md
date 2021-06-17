# basement

https://www.notion.so/Front-End-Dev-Challenge-feb43cb413e644e683ce7bf84cff7c16


## next ???

* how does css work? It seems to be in 3 places --
`components/<component>.module.css`, `public/static/styles.css`, and in `pages/index.js` in a `<style jsx>` part of the JS.

* The commands in `npm` are `next dev` and `next build`, so `nextjs` is a sort of compiler for the website... but unlike `browserify` or `webpack` that have specific goals -- compiling commonjs style JS, next is for the entire website, so this means things like optimizing *which* bundles you serve on which routes, and putting css into optimal bundles, and rendering some routes server side... so this makes me wonder exactly *what it does*? How does it's algorithm work when dealing with routes, server-side rendering, etc

* how do you view hover states in figma?

* how to use sass for css?

---------------------------------------------------

## choices

* form validation is done with html5 `pattern` attribute and default invalid helper text -- the simplest possible solution for showing error messages

There is only 1 screen in this demo. I assume in real life you would want to show a different page if the user is logged in. Instead, i just added some green text if the user is logged in.