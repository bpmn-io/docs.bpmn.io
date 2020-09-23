---
layout: default
title: saveXML.serialized 
nav_order: 15
description: saveXML.serialized event
permalink: /events/bpmn-events/saveXML-serialized
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# saveXML.serialized

This event is fired by [saveXML API](/general/api-reference/bpmn-js/saveXML) with data containing `xml` after a diagram was serialized to BPMN 2.0 XML. It allows users to hook into and manipulate the serialized XML before it got exported.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('saveXML.serialized', (data) => {

  const { xml } = data; // this is the XML that is about to get exported

  const newXML = xml.replace('StartEvent_1', 'StartEvent_2');

  return newXML; // now this new XML will be exported instead
});
```

## Data

The data fired with this event contains these fields:

`xml`: _[String](#)_ <br>
The serialized BPMN 2.0 XML.