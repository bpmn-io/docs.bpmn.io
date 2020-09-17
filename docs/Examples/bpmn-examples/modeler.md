---
layout: default
title: Modeler
nav_order: 13
description: "Modeler"
permalink: /examples/bpmn/modeler
last_modified_date: 2020-04-27T17:54:08+0000
parent: "BPMN Examples"
grand_parent: "Examples"
---

# Modeler

This example uses [bpmn-js](https://github.com/bpmn-io/bpmn-js) to implement a modeler for BPMN 2.0 process diagrams. It serves as the basis of the bpmn-js demo application available at [demo.bpmn.io](http://demo.bpmn.io).

## About

This example is a node-style web application that builds a user interface around the bpmn-js BPMN 2.0 modeler.

![image](/assets/images/modeler.png)

[Here's the repository for this example.](https://github.com/bpmn-io/bpmn-js-examples/tree/master/modeler)

## Building

You need a [NodeJS](http://nodejs.org) development stack with [npm](https://npmjs.org) installed to build the project.

To install all project dependencies execute

```
npm install
```

Build the application (including [bpmn-js](https://github.com/bpmn-io/bpmn-js)) via

```
npm run all
```

You may also spawn a development setup by executing

```
npm run dev
```

Both tasks generate the distribution ready client-side modeler application into the `public` folder.

Serve the application locally or via a web server (nginx, apache, embedded).
