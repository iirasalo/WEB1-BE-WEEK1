## Tasks

> Work in group to solve these tasks.

## Task 1: Creating own JavaScript module

JavaScript allows structure large programs by creating code modules that hold related functions and properties that can be exported in multiple other files that need these properties and functions. You can create your own modules and easily include them in your applications. Developer need to use exports keyword to make those functions and properties available outside the module file. This keeps larger projects organized and code cleaner.

Create and export own message module:` message.js`

```js
const print = () => {
  console.log('This is a demo message!');
};
module.exports = { print };
```

And use it in application: `index.js`

```js
const message = require('./message');
message.print();
```

Running the above program (with the command `node index.js`) would print out This is a demo message!.

Remember that you don't need to export everything in a module. You can have declarations that are only available for use inside the module. Now id in below. `user.js`

```js
const id = 'salasana';
const name = 'Matti Seppanen';
const email = 'matti@matti.com';
module.exports = { name, email };
```

`run.js`

```js
const user = require('./user');

console.log(user.id);
console.log(user.name);
console.log(user.email);
```

Will display in console:

```js
undefined
Matti Seppanen
matti@matti.com
```

## Task 2: 3rd party modules

Refer to the following [article](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

- What is a package.json file?
--> package.json includes the packages and applications the project depends on, information about its unique source control, and specific metadata like the project's name, description, and author.

- Difference between npm and node
--> Node is a framework that runs JavaScript code on machine whilst npm is a package manager. By using npm we can install and remove javascript packages also known as node modules.

- Explain the following command `npm init --yes`
--> Can be used to set up a new or existing npm package (package.json).

- How do you install third party modules?
--> npm init --yes
--> npm install <name of module>
- Install express using the following command: `npm install express` --> OK

## Links

- [nodejs.dev](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)
- [labranet](https://ytsp0200.pages.labranet.jamk.fi/04.-Node.js/03.-Node-Package-Manager/)
