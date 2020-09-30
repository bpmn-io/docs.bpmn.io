---
layout: default
title: modeling
nav_order: 52
description: modeling Module
permalink: /modules/bpmn-modules/modeling
last_modified_date: 2020-04-27T17:54:08+0000
parent: "BPMN Modules"
grand_parent: "Modules"
---

# modeling

This module extends the functionality of [the common modeling module](/modules/common-modules/modeling).

Additional APIs over the common modeling module are:

* [updateLabel](#updatelabel)
* [connect](#connect)
* [updateProperties](#updateproperties)
* [resizeLane](#resizelane)
* [addLane](#addlane)
* [splitLane](#splitlane)
* [setColor](#setcolor)

## updateLabel

Updates labels and changes the names of elements. This API fires
[elements.changed](/events/common-events/elements-changed) event and executes [element.updateLabel](/commands/bpmn-commands/element-updateLabel) command.

### Example Usage

updateLabel(element: _Shape_, newLabel: _String_, newBounds: _Object_, hints: _Object_): _undefined_

```javascript
// bpmnJS is an instance of BpmnJS Modeler.

const elementRegistry = bpmnJS.get('elementRegistry');
const modeling = bpmnJS.get('modeling');

const startEvent1 = elementRegistry.get('StartEvent_1');

modeling.updateLabel(startEvent1, 'new label');
```

## connect

Connects two shapes if allowed by the [BPMN rules](/modules/bpmn-modules/bpmn-rules). Uses [createConnection](/modules/common-modules/modeling#createconnection) internally.

### Example Usage

connect(source: _Shape_, target: _Shape_, attrs: _Object_, hints: _Object_): _Connection_

```javascript
// bpmnJS is an instance of BpmnJS Modeler.

const elementRegistry = bpmnJS.get('elementRegistry');
const modeling = bpmnJS.get('modeling');

const sourceShape = elementRegistry.get('Task_1');
const targetShape = elementRegistry.get('Task_2');

modeling.connect(sourceShape, targetShape);

```

To create connection with custom start/end points:
```javascript

const attrs = null;

modeling.connect(sourceShape, targetShape, attrs, {
  connectionStart: {
    x: 700,
    y: 400
  },
  connectionEnd: {
    x: 420,
    y: 130
  }
});
```

## updateProperties

Updates the properties of business object of given shape. This API executes [element.updateProperties](/commands/bpmn-commands/element-updateProperties) command.

### Example Usage

updateProperties(element: _Shape_, properties: _Object_): _undefined_

```javascript
// bpmnJS is an instance of BpmnJS Modeler.

const elementRegistry = bpmnJS.get('elementRegistry');
const modeling = bpmnJS.get('modeling');

const gatewayShape = elementRegistry.get('ExclusiveGateway_1');
const newDefaultFlowConnection = elementRegistry.get('SequenceFlow_2');

const newDefaultFlow = newDefaultFlowConnection.businessObject;

modeling.updateProperties(gatewayShape, { 'default': newDefaultFlow });

const flowConnection = elementRegistry.get('SequenceFlow_1');
modeling.updateProperties(flowConnection, { name: 'new name' });
```

## resizeLane

Resizes BPMN lane objects. This API executes [lane.resize](/commands/bpmn-commands/lane-resize) command.

### Example Usage

resizeLane(laneShape: _Shape_, newBounds: _Object_, balanced: _Boolean_): _undefined_

```javascript
// bpmnJS is an instance of BpmnJS Modeler.

const elementRegistry = bpmnJS.get('elementRegistry');
const modeling = bpmnJS.get('modeling');

const laneShape = elementRegistry.get('Lane_A');

const newBounds = {
  x: laneShape.x
  y: laneShape.y + 10
  width: laneShape.width
  height: laneShape.height - 10
};

modeling.resizeLane(laneShape, newBounds);
```

## addLane

Adds a lane shape to its parent (either Participant, Process or SubProcess). This API executes [lane.add](/commands/bpmn-commands/lane-add) command.

### Example Usage

addLane(targetLaneShape: _Shape_, location: _String_): _Shape_

```javascript
// bpmnJS is an instance of BpmnJS Modeler.

const elementRegistry = bpmnJS.get('elementRegistry');
const modeling = bpmnJS.get('modeling');

const laneShape = elementRegistry.get('Lane_A');

const location = 'bottom'; // either 'top' or 'bottom'

const newLane = modeling.addLane(laneShape, location);
```

## splitLane

Splits a participant into lanes. This API executes [lane.split](/commands/bpmn-commands/lane-split) command.

### Example Usage

splitLane(targetLane: _Shape_, count: _Integer_): _undefined_

```javascript
// bpmnJS is an instance of BpmnJS Modeler.

const elementRegistry = bpmnJS.get('elementRegistry');
const modeling = bpmnJS.get('modeling');

const participantShape = elementRegistry.get('Participant');

// Split the participant into 2 lanes
modeling.splitLane(participantShape, 2);
```

## setColor

Sets/unsets the fill and stroke colors of given element(s). This API executes [element.setColor](/commands/bpmn-commands/element-setColor) command.

### Example Usage

setColor(elements: Array<_Shape_> or _Shape_, colors: _Object_): _undefined_

```javascript
// bpmnJS is an instance of BpmnJS Modeler.

const elementRegistry = bpmnJS.get('elementRegistry');
const modeling = bpmnJS.get('modeling');

const taskShape = elementRegistry.get('Task_1');

// set the fill and stroke colors
modeling.setColor(taskShape, { fill: 'FUCHSIA', stroke: 'YELLOW' });

// unset the fill and stroke colors
modeling.setColor(taskShape);
```
