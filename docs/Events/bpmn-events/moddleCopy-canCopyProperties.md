---
layout: default
title: moddleCopy.canCopyProperties
nav_order: 9
description: moddleCopy.canCopyProperties event
permalink: /events/bpmn-events/moddleCopy-canCopyProperties
last_modified_date: 2020-09-22T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# moddleCopy.canCopyProperties

This event is fired by [moddleCopy API](/modules/bpmn-modules/moddle-copy) with data containing `propertyNames`, `sourceElement` and `targetElement` before a BPMN 2.0 element is about to be copied. This allows users to hook into and decide whether and what to copy for a given source element.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

const HIGH_PRIORITY = 5000;

modeler.on('moddleCopy.canCopyProperties', HIGH_PRIORITY, (data) => {

  const { sourceElement } = data; // get element that is about to be copied

  if (sourceElement.$type === 'bpmn:StartEvent') {
    return false; // disallow copying start events
  }

});
```

## Data

The data fired with this event contains these fields:

* `propertyNames`: _Array\<[String](#)\>_  <br>
A list of property names that are about to be copied.

* `sourceElement`: _[ModdleElement](#)_ <br>
The element that is about to be copied.

* `targetElement`: _[ModdleElement](#)_ <br>
The element where the properties are about to be inserted.
