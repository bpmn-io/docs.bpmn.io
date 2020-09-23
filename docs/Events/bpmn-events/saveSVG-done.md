---
layout: default
title: saveSVG.done 
nav_order: 12
description: saveSVG.done event
permalink: /events/bpmn-events/saveSVG-done
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# saveSVG.done

This event is fired by [saveSVG API](/general/api-reference/bpmn-js/saveSVG) with data containing `svg` and `error` after a diagram SVG export ends. This allows users to listen whenever an SVG export of a diagram was executed or to check raised errors.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('saveSVG.done', (data) => {

  const { error, svg } = data;

  // check for errors being raised during the export
  if (error) {
    return console.error('An error while exporting diagram raised:', error);
  }

  // check the SVG after the export
  console.log('Diagram successfully exported to SVG, contents:', svg);
});
```

## Data

The data fired with this event contains these fields:

`error`: _[Error](#)_ <br>
An error that got raised during the export.

`svg`: _[String](#)_ <br>
The SVG string that is exported.

