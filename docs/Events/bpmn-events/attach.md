---
layout: default
title: attach 
nav_order: 1
description: attach event
permalink: /events/bpmn-events/attach
last_modified_date: 2020-09-22T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# attach

This event is fired by [attachTo API](/general/api-reference/bpmn-js/attachTo) after bpmn-js container is attached to the [configured DOM node](/general/getting-started/bpmn-js). 

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('attach', () => {

  const editorActions = modeler.get('editorActions'); // the container is attached, let's do something with it

  editorActions.trigger('selectElements'); // select all elements that are currently on the canvas
});
```

## Data

This event offers no additional data.