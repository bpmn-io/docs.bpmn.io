---
layout: default
title: saveXML.done 
nav_order: 14
description: saveXML.done event
permalink: /events/bpmn-events/saveXML-done
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# saveXML.done

This event is fired by [saveXML API](/general/api-reference/bpmn-js/saveXML) with data containing `xml` after a diagram export ends. This allows users to listen whenever a diagram export to BPMN 2.0 XML was successful.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('saveXML.done', (data) => {

  const { xml } = data; // this is the XML that is exported

  console.log('Diagram has been exported, contents:', xml);
});
```

## Data

The data fired with this event contains these fields:

`xml`: _[String](#)_ <br>
The exported BPMN 2.0 XML.

