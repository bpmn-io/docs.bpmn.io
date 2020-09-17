---
layout: default
title: URL Viewer
nav_order: 24
description: "URL Viewer"
permalink: /examples/bpmn/url-viewer
last_modified_date: 2020-04-27T17:54:08+0000
parent: "BPMN Examples"
grand_parent: "Examples"
---

# URL Viewer

This example uses [bpmn-js](https://github.com/bpmn-io/bpmn-js) to implement a
simple viewer for BPMN 2.0 process diagrams that can be loaded via their URL.

[__Try out__](https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/master/url-viewer/index.html).


## About

The demo includes the [pre-packaged](../pre-packaged) BPMN viewer.
It allows the user to input a url to fetch a process diagram from.

![image](/assets/images/url-viewer.png)

Make sure you serve the application via a web server (nginx, apache, embedded) and ensure that the diagrams you want to access are either on the same server or [CORS](https://en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing) enabled.

[Here's the repository for this example.](https://github.com/bpmn-io/bpmn-js-examples/tree/master/url-viewer)

## Run the Example

Download and open the [example HTML page](https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/master/url-viewer/index.html).
