---
layout: default
title: element.updateLabel
nav_order: 5
description: element.updateLabel command
permalink: /commands/bpmn-commands/element-updateLabel
last_modified_date: 2020-04-27T17:54:08+0000
parent: "BPMN Commands"
grand_parent: "Commands"
---

# element.updateLabel

This command is executed when the labels are being updated and the name of elements are being changed.

## Context

The context of this command is an object including following properties:

* `element` (_Shape_): The element of which the label is updated.
* `newLabel` (_String_): The new label.
* `newBounds` (_Object_) _Optional_: A bounds object containing `x`, `y`, `width` and `height` properties.
* `hints` (_Object_) _Optional_: The hints object used internally by BpmnJS.
* `oldLabel` (_String_) _Post execution only_: The old label of the element.
