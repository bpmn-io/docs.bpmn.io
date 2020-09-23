---
layout: default
title: saveSVG.start 
nav_order: 13
description: saveSVG.start event
permalink: /events/bpmn-events/saveSVG-start
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# saveSVG.start

This event is fired by [saveSVG API](/general/api-reference/bpmn-js/saveSVG). It allows the user to listen when a diagram export to SVG has started.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('saveSVG.start', () => {
  console.log('Diagram is going to be exported as SVG!');
});
```

## Data

This event offers no additional data.

