---
layout: default
title: detach 
nav_order: 3
description: detach event
permalink: /events/bpmn-events/detach
last_modified_date: 2020-09-22T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# detach

This event is fired by [detach API](/general/api-reference/bpmn-js/detach) after the bpmn-js container is removed from the [configured DOM node](/general/getting-started/bpmn-js). 

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('detach', () => {
  console.log('Container was removed from the DOM. No canvas is available any more.')
});
```

## Data

This event offers no additional data.