---
layout: default
title: "importXML"
nav_order: 8
description: "importXML"
permalink: /general/api-reference/bpmn-js/importXML
last_modified_date: 2020-04-27T17:54:08+0000
parent: "bpmn-js"
grand_parent: "API Reference"
---

# importXML

`importXML` API parses and renders a BPMN 2.0 diagram.

## Usage

importXML(xml: _String_, bpmnDiagram: _ModdleElement_ or _String_): Promise< result: _Object_, error: _Error_ >

### Parameters

* `xml`: BPMN 2.0 XML string to import and render.
* `bpmnDiagram`: BPMN diagram moddle element to render or id string of the diagram to render.

### Return Value

A Promise resolving with

* `result`: An object containing `warnings` property which is an array of import warnings.

and rejecting with

* `error`: An error containing additional `warnings` property which is an array of import warnings.

### Code Example

```javascript
// modeler is an instance of BpmnJS Modeler.

try {

  const result = await modeler.importXML(xml);

  const { warnings } = result;

  console.log('Import warnings: ', warnings);
} catch (err) {

  console.log('Error happened: ', err.message, err.warnings);
}
```

### Life-Cycle Events

During the import, these [events](/events) will be fired:

* [import.parse.start](/events/bpmn-events/import-parse-start)
* [import.parse.complete](/events/bpmn-events/import-parse-complete)
* [import.render.start](/events/bpmn-events/import-render-start)
* [import.render.complete](/events/bpmn-events/import-render-complete)
* [import.done](/events/bpmn-events/import-done)

## Using with Callback Function

With the [v7.0.0 release](https://github.com/bpmn-io/bpmn-js/blob/develop/CHANGELOG.md#700) public bpmn-js APIs are made awaitable and passing callbacks to APIs will be deprecated in a future release. See [here](https://bpmn.io/l/moving-to-promises.html) for more info.
