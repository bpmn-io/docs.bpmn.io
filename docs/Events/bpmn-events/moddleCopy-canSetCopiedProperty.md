---
layout: default
title: moddleCopy.canSetCopiedProperty
nav_order: 11
description: moddleCopy.canSetCopiedProperty event
permalink: /events/bpmn-events/moddleCopy-canSetCopiedProperty
last_modified_date: 2020-09-22T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# moddleCopy.canSetCopiedProperty

This event is fired by [moddleCopy API](/modules/bpmn-modules/moddle-copy) with data containing `parent`, `property` and `propertyName` of an already copied BPMN 2.0 model property. This allows users to hook into and decide whether to allow setting an already copied property.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

const HIGH_PRIORITY = 5000;

modeler.on('moddleCopy.canSetCopiedProperty', HIGH_PRIORITY, (data) => {

  const { property } = data; // get property that is about to get set

  if (property.$type === 'bpmn:ExtensionElement' && (!property.values || !property.values.length)) {

    return false; // don't allow setting empty extension elements
  }
});
```

## Data

The data fired with this event contains these fields:

* `parent`: _[ModdleElement](#)_  <br>
The element that owns the property.

* `property`: _[String](#) | [ModdleElement](#)_ <br>
The property that is about to be set.

* `propertyName`: _[String](#)_ <br>
The name of the property in the parent element.
