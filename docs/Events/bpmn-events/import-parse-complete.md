---
layout: default
title: import.parse.complete 
nav_order: 5
description: import.parse.complete event
permalink: /events/bpmn-events/import-parse-complete
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# import.parse.complete

This event is fired by [importXML API](/general/api-reference/bpmn-js/importXML) with data containing the result after parsing step of the import ends. This allows users to hook into and manipulate the imported definitions moddle element.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('import.parse.complete', (data) => {

  const { error, warnings, definitions } = data;

  // check for import errors
  if (error) {
    return console.log('Error while importing diagram:', error);
  }

  // check for import warnings
  if (warnings && warnings.length) {
    return console.log('Warnings while importing diagram:', warnings);
  }

  // check for exporter of the original diagram
  const exporter = definitions.get('exporter');

  if (exporter !== 'Camunda Modeler') {
    throw new Error(
      'This diagram has to be exported from the Camunda Modeler!'
    );
  }
});
```

## Data

The data fired with this event contains these fields:

`xml`: _[String](#)_ <br>
The BPMN 2.0 XML that is about to be imported.

`error`: _[Error](#)_<br>
An error that got raised through the import.

`definitions`: _[ModdleElement](#)_<br>
The definitions moddle element that got imported from the BPMN 2.0 XML.

`elementsById`: _[Object](#)_<br>
A map of elements referenced by their ids.

`references`: _Array\<[ModdleElement](#)\>_<br>
A list of referenced elements in the diagram.

`warnings`: _Array\<[String](#)\>_ <br>
A list of warnings that got raised during the import.