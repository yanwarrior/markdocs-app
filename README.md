## Markdocs

Markdocs is an application to create a personal document with a markdown format.
Its built with angularjs. This version has not used Rest.

## How To Use ?
If you want to run this application. You need to install bower and node js. Use bower to install the dependencies required by this app. Using node js to build the server. Alternatively, you can use Python.

### Using npm for install dependencies
Install package serve and bower package:

```
$ npm install -g serve
$ npm install -g bower
```

### Using bower to install required dependencies
Install package `angular`, `angular-marked` and `bootstrap`:

```
$ bower install angular#1
$ bower install angular-marked
$ bower install bootstrap#3
```

## Run app
Run `serve` in your command line to run the server:

```
$ serve

   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:5000       │
   │   - On Your Network:  http://x.x.x.x:5000         │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘
```

You can access url `Local` or `On Your Network` using browser.

## Preview
List all documents:
![preview01](/docs/preview01.png)

Markdown Format:
![preview02](/docs/preview02.png)

Markdown Preview:
![preview03](/docs/preview03.png)


## License
[MIT](/LICENSE.md)
