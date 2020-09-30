---
layout: default
title: import.done
nav_order: 4
description: import.done event
permalink: /events/bpmn-events/import-done
last_modified_date: 2020-09-21T12:00:00+0000
parent: "BPMN Events"
grand_parent: "Events"
---

# import.done

This event is fired by [importXML API](/general/api-reference/bpmn-js/importXML) with data containing `error` and `warnings` after the import ends. This allows users to check if the import has been successful or not.

## Example Usage

```javascript
// modeler is an instance of BpmnJS Modeler.

modeler.on('import.done', (data) => {

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

* `error`: _[Error](#)_ <br>
An error that got raised during the import.

* `warnings`: _Array\<[String](#)\>_ <br>
A list of warnings that got raised during the import.
