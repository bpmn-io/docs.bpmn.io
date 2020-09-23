---
layout: default
title: moddleCopy.canCopyProperty 
nav_order: 10
description: moddleCopy.canCopyProperty event
permalink: /events/bpmn-events/moddleCopy-canCopyProperty
last_modified_date: 2020-09-22T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# moddleCopy.canCopyProperty

This event is fired by [moddleCopy API](/modules/bpmn-modules/moddle-copy) with data containing `parent`, `property` and `propertyName` of a to be copied BPMN 2.0 model property. This allows users to hook into and decide whether and what to copy for a given property. One main use case is to add or remove the ability to copy [custom properties](/examples/bpmn/custom-meta-model).

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

const HIGH_PRIORITY = 5000;

modeler.on('moddleCopy.canCopyProperty', HIGH_PRIORITY, (data) => {

  const { property } = data; // get property that is about to get copied

  if (property.$type === 'myCustomProperty') {

    return false; // never allow copying this custom property
  }
});
```

## Data

The data fired with this event contains these fields:

`parent`: _[ModdleElement](#)_  <br>
The element that owns the to be copied property.

`property`: _[String](#) | [ModdleElement](#)_ <br>
The property that is about to be copied.

`propertyName`: _[String](#)_ <br>
The name of the property in the parent element.