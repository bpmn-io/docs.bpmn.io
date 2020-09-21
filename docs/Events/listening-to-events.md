---
layout: default
title: Listening to Events
nav_order: 1
description: "Listening to events"
permalink: /events/listening-to-events
last_modified_date: 2020-04-27T17:54:08+0000
parent: "Events"
---

# Listening to Events

`bpmn-js` uses a general purpose [event bus](../Modules/common-modules/event-bus.md) provided by `diagram-js` to communicate across a diagram instance based on [`events`](./bpmn-events).

## Retrieving the `eventBus` Instance

In order to register a listener for an `event`, the `eventBus` instance needs to be retrieved first. This instance can be retrieved like any other module through [`NavigatedViewer#get`](#), [`Viewer#get`](#) or [`Modeler#get`](#).

Alternatively, the `#on` and `#off` methods can be used as shortcuts for `[...].get('eventBus').on` and `[...].get('eventBus').off` to register or remove a previously registered event listener. Again, these shortcuts work on [`NavigatedViewer`](#), [`Viewer`](#) or [`Modeler`](#) likewise.

### Example Usage

Notice that the following snippet demonstrates the retrieval of the `eventBus` instance using a [`Modeler`](#). In principle this instance could also be retrieved from an instance of a [`NavigatedViewer`](#) or [`Viewer`](#) likewise.
```javascript
import BpmnJS from 'bpmn-js/lib/Modeler';

const modeler = new BpmnJS({
  container,
  keyboard: {
    bindTo: document
  }
});

// [...]

const eventBus = modeler.get('eventBus');
```


## Registering an Event Listener

[`EventBus`](../Modules/common-modules/event-bus.md) provides the [`EventBus#on`](#) and [`EventBus#once`](#) methods for registering events (see the reference pages for more details).

### Example Usage

Register a listener function with custom priority of `1500` (default is `1000`). A higher priority number results in a higher priority and therefore earlier calling.

Notice that the following snippet could also use the [`EventBus#once`](#) method resulting in the listener function only being called once.
```javascript
function listener(event) {

  // access event type
  event.type; // 'saveSVG.start'

  // stop propagation to other listeners
  event.stopPropagation();

  // prevent event default
  event.preventDefault();

  // return some value
  return 42;
}

eventBus.on('saveSVG.start', 1500, listener);
```

## Removing an event listener

[`EventBus`](../Modules/common-modules/event-bus.md) provides the [`EventBus#off`](#) method to remove event listeners by event or by event and callback.

### Example Usage

Remove the event listeners we [previously registered](#Registering-an-Event-Listener)
```javascript
eventBus.off('saveSVG.start', listener);
```


Alternatively, all listener for a specific `event` can be removed by omitting the second argument
```javascript
eventBus.off('saveSVG.start');
```
