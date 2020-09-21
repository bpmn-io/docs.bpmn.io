---
layout: default
title: eventBus
nav_order: 31
description: eventBus Module
permalink: /modules/common-modules/event-bus
last_modified_date: 2020-04-27T17:54:08+0000
parent: "Common Modules"
grand_parent: "Modules"
---

# eventBus

A general purpose event bus.

It is used to communicate between modules of a diagram instance without coupling them.
Several components of a diagram can use it to listen to and to broadcast events.

It provides the following methods:

* [on](#on)
* [once](#once)
* [off](#off)
* [createEvent](#createEvent)
* [fire](#fire)

## on

### Usage

on(events: _String_ or _Array< string >_, [priority=1000]: _number_, callback: _Function_, [that]:_Object_): _undefined_

### Parameters

* `events`: name of the event or _Array_ of event names.
* `priority`: optional parameter specifying the priority with which the listener is called, where a higher number represents a higher priority and therefore leads to the listener being called earlier. If not provided, default of `1000` will be used.
* `callback`: function which will be invoked with `event, ...additionalArguments`. Returning anything but `undefined` from this will stop the listener propagation. Returning `false` will prevent the execution of the default action for that event.
*  `that`: optional parameter which can be used to pass context (`this`) to the callback.

### Return Value

_undefined_

### Code Example

```javascript
eventBus.on('saveSVG.start', 1500, function(event) {

  // access event type
  event.type; // 'saveSVG.start'

  // stop propagation to other listeners
  event.stopPropagation();

  // prevent event default
  event.preventDefault();

  // Some custom logic
  // [...]
});
```


## once

### Usage

once(events: _String_ or _Array< string >_, [priority=1000]: _number_, callback: _Function_, [that]:_Object_): _undefined_

### Parameters

* `events`: name of the event or _Array_ of event names.
* `priority`: optional parameter specifying the priority with which the listener is called, where a higher number represents a higher priority and therefore leads to the listener being called earlier. If not provided, default of `1000` will be used.
* `callback`: function which will be invoked with `event, ...additionalArguments`. Returning anything but `undefined` from this will stop the listener propagation. Returning `false` will prevent the execution of the default action for that event.
*  `that`: optional parameter which can be used to pass context (`this`) to the callback.

### Return Value

_undefined_

### Code Example

```javascript
// listener performing some one-time operation
function listener(event) { return 'One-time operation finished'; }

eventBus.once('onceEvent', listener);

const firstEventFired = eventBus.fire('onceEvent'),
      secondEventFired = eventBus.fire('onceEvent');

console.log(firstEventFired); // 'One-time operation finished'
console.log(secondEventFired); // undefined
```

## off

### Usage

off(events: _String_ or _Array< string >_, [callback]: _Function_): _undefined_

### Parameters

* `events`: name of the event or _Array_ of event names.
* `callback`: optional parameter specifying the callback listener to be removed.

### Return Value

_undefined_

### Code Example

```javascript
function fooListener(event) {
  console.log('Foo');
}

function barListener(event) {
  console.log('Bar');
}

eventBus.on('foo', fooListener);
eventBus.on('foo', barListener);

eventBus.fire('foo'); // 'Foo' 'Bar'

eventBus.off('foo', fooListener);

eventBus.fire('foo'); // 'Bar'

eventBus.off('foo');

eventBus.fire('foo'); // ''
```

## createEvent

### Usage

createEvent(data: _Object_): _Object_

### Parameters

* `data`: the event data.

### Return Value

An _InternalEvent_ object which can be passed to [fire](#fire).

## fire

### Usage

fire(name: _String_, [data]: _Object_, [arguments]: _...Object_): _Object_

### Parameters

* `name`: event name.
* `data`: optional _InternalEvent_ object. If this is not already an instance of `InternalEvent`, the `fire` method will internal wrap it as such (using [`createEvent`](createEvent)).
* `arguments`: optional additional arguments to be passed to the callback functions.

### Return Value

* `false` if the default action was prevented by listeners.
* `undefined` if no listeners were registered for that event.
* _Object_ if the invoked listener with the highest priority returns a value.

### Code Example

Passing multiple parameters
```javascript
function listener(...args) {

  // Remove first element of args (which is the InternalEvent Object)
  args.shift();

  console.log(`I was called with ${args} as parameters`);
}

eventBus.on("someEvent", listener);

eventBus.fire("someEvent", 1, 2, 3); // I was called with 1,2,3 as parameters
```

Passing an object as first parameter
```javascript
eventBus.on('foo', ({ answer }) => {

  // Since an object was passed as first parameter, it is assigned to the event directly
  console.log(answer)
});

// Pass an Object as first parameter
eventBus.fire('foo', { answer: 42 }); // 42
```
