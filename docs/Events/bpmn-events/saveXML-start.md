---
layout: default
title: saveXML.start 
nav_order: 16
description: saveXML.start event
permalink: /events/bpmn-events/saveXML-start
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# saveXML.start

This event is fired by [saveXML API](/general/api-reference/bpmn-js/saveXML) with data containing `definitions` before the export of the current diagram state begins. This allows users to hook into and manipulate the to be exported diagram.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('saveXML.start', (data) => {

  const { definitions } = data; // this is the definitions that is about to get exported as XML

  const rootElement = definitions.get('rootElements')[0]; // retrieve root element of the diagram

  if (!rootElement.isExecutable) {
    rootElement.isExecutable = true; // ensure we always have executable processes
  }

  return definitions; // now the updated definitions will be exported instead
});
```

## Data

The data fired with this event contains these fields:

`definitions`: _[ModdleElement](#)_ <br>
The definitions moddle element that is about to be exported as BPMN 2.0 XML.
