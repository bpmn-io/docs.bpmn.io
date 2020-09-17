---
layout: default
title: Commenting
nav_order: 4
description: "Commenting"
permalink: /examples/bpmn/commenting
last_modified_date: 2020-04-27T17:54:08+0000
parent: "BPMN Examples"
grand_parent: "Examples"
---

# Commenting

[bpmn-js](https://github.com/bpmn-io/bpmn-js) is the BPMN 2.0 diagram modeling and rendering toolkit that powers [bpmn.io](http://bpmn.io).

This example showcases how to build a simple discussion app based on [bpmn-js](https://github.com/bpmn-io/bpmn-js) and the [bpmn-js-embedded-comments](https://github.com/bpmn-io/bpmn-js-embedded-comments) extension.

## About

This example uses bpmn-js to embed the [pizza collaboration](http://demo.bpmn.io/s/pizza-collaboration) diagram into a web application and add the ability to put comments on individual tasks.

![image](/assets/images/commenting.png)

The comments are added to an elements `<bpmn:documentation>` tag and may be downloaded along with the element.

[Here's the repository for this example.](https://github.com/bpmn-io/bpmn-js-examples/tree/master/commenting)

## Building

One time installation of all dependencies via [npm](https://npmjs.org):

```
npm install
```


Building the app into the `dist` directory and opening it in a browser:

```
npm run dev
```
