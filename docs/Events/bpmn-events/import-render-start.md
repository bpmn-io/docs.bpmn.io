---
layout: default
title: import.render.start 
nav_order: 8
description: import.render.start event
permalink: /events/bpmn-events/import-render-start
last_modified_date: 2020-09-12T17:54:08+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# import.render.start

This event is fired by [importXML API](/general/api-reference/bpmn-js/importXML) with data containing `definitions` before the graphical import begins. This allows users to listen for the start of the graphical rendering of diagrams.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('import.render.start', (data) => {

  const { definitions } = data; // this is the definitions element that is about to be rendered

  console.log('Diagram will be rendered, definitions:', definitions);
});
```

## Data

The data fired with this event contains these fields:

`definitions`: _[ModdleElement](#)_  <br>
The definitions moddle element that is about to be rendered.
