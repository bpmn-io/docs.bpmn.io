---
layout: default
title: import.render.complete 
nav_order: 7
description: import.render.complete event
permalink: /events/bpmn-events/import-render-complete
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# import.render.complete

This event is fired by [importXML API](/general/api-reference/bpmn-js/importXML) with data containing `error` and `warnings` after the graphical import ends. This allows users to listen to whether the rendering of a diagram was successful or not.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('import.render.complete', (data) => {

  const { error, warnings } = data; 

  // check for error while importing the diagram
  if(error) {
    console.log('Error while importing the diagram raised:', errors);
  }

  // check for warnings while importing the diagram
  if(warnings && warnings.length) {
    console.log('Warnings while importing the diagram raised:', warnings);
  }
});
```

## Data

The data fired with this event contains these fields:

`error`: _[Error](#)_ <br>
An error that got raised during the import.

`warnings`: _Array\<[String](#)\>_ <br>
A list of warnings that got raised during the import.