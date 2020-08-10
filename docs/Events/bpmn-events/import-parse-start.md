---
layout: default
title: import.parse.start
nav_order: 6
description: import.parse.start event
permalink: /events/bpmn-events/import-parse-start
last_modified_date: 2020-04-27T17:54:08+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# import.parse.start

This event is fired by [importXML API](/general/api-reference/bpmn-js/importXML) with data containing `xml` before the import begins. This allows users to hook into and manipulate imported XML.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('import.parse.start', (data) => {

  const { xml } = data; // this is the XML that is about to get imported

  const newXML = xml.replace('StartEvent_1', 'StartEvent_2');

  return newXML; // now this new XML will be imported instead
});
```

## Data

The data fired with this event contains these fields:

`xml`: _[String](#)_  
The BPMN 2.0 XML that is about to be imported.
