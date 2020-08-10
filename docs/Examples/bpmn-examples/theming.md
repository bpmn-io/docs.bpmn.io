---
layout: default
title: Theming
nav_order: 22
description: "Theming"
permalink: /examples/bpmn/theming
last_modified_date: 2020-04-27T17:54:08+0000
parent: "BPMN Examples"
grand_parent: "Examples"
---

# Theming

This example showcases the different aspects of theming bpmn-js.

[Here's the repository for this example.](https://github.com/bpmn-io/bpmn-js-examples/tree/master/theming)

![image](/assets/images/theming.png)

## Theming bpmn-js

### Custom Renderer

This example uses [bpmn-js-sketchy](https://github.com/bpmn-io/bpmn-js-sketchy) to replace the default renderer. You can also roll your own renderer as shown in the [custom elements example](https://github.com/bpmn-io/bpmn-js-examples/blob/master/custom-elements/app/custom-modeler/custom/CustomRenderer.js) or [bpmn-js-nyan](https://github.com/bpmn-io/bpmn-js-nyan/blob/master/lib/nyan/draw/NyanRenderer.js).

### Custom Font

You can specify which font bpmn-js should use:

```javascript
var bpmnViewer = new CustomBpmnJS({
  // ...
  textRenderer: {
    defaultStyle: {
      fontFamily: '"Nothing You Could Do"'
    }
  }
});
```

__Note:__ Make sure the font has been loaded before rendering a diagram.

### Custom Colors

Customizing the colors is very simple:

```javascript
var bpmnViewer = new CustomBpmnJS({
  // ...
  bpmnRenderer: {
    defaultFillColor: '#333',
    defaultStrokeColor: '#fff'
  }
});
```

### Custom CSS

bpmn-js comes with a [default stylesheet](https://github.com/bpmn-io/diagram-js/blob/master/assets/diagram-js.css). Of course you can override any of these styles.

## Run this example

```
npm install
npm run all
```
