# generator-react-babelify
> React, Browserify and Babel with ES2015 preset


A minimal generator to get started with React and ES2015. Perhaps useful for regular users of [Yeoman](http://yeoman.io), [npm](https://www.npmjs.com/) and [node.js](https://nodejs.org/). I use it to learn and practice different example implementations.

**Features:**
- Simple node server
  - serve a static json file from `data/` directory at `/api` path
  - serve static files under `/public`
- Your application code goes into `src/`
  - In `src/components/` you can find a simple _hello world_ component and a component showcasing one way to fetch data using `$.ajax`.
- Transpile `src/app.js` into `public/bundle.js`

Hope it helps to get started with React and ES2015.

## Installation

This is not published but you can use it locally by cloning this repository and then linking it to your system using [`npm link`](http://stackoverflow.com/a/24058994).

```git
git clone https://github.com/afarriaga/generator-react-babelify.git
cd generator-react-babelify

npm link
```

Then create a folder where you want to scaffold and generate your new project:

```git
yo react-babelify
```

You would have to manually run `npm install` in your project folder and then `npm start` which runs the watcher and the node server.

#### Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT
