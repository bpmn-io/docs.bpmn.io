---
layout: default
title: bpmnElement.added 
nav_order: 2
description: bpmnElement.added event
permalink: /events/bpmn-events/bpmnElement-added
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# bpmnElement.added

This event is fired by [bpmnImporter API](/modules/bpmn-modules/bpmn-importer) after an element was added to the [canvas](/modules/common-modules/canvas). This allows users to listen to whenever a BPMN 2.0 element got added during the import.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('bpmnElement.added', (data) => {

  const { element } = data; // this is the element that was added to the canvas

  if(element.businessObject.$type === 'bpmn:StartEvent') {
    console.log('Start event was imported!'); // notify whenever a specific element was imported
  }
});
```

## Data

The data fired with this event contains these fields:

`element`: _[ModdleElement](#)_ <br>
The element that is added to the canvas during import.
