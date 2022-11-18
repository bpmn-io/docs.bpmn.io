---
id: api
title: API Reference
---

# API Reference

## Classes

<dl>
<dt><code class="bpmn-io-category">bpmn-js</code> <a href="#bpmn-js:Modeling">Modeling</a> ⇐ <code><a href="#diagram-js:Modeling">Modeling</a></code></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#Base">Base</a></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#Shape">Shape</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#Root">Root</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#Label">Label</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#Connection">Connection</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#Canvas">Canvas</a></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#ElementFactory">ElementFactory</a></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#ElementRegistry">ElementRegistry</a></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#EventBus">EventBus</a></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#GraphicsFactory">GraphicsFactory</a></dt>
<dd></dd>
<dt><code class="bpmn-io-category">diagram-js</code> <a href="#diagram-js:Modeling">Modeling</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#create">create(type, attrs)</a> ⇒ <code><a href="#Base">Base</a></code></dt>
<dd><p>Creates a new model element of the specified type</p>
</dd>
</dl>

<a name="create"></a>

## create(type, attrs) ⇒ [<code>Base</code>](#Base)
Creates a new model element of the specified type

**Kind**: global function  
**Returns**: [<code>Base</code>](#Base) - the new model instance  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | lower-cased model name |
| attrs | <code>Object</code> | attributes to initialize the new model instance with |

**Example**  
```js
var shape1 = Model.create('shape', { x: 10, y: 10, width: 100, height: 100 });
var shape2 = Model.create('shape', { x: 210, y: 210, width: 100, height: 100 });

var connection = Model.create('connection', { waypoints: [ { x: 110, y: 55 }, {x: 210, y: 55 } ] });
```
<a name="bpmn-js:Modeling"></a>

## Modeling ⇐ [<code>Modeling</code>](#diagram-js:Modeling)
**Kind**: global class  
**Extends**: [<code>Modeling</code>](#diagram-js:Modeling)  
**Category**: bpmn-js  

* [Modeling](#bpmn-js:Modeling) ⇐ [<code>Modeling</code>](#diagram-js:Modeling)
    * [new Modeling(eventBus, elementFactory, commandStack)](#new_Modeling_new)
    * [new Modeling(eventBus, elementFactory, commandStack, bpmnRules)](#new_Modeling_new)
    * [.registerHandlers(commandStack)](#Modeling+registerHandlers)
    * [.moveShape(shape, delta, newParent, newParentIndex, hints)](#Modeling+moveShape)
    * [.updateAttachment(shape, [newHost])](#Modeling+updateAttachment)
    * [.moveElements(shapes, delta, [target], [hints])](#Modeling+moveElements)
    * [.createConnection(source, target, [parentIndex], connection, parent, hints)](#Modeling+createConnection) ⇒ <code>djs.model.Connection</code>
    * [.createShape(shape, position, target, [parentIndex], [hints])](#Modeling+createShape) ⇒ <code>djs.model.Shape</code>
    * [.appendShape(source, shape, position, target, [hints])](#Modeling+appendShape) ⇒ <code>djs.model.Shape</code>
    * [.makeCollaboration()](#Modeling+makeCollaboration) ⇒ <code>djs.model.Root</code>
    * [.makeProcess()](#Modeling+makeProcess) ⇒ <code>djs.model.Root</code>

<a name="new_Modeling_new"></a>

### new Modeling(eventBus, elementFactory, commandStack)
The basic modeling entry point.


| Param | Type |
| --- | --- |
| eventBus | <code>module:EventBus</code> | 
| elementFactory | <code>module:ElementFactory</code> | 
| commandStack | <code>undefined</code> | 

<a name="new_Modeling_new"></a>

### new Modeling(eventBus, elementFactory, commandStack, bpmnRules)
BPMN 2.0 modeling features activator


| Param | Type |
| --- | --- |
| eventBus | <code>module:diagram-js/lib/core/EventBus</code> | 
| elementFactory | <code>undefined</code> | 
| commandStack | <code>module:diagram-js/lib/core/CommandStack</code> | 
| bpmnRules | <code>undefined</code> | 

<a name="Modeling+registerHandlers"></a>

### modeling.registerHandlers(commandStack)
Register handlers with the command stack

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  

| Param | Type |
| --- | --- |
| commandStack | <code>CommandStack</code> | 

<a name="Modeling+moveShape"></a>

### modeling.moveShape(shape, delta, newParent, newParentIndex, hints)
Move shape.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  

| Param | Type |
| --- | --- |
| shape | [<code>Shape</code>](#Shape) | 
| delta | <code>Object</code> | 
| newParent | [<code>Shape</code>](#Shape) | 
| newParentIndex | <code>number</code> | 
| hints | <code>Object</code> | 

<a name="Modeling+updateAttachment"></a>

### modeling.updateAttachment(shape, [newHost])
Update the attachment of the given shape.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  

| Param | Type |
| --- | --- |
| shape | <code>djs.mode.Base</code> | 
| [newHost] | <code>djs.model.Base</code> | 

<a name="Modeling+moveElements"></a>

### modeling.moveElements(shapes, delta, [target], [hints])
Move a number of shapes to a new target, either setting it as
the new parent or attaching it.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  

| Param | Type | Default |
| --- | --- | --- |
| shapes | <code>Array.&lt;djs.mode.Base&gt;</code> |  | 
| delta | <code>Point</code> |  | 
| [target] | <code>djs.model.Base</code> |  | 
| [hints] | <code>Object</code> |  | 
| [hints.attach] | <code>boolean</code> | <code>false</code> | 

<a name="Modeling+createConnection"></a>

### modeling.createConnection(source, target, [parentIndex], connection, parent, hints) ⇒ <code>djs.model.Connection</code>
Create connection.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Connection</code> - the created connection.  

| Param | Type |
| --- | --- |
| source | <code>djs.model.Base</code> | 
| target | <code>djs.model.Base</code> | 
| [parentIndex] | <code>number</code> | 
| connection | <code>Object</code> \| <code>djs.model.Connection</code> | 
| parent | <code>djs.model.Base</code> | 
| hints | <code>Object</code> | 

<a name="Modeling+createShape"></a>

### modeling.createShape(shape, position, target, [parentIndex], [hints]) ⇒ <code>djs.model.Shape</code>
Create a shape at the specified position.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Shape</code> - the created shape  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>djs.model.Shape</code> \| <code>Object</code> |  |
| position | <code>Point</code> |  |
| target | <code>djs.model.Shape</code> \| <code>djs.model.Root</code> |  |
| [parentIndex] | <code>number</code> | position in parents children list |
| [hints] | <code>Object</code> |  |
| [hints.attach] | <code>boolean</code> | whether to attach to target or become a child |

<a name="Modeling+appendShape"></a>

### modeling.appendShape(source, shape, position, target, [hints]) ⇒ <code>djs.model.Shape</code>
Append shape to given source, drawing a connection
between source and the newly created shape.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Shape</code> - the newly created shape  

| Param | Type |
| --- | --- |
| source | <code>djs.model.Shape</code> | 
| shape | <code>djs.model.Shape</code> \| <code>Object</code> | 
| position | <code>Point</code> | 
| target | <code>djs.model.Shape</code> | 
| [hints] | <code>Object</code> | 
| [hints.attach] | <code>boolean</code> | 
| [hints.connection] | <code>djs.model.Connection</code> \| <code>Object</code> | 
| [hints.connectionParent] | <code>djs.model.Base</code> | 

<a name="Modeling+makeCollaboration"></a>

### modeling.makeCollaboration() ⇒ <code>djs.model.Root</code>
Transform the current diagram into a collaboration.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Root</code> - the new root element  
<a name="Modeling+makeProcess"></a>

### modeling.makeProcess() ⇒ <code>djs.model.Root</code>
Transform the current diagram into a process.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Root</code> - the new root element  
<a name="Base"></a>

## *Base*
**Kind**: global abstract class  
**Category**: diagram-js  

* *[Base](#Base)*
    * *[new Base()](#new_Base_new)*
    * *[.businessObject](#Base+businessObject) : <code>Object</code>*
    * *[.label](#Base+label) : <code>Object</code>*
    * *[.parent](#Base+parent) : [<code>Shape</code>](#Shape)*
    * *[.labels](#Base+labels) : [<code>Label</code>](#Label)*
    * *[.outgoing](#Base+outgoing) : [<code>Array.&lt;Connection&gt;</code>](#Connection)*
    * *[.incoming](#Base+incoming) : [<code>Array.&lt;Connection&gt;</code>](#Connection)*

<a name="new_Base_new"></a>

### *new Base()*
The basic graphical representation

<a name="Base+businessObject"></a>

### *base.businessObject : <code>Object</code>*
The object that backs up the shape

**Kind**: instance property of [<code>Base</code>](#Base)  
<a name="Base+label"></a>

### *base.label : <code>Object</code>*
Single label support, will mapped to multi label array

**Kind**: instance property of [<code>Base</code>](#Base)  
<a name="Base+parent"></a>

### *base.parent : [<code>Shape</code>](#Shape)*
The parent shape

**Kind**: instance property of [<code>Base</code>](#Base)  
<a name="Base+labels"></a>

### *base.labels : [<code>Label</code>](#Label)*
The list of labels

**Kind**: instance property of [<code>Base</code>](#Base)  
<a name="Base+outgoing"></a>

### *base.outgoing : [<code>Array.&lt;Connection&gt;</code>](#Connection)*
The list of outgoing connections

**Kind**: instance property of [<code>Base</code>](#Base)  
<a name="Base+incoming"></a>

### *base.incoming : [<code>Array.&lt;Connection&gt;</code>](#Connection)*
The list of incoming connections

**Kind**: instance property of [<code>Base</code>](#Base)  
<a name="Shape"></a>

## Shape ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Category**: diagram-js  

* [Shape](#Shape) ⇐ [<code>Base</code>](#Base)
    * [new Shape()](#new_Shape_new)
    * [.isFrame](#Shape+isFrame) : <code>boolean</code>
    * [.children](#Shape+children) : [<code>Array.&lt;Base&gt;</code>](#Base)
    * [.host](#Shape+host) : [<code>Shape</code>](#Shape)
    * [.attachers](#Shape+attachers) : [<code>Shape</code>](#Shape)
    * [.businessObject](#Base+businessObject) : <code>Object</code>
    * [.label](#Base+label) : <code>Object</code>
    * [.parent](#Base+parent) : [<code>Shape</code>](#Shape)
    * [.labels](#Base+labels) : [<code>Label</code>](#Label)
    * [.outgoing](#Base+outgoing) : [<code>Array.&lt;Connection&gt;</code>](#Connection)
    * [.incoming](#Base+incoming) : [<code>Array.&lt;Connection&gt;</code>](#Connection)

<a name="new_Shape_new"></a>

### new Shape()
A graphical object

<a name="Shape+isFrame"></a>

### shape.isFrame : <code>boolean</code>
Indicates frame shapes

**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Shape+children"></a>

### shape.children : [<code>Array.&lt;Base&gt;</code>](#Base)
The list of children

**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Shape+host"></a>

### shape.host : [<code>Shape</code>](#Shape)
**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Shape+attachers"></a>

### shape.attachers : [<code>Shape</code>](#Shape)
**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Base+businessObject"></a>

### shape.businessObject : <code>Object</code>
The object that backs up the shape

**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Base+label"></a>

### shape.label : <code>Object</code>
Single label support, will mapped to multi label array

**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Base+parent"></a>

### shape.parent : [<code>Shape</code>](#Shape)
The parent shape

**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Base+labels"></a>

### shape.labels : [<code>Label</code>](#Label)
The list of labels

**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Base+outgoing"></a>

### shape.outgoing : [<code>Array.&lt;Connection&gt;</code>](#Connection)
The list of outgoing connections

**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Base+incoming"></a>

### shape.incoming : [<code>Array.&lt;Connection&gt;</code>](#Connection)
The list of incoming connections

**Kind**: instance property of [<code>Shape</code>](#Shape)  
<a name="Root"></a>

## Root ⇐ [<code>Shape</code>](#Shape)
**Kind**: global class  
**Extends**: [<code>Shape</code>](#Shape)  
**Category**: diagram-js  

* [Root](#Root) ⇐ [<code>Shape</code>](#Shape)
    * [new Root()](#new_Root_new)
    * [.isFrame](#Shape+isFrame) : <code>boolean</code>
    * [.children](#Shape+children) : [<code>Array.&lt;Base&gt;</code>](#Base)
    * [.host](#Shape+host) : [<code>Shape</code>](#Shape)
    * [.attachers](#Shape+attachers) : [<code>Shape</code>](#Shape)
    * [.businessObject](#Base+businessObject) : <code>Object</code>
    * [.label](#Base+label) : <code>Object</code>
    * [.parent](#Base+parent) : [<code>Shape</code>](#Shape)
    * [.labels](#Base+labels) : [<code>Label</code>](#Label)
    * [.outgoing](#Base+outgoing) : [<code>Array.&lt;Connection&gt;</code>](#Connection)
    * [.incoming](#Base+incoming) : [<code>Array.&lt;Connection&gt;</code>](#Connection)

<a name="new_Root_new"></a>

### new Root()
A root graphical object

<a name="Shape+isFrame"></a>

### root.isFrame : <code>boolean</code>
Indicates frame shapes

**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Shape+children"></a>

### root.children : [<code>Array.&lt;Base&gt;</code>](#Base)
The list of children

**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Shape+host"></a>

### root.host : [<code>Shape</code>](#Shape)
**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Shape+attachers"></a>

### root.attachers : [<code>Shape</code>](#Shape)
**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Base+businessObject"></a>

### root.businessObject : <code>Object</code>
The object that backs up the shape

**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Base+label"></a>

### root.label : <code>Object</code>
Single label support, will mapped to multi label array

**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Base+parent"></a>

### root.parent : [<code>Shape</code>](#Shape)
The parent shape

**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Base+labels"></a>

### root.labels : [<code>Label</code>](#Label)
The list of labels

**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Base+outgoing"></a>

### root.outgoing : [<code>Array.&lt;Connection&gt;</code>](#Connection)
The list of outgoing connections

**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Base+incoming"></a>

### root.incoming : [<code>Array.&lt;Connection&gt;</code>](#Connection)
The list of incoming connections

**Kind**: instance property of [<code>Root</code>](#Root)  
<a name="Label"></a>

## Label ⇐ [<code>Shape</code>](#Shape)
**Kind**: global class  
**Extends**: [<code>Shape</code>](#Shape)  
**Category**: diagram-js  

* [Label](#Label) ⇐ [<code>Shape</code>](#Shape)
    * [new Label()](#new_Label_new)
    * [.labelTarget](#Label+labelTarget) : [<code>Base</code>](#Base)
    * [.isFrame](#Shape+isFrame) : <code>boolean</code>
    * [.children](#Shape+children) : [<code>Array.&lt;Base&gt;</code>](#Base)
    * [.host](#Shape+host) : [<code>Shape</code>](#Shape)
    * [.attachers](#Shape+attachers) : [<code>Shape</code>](#Shape)
    * [.businessObject](#Base+businessObject) : <code>Object</code>
    * [.label](#Base+label) : <code>Object</code>
    * [.parent](#Base+parent) : [<code>Shape</code>](#Shape)
    * [.labels](#Base+labels) : [<code>Label</code>](#Label)
    * [.outgoing](#Base+outgoing) : [<code>Array.&lt;Connection&gt;</code>](#Connection)
    * [.incoming](#Base+incoming) : [<code>Array.&lt;Connection&gt;</code>](#Connection)

<a name="new_Label_new"></a>

### new Label()
A label for an element

<a name="Label+labelTarget"></a>

### label.labelTarget : [<code>Base</code>](#Base)
The labeled element

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Shape+isFrame"></a>

### label.isFrame : <code>boolean</code>
Indicates frame shapes

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Shape+children"></a>

### label.children : [<code>Array.&lt;Base&gt;</code>](#Base)
The list of children

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Shape+host"></a>

### label.host : [<code>Shape</code>](#Shape)
**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Shape+attachers"></a>

### label.attachers : [<code>Shape</code>](#Shape)
**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Base+businessObject"></a>

### label.businessObject : <code>Object</code>
The object that backs up the shape

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Base+label"></a>

### label.label : <code>Object</code>
Single label support, will mapped to multi label array

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Base+parent"></a>

### label.parent : [<code>Shape</code>](#Shape)
The parent shape

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Base+labels"></a>

### label.labels : [<code>Label</code>](#Label)
The list of labels

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Base+outgoing"></a>

### label.outgoing : [<code>Array.&lt;Connection&gt;</code>](#Connection)
The list of outgoing connections

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Base+incoming"></a>

### label.incoming : [<code>Array.&lt;Connection&gt;</code>](#Connection)
The list of incoming connections

**Kind**: instance property of [<code>Label</code>](#Label)  
<a name="Connection"></a>

## Connection ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Category**: diagram-js  

* [Connection](#Connection) ⇐ [<code>Base</code>](#Base)
    * [new Connection()](#new_Connection_new)
    * [.source](#Connection+source) : [<code>Base</code>](#Base)
    * [.target](#Connection+target) : [<code>Base</code>](#Base)
    * [.businessObject](#Base+businessObject) : <code>Object</code>
    * [.label](#Base+label) : <code>Object</code>
    * [.parent](#Base+parent) : [<code>Shape</code>](#Shape)
    * [.labels](#Base+labels) : [<code>Label</code>](#Label)
    * [.outgoing](#Base+outgoing) : [<code>Array.&lt;Connection&gt;</code>](#Connection)
    * [.incoming](#Base+incoming) : [<code>Array.&lt;Connection&gt;</code>](#Connection)

<a name="new_Connection_new"></a>

### new Connection()
A connection between two elements

<a name="Connection+source"></a>

### connection.source : [<code>Base</code>](#Base)
The element this connection originates from

**Kind**: instance property of [<code>Connection</code>](#Connection)  
<a name="Connection+target"></a>

### connection.target : [<code>Base</code>](#Base)
The element this connection points to

**Kind**: instance property of [<code>Connection</code>](#Connection)  
<a name="Base+businessObject"></a>

### connection.businessObject : <code>Object</code>
The object that backs up the shape

**Kind**: instance property of [<code>Connection</code>](#Connection)  
<a name="Base+label"></a>

### connection.label : <code>Object</code>
Single label support, will mapped to multi label array

**Kind**: instance property of [<code>Connection</code>](#Connection)  
<a name="Base+parent"></a>

### connection.parent : [<code>Shape</code>](#Shape)
The parent shape

**Kind**: instance property of [<code>Connection</code>](#Connection)  
<a name="Base+labels"></a>

### connection.labels : [<code>Label</code>](#Label)
The list of labels

**Kind**: instance property of [<code>Connection</code>](#Connection)  
<a name="Base+outgoing"></a>

### connection.outgoing : [<code>Array.&lt;Connection&gt;</code>](#Connection)
The list of outgoing connections

**Kind**: instance property of [<code>Connection</code>](#Connection)  
<a name="Base+incoming"></a>

### connection.incoming : [<code>Array.&lt;Connection&gt;</code>](#Connection)
The list of incoming connections

**Kind**: instance property of [<code>Connection</code>](#Connection)  
<a name="Canvas"></a>

## Canvas
**Kind**: global class  
**Category**: diagram-js  
**Emits**: <code>Canvas#canvas.event:init</code>  

* [Canvas](#Canvas)
    * [new Canvas(config, eventBus, graphicsFactory, elementRegistry)](#new_Canvas_new)
    * [.getDefaultLayer()](#Canvas+getDefaultLayer) ⇒ <code>SVGElement</code>
    * [.getLayer(name, index)](#Canvas+getLayer) ⇒ <code>SVGElement</code>
    * [.showLayer(layer)](#Canvas+showLayer) ⇒ <code>SVGElement</code>
    * [.hideLayer(layer)](#Canvas+hideLayer) ⇒ <code>SVGElement</code>
    * [.getActiveLayer()](#Canvas+getActiveLayer) ⇒ <code>SVGElement</code> \| <code>null</code>
    * [.findRoot(element)](#Canvas+findRoot) ⇒ <code>djs.model.Base</code>
    * [.getRootElements()](#Canvas+getRootElements) ⇒ <code>Array.&lt;djs.model.Root&gt;</code>
    * [.getContainer()](#Canvas+getContainer) ⇒ <code>DOMNode</code>
    * [.addMarker(element, marker)](#Canvas+addMarker)
    * [.removeMarker(element, marker)](#Canvas+removeMarker)
    * [.hasMarker(element, marker)](#Canvas+hasMarker)
    * [.toggleMarker(element, marker)](#Canvas+toggleMarker)
    * [.getRootElement()](#Canvas+getRootElement) ⇒ <code>Object</code> \| <code>djs.model.Root</code> \| <code>null</code>
    * [.addRootElement(rootElement)](#Canvas+addRootElement) ⇒ <code>Object</code> \| <code>djs.model.Root</code>
    * [.removeRootElement(rootElement)](#Canvas+removeRootElement) ⇒ <code>Object</code> \| <code>djs.model.Root</code>
    * [.setRootElement(rootElement)](#Canvas+setRootElement) ⇒ <code>Object</code> \| <code>djs.model.Root</code>
    * [.addShape(shape, [parent], [parentIndex])](#Canvas+addShape) ⇒ <code>djs.model.Shape</code>
    * [.addConnection(connection, [parent], [parentIndex])](#Canvas+addConnection) ⇒ <code>djs.model.Connection</code>
    * [.removeShape(shape)](#Canvas+removeShape) ⇒ <code>djs.model.Shape</code>
    * [.removeConnection(connection)](#Canvas+removeConnection) ⇒ <code>djs.model.Connection</code>
    * [.getGraphics(element, [secondary])](#Canvas+getGraphics) ⇒ <code>SVGElement</code>
    * [.viewbox([box])](#Canvas+viewbox) ⇒ <code>Object</code>
    * [.scroll([delta])](#Canvas+scroll)
    * [.scrollToElement([element], [padding])](#Canvas+scrollToElement)
    * [.zoom([newScale], [center])](#Canvas+zoom) ⇒ <code>number</code>
    * [.getSize()](#Canvas+getSize) ⇒ <code>Dimensions</code>
    * [.getAbsoluteBBox(element)](#Canvas+getAbsoluteBBox) ⇒ <code>Bounds</code>
    * [.resized()](#Canvas+resized)

<a name="new_Canvas_new"></a>

### new Canvas(config, eventBus, graphicsFactory, elementRegistry)
The main drawing canvas.


| Param | Type |
| --- | --- |
| config | <code>Object</code> | 
| eventBus | <code>module:EventBus</code> | 
| graphicsFactory | <code>module:GraphicsFactory</code> | 
| elementRegistry | <code>module:ElementRegistry</code> | 

<a name="Canvas+getDefaultLayer"></a>

### canvas.getDefaultLayer() ⇒ <code>SVGElement</code>
Returns the default layer on which
all elements are drawn.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
<a name="Canvas+getLayer"></a>

### canvas.getLayer(name, index) ⇒ <code>SVGElement</code>
Returns a layer that is used to draw elements
or annotations on it.

Non-existing layers retrieved through this method
will be created. During creation, the optional index
may be used to create layers below or above existing layers.
A layer with a certain index is always created above all
existing layers with the same index.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| index | <code>number</code> | 

<a name="Canvas+showLayer"></a>

### canvas.showLayer(layer) ⇒ <code>SVGElement</code>
Shows a given layer.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type |
| --- | --- |
| layer | <code>String</code> | 

<a name="Canvas+hideLayer"></a>

### canvas.hideLayer(layer) ⇒ <code>SVGElement</code>
Hides a given layer.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type |
| --- | --- |
| layer | <code>String</code> | 

<a name="Canvas+getActiveLayer"></a>

### canvas.getActiveLayer() ⇒ <code>SVGElement</code> \| <code>null</code>
Returns the currently active layer. Can be null.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
<a name="Canvas+findRoot"></a>

### canvas.findRoot(element) ⇒ <code>djs.model.Base</code>
Returns the plane which contains the given element.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>djs.model.Base</code> - root for element  

| Param | Type |
| --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> | 

<a name="Canvas+getRootElements"></a>

### canvas.getRootElements() ⇒ <code>Array.&lt;djs.model.Root&gt;</code>
Return a list of all root elements on the diagram.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
<a name="Canvas+getContainer"></a>

### canvas.getContainer() ⇒ <code>DOMNode</code>
Returns the html element that encloses the
drawing canvas.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
<a name="Canvas+addMarker"></a>

### canvas.addMarker(element, marker)
Adds a marker to an element (basically a css class).

Fires the element.marker.update event, making it possible to
integrate extension into the marker life-cycle, too.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type |
| --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> | 
| marker | <code>string</code> | 

**Example**  
```js
canvas.addMarker('foo', 'some-marker');

const fooGfx = canvas.getGraphics('foo');

fooGfx; // <g class="... some-marker"> ... </g>
```
<a name="Canvas+removeMarker"></a>

### canvas.removeMarker(element, marker)
Remove a marker from an element.

Fires the element.marker.update event, making it possible to
integrate extension into the marker life-cycle, too.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type |
| --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> | 
| marker | <code>string</code> | 

<a name="Canvas+hasMarker"></a>

### canvas.hasMarker(element, marker)
Check the existence of a marker on element.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type |
| --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> | 
| marker | <code>string</code> | 

<a name="Canvas+toggleMarker"></a>

### canvas.toggleMarker(element, marker)
Toggles a marker on an element.

Fires the element.marker.update event, making it possible to
integrate extension into the marker life-cycle, too.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type |
| --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> | 
| marker | <code>string</code> | 

<a name="Canvas+getRootElement"></a>

### canvas.getRootElement() ⇒ <code>Object</code> \| <code>djs.model.Root</code> \| <code>null</code>
Returns the current root element.

Supports two different modes for handling root elements:

1. if no root element has been added before, an implicit root will be added
and returned. This is used in applications that don't require explicit
root elements.

2. when root elements have been added before calling `getRootElement`,
root elements can be null. This is used for applications that want to manage
root elements themselves.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>Object</code> \| <code>djs.model.Root</code> \| <code>null</code> - rootElement.  
<a name="Canvas+addRootElement"></a>

### canvas.addRootElement(rootElement) ⇒ <code>Object</code> \| <code>djs.model.Root</code>
Adds a given root element and returns it.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>Object</code> \| <code>djs.model.Root</code> - rootElement  

| Param | Type |
| --- | --- |
| rootElement | <code>Object</code> \| <code>djs.model.Root</code> | 

<a name="Canvas+removeRootElement"></a>

### canvas.removeRootElement(rootElement) ⇒ <code>Object</code> \| <code>djs.model.Root</code>
Removes a given rootElement and returns it.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>Object</code> \| <code>djs.model.Root</code> - rootElement  

| Param | Type |
| --- | --- |
| rootElement | <code>djs.model.Root</code> \| <code>String</code> | 

<a name="Canvas+setRootElement"></a>

### canvas.setRootElement(rootElement) ⇒ <code>Object</code> \| <code>djs.model.Root</code>
Sets a given element as the new root element for the canvas
and returns the new root element.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>Object</code> \| <code>djs.model.Root</code> - new root element  

| Param | Type |
| --- | --- |
| rootElement | <code>Object</code> \| <code>djs.model.Root</code> | 

<a name="Canvas+addShape"></a>

### canvas.addShape(shape, [parent], [parentIndex]) ⇒ <code>djs.model.Shape</code>
Adds a shape to the canvas

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>djs.model.Shape</code> - the added shape  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Object</code> \| <code>djs.model.Shape</code> | to add to the diagram |
| [parent] | <code>djs.model.Base</code> |  |
| [parentIndex] | <code>number</code> |  |

<a name="Canvas+addConnection"></a>

### canvas.addConnection(connection, [parent], [parentIndex]) ⇒ <code>djs.model.Connection</code>
Adds a connection to the canvas

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>djs.model.Connection</code> - the added connection  

| Param | Type | Description |
| --- | --- | --- |
| connection | <code>Object</code> \| <code>djs.model.Connection</code> | to add to the diagram |
| [parent] | <code>djs.model.Base</code> |  |
| [parentIndex] | <code>number</code> |  |

<a name="Canvas+removeShape"></a>

### canvas.removeShape(shape) ⇒ <code>djs.model.Shape</code>
Removes a shape from the canvas

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>djs.model.Shape</code> - the removed shape  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>string</code> \| <code>djs.model.Shape</code> | or shape id to be removed |

<a name="Canvas+removeConnection"></a>

### canvas.removeConnection(connection) ⇒ <code>djs.model.Connection</code>
Removes a connection from the canvas

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>djs.model.Connection</code> - the removed connection  

| Param | Type | Description |
| --- | --- | --- |
| connection | <code>string</code> \| <code>djs.model.Connection</code> | or connection id to be removed |

<a name="Canvas+getGraphics"></a>

### canvas.getGraphics(element, [secondary]) ⇒ <code>SVGElement</code>
Return the graphical object underlaying a certain diagram element

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> |  | descriptor of the element |
| [secondary] | <code>boolean</code> | <code>false</code> | whether to return the secondary connected element |

<a name="Canvas+viewbox"></a>

### canvas.viewbox([box]) ⇒ <code>Object</code>
Gets or sets the view box of the canvas, i.e. the
area that is currently displayed.

The getter may return a cached viewbox (if it is currently
changing). To force a recomputation, pass `false` as the first argument.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>Object</code> - the current view box  

| Param | Type | Description |
| --- | --- | --- |
| [box] | <code>Object</code> | the new view box to set |
| box.x | <code>number</code> | the top left X coordinate of the canvas visible in view box |
| box.y | <code>number</code> | the top left Y coordinate of the canvas visible in view box |
| box.width | <code>number</code> | the visible width |
| box.height | <code>number</code> |  |

**Example**  
```js
canvas.viewbox({ x: 100, y: 100, width: 500, height: 500 })

// sets the visible area of the diagram to (100|100) -> (600|100)
// and and scales it according to the diagram width

const viewbox = canvas.viewbox(); // pass `false` to force recomputing the box.

console.log(viewbox);
// {
//   inner: Dimensions,
//   outer: Dimensions,
//   scale,
//   x, y,
//   width, height
// }

// if the current diagram is zoomed and scrolled, you may reset it to the
// default zoom via this method, too:

const zoomedAndScrolledViewbox = canvas.viewbox();

canvas.viewbox({
  x: 0,
  y: 0,
  width: zoomedAndScrolledViewbox.outer.width,
  height: zoomedAndScrolledViewbox.outer.height
});
```
<a name="Canvas+scroll"></a>

### canvas.scroll([delta])
Gets or sets the scroll of the canvas.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type | Description |
| --- | --- | --- |
| [delta] | <code>Object</code> | the new scroll to apply. |
| [delta.dx] | <code>number</code> |  |
| [delta.dy] | <code>number</code> |  |

<a name="Canvas+scrollToElement"></a>

### canvas.scrollToElement([element], [padding])
Scrolls the viewbox to contain the given element.
Optionally specify a padding to be applied to the edges.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>Object</code> \| <code>String</code> |  | the element to scroll to. |
| [padding] | <code>Object</code> \| <code>Number</code> | <code>100</code> | the padding to be applied. Can also specify top, bottom, left and right. |

<a name="Canvas+zoom"></a>

### canvas.zoom([newScale], [center]) ⇒ <code>number</code>
Gets or sets the current zoom of the canvas, optionally zooming
to the specified position.

The getter may return a cached zoom level. Call it with `false` as
the first argument to force recomputation of the current level.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>number</code> - the current scale  

| Param | Type | Description |
| --- | --- | --- |
| [newScale] | <code>string</code> \| <code>number</code> | the new zoom level, either a number, i.e. 0.9,                                   or `fit-viewport` to adjust the size to fit the current viewport |
| [center] | <code>string</code> \| <code>Point</code> | the reference point { x: .., y: ..} to zoom to, 'auto' to zoom into mid or null |

<a name="Canvas+getSize"></a>

### canvas.getSize() ⇒ <code>Dimensions</code>
Returns the size of the canvas

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
<a name="Canvas+getAbsoluteBBox"></a>

### canvas.getAbsoluteBBox(element) ⇒ <code>Bounds</code>
Return the absolute bounding box for the given element

The absolute bounding box may be used to display overlays in the
callers (browser) coordinate system rather than the zoomed in/out
canvas coordinates.

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
**Returns**: <code>Bounds</code> - the absolute bounding box  

| Param | Type |
| --- | --- |
| element | <code>ElementDescriptor</code> | 

<a name="Canvas+resized"></a>

### canvas.resized()
Fires an event in order other modules can react to the
canvas resizing

**Kind**: instance method of [<code>Canvas</code>](#Canvas)  
<a name="ElementFactory"></a>

## ElementFactory
**Kind**: global class  
**Category**: diagram-js  

* [ElementFactory](#ElementFactory)
    * [new ElementFactory()](#new_ElementFactory_new)
    * [.createRoot(attrs)](#ElementFactory+createRoot) ⇒ [<code>Root</code>](#Root)
    * [.createLabel(attrs)](#ElementFactory+createLabel) ⇒ [<code>Label</code>](#Label)
    * [.createShape(attrs)](#ElementFactory+createShape) ⇒ [<code>Shape</code>](#Shape)
    * [.createConnection(attrs)](#ElementFactory+createConnection) ⇒ [<code>Connection</code>](#Connection)
    * [.create(type, attrs)](#ElementFactory+create) ⇒ [<code>Base</code>](#Base)

<a name="new_ElementFactory_new"></a>

### new ElementFactory()
A factory for diagram-js shapes.

<a name="ElementFactory+createRoot"></a>

### elementFactory.createRoot(attrs) ⇒ [<code>Root</code>](#Root)
Create root element.

**Kind**: instance method of [<code>ElementFactory</code>](#ElementFactory)  

| Param | Type |
| --- | --- |
| attrs | <code>Object</code> | 

<a name="ElementFactory+createLabel"></a>

### elementFactory.createLabel(attrs) ⇒ [<code>Label</code>](#Label)
Create label.

**Kind**: instance method of [<code>ElementFactory</code>](#ElementFactory)  

| Param | Type |
| --- | --- |
| attrs | <code>Object</code> | 

<a name="ElementFactory+createShape"></a>

### elementFactory.createShape(attrs) ⇒ [<code>Shape</code>](#Shape)
Create shape.

**Kind**: instance method of [<code>ElementFactory</code>](#ElementFactory)  

| Param | Type |
| --- | --- |
| attrs | <code>Object</code> | 

<a name="ElementFactory+createConnection"></a>

### elementFactory.createConnection(attrs) ⇒ [<code>Connection</code>](#Connection)
Create connection.

**Kind**: instance method of [<code>ElementFactory</code>](#ElementFactory)  

| Param | Type |
| --- | --- |
| attrs | <code>Object</code> | 

<a name="ElementFactory+create"></a>

### elementFactory.create(type, attrs) ⇒ [<code>Base</code>](#Base)
Create a model element with the given type and
a number of pre-set attributes.

**Kind**: instance method of [<code>ElementFactory</code>](#ElementFactory)  
**Returns**: [<code>Base</code>](#Base) - the newly created model instance  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 
| attrs | <code>Object</code> | 

<a name="ElementRegistry"></a>

## ElementRegistry
**Kind**: global class  
**Category**: diagram-js  

* [ElementRegistry](#ElementRegistry)
    * [new ElementRegistry()](#new_ElementRegistry_new)
    * [.add(element, gfx, [secondaryGfx])](#ElementRegistry+add)
    * [.remove(element)](#ElementRegistry+remove)
    * [.updateId(element, newId)](#ElementRegistry+updateId)
    * [.updateGraphics(element, gfx, [secondary])](#ElementRegistry+updateGraphics)
    * [.get(filter)](#ElementRegistry+get) ⇒ <code>djs.model.Base</code>
    * [.filter(fn)](#ElementRegistry+filter) ⇒ <code>Array.&lt;djs.model.Base&gt;</code>
    * [.find(fn)](#ElementRegistry+find) ⇒ <code>djs.model.Base</code>
    * [.getAll()](#ElementRegistry+getAll) ⇒ <code>Array.&lt;djs.model.Base&gt;</code>
    * [.forEach(fn)](#ElementRegistry+forEach)
    * [.getGraphics(filter, [secondary])](#ElementRegistry+getGraphics) ⇒ <code>SVGElement</code>

<a name="new_ElementRegistry_new"></a>

### new ElementRegistry()
A registry that keeps track of all shapes in the diagram.

<a name="ElementRegistry+add"></a>

### elementRegistry.add(element, gfx, [secondaryGfx])
Register a pair of (element, gfx, (secondaryGfx)).

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>djs.model.Base</code> |  |
| gfx | <code>SVGElement</code> |  |
| [secondaryGfx] | <code>SVGElement</code> | optional other element to register, too |

<a name="ElementRegistry+remove"></a>

### elementRegistry.remove(element)
Removes an element from the registry.

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type |
| --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> | 

<a name="ElementRegistry+updateId"></a>

### elementRegistry.updateId(element, newId)
Update the id of an element

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type |
| --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> | 
| newId | <code>string</code> | 

<a name="ElementRegistry+updateGraphics"></a>

### elementRegistry.updateGraphics(element, gfx, [secondary])
Update the graphics of an element

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>string</code> \| <code>djs.model.Base</code> |  |  |
| gfx | <code>SVGElement</code> |  |  |
| [secondary] | <code>boolean</code> | <code>false</code> | whether to update the secondary connected element |

<a name="ElementRegistry+get"></a>

### elementRegistry.get(filter) ⇒ <code>djs.model.Base</code>
Return the model element for a given id or graphics.

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>string</code> \| <code>SVGElement</code> | for selecting the element |

**Example**  
```js
elementRegistry.get('SomeElementId_1');
elementRegistry.get(gfx);
```
<a name="ElementRegistry+filter"></a>

### elementRegistry.filter(fn) ⇒ <code>Array.&lt;djs.model.Base&gt;</code>
Return all elements that match a given filter function.

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="ElementRegistry+find"></a>

### elementRegistry.find(fn) ⇒ <code>djs.model.Base</code>
Return the first element that satisfies the provided testing function.

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="ElementRegistry+getAll"></a>

### elementRegistry.getAll() ⇒ <code>Array.&lt;djs.model.Base&gt;</code>
Return all rendered model elements.

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  
<a name="ElementRegistry+forEach"></a>

### elementRegistry.forEach(fn)
Iterate over all diagram elements.

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="ElementRegistry+getGraphics"></a>

### elementRegistry.getGraphics(filter, [secondary]) ⇒ <code>SVGElement</code>
Return the graphical representation of an element or its id.

**Kind**: instance method of [<code>ElementRegistry</code>](#ElementRegistry)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filter | <code>string</code> \| <code>djs.model.Base</code> |  |  |
| [secondary] | <code>boolean</code> | <code>false</code> | whether to return the secondary connected element |

**Example**  
```js
elementRegistry.getGraphics('SomeElementId_1');
elementRegistry.getGraphics(rootElement); // <g ...>

elementRegistry.getGraphics(rootElement, true); // <svg ...>
```
<a name="EventBus"></a>

## EventBus
**Kind**: global class  
**Category**: diagram-js  

* [EventBus](#EventBus)
    * [new EventBus()](#new_EventBus_new)
    * [.on(events, [priority], callback, [that])](#EventBus+on)
    * [.once(event, [priority], callback, [that])](#EventBus+once)
    * [.off(events, [callback])](#EventBus+off)
    * [.createEvent(data)](#EventBus+createEvent) ⇒ <code>Object</code>
    * [.fire([name], [event], ...additional)](#EventBus+fire) ⇒ <code>boolean</code>

<a name="new_EventBus_new"></a>

### new EventBus()
A general purpose event bus.

This component is used to communicate across a diagram instance.
Other parts of a diagram can use it to listen to and broadcast events.


## Registering for Events

The event bus provides the [on](#EventBus+on) and [once](#EventBus+once)
methods to register for events. [off](#EventBus+off) can be used to
remove event registrations. Listeners receive an instance of [Event](Event)
as the first argument. It allows them to hook into the event execution.

```javascript

// listen for event
eventBus.on('foo', function(event) {

  // access event type
  event.type; // 'foo'

  // stop propagation to other listeners
  event.stopPropagation();

  // prevent event default
  event.preventDefault();
});

// listen for event with custom payload
eventBus.on('bar', function(event, payload) {
  console.log(payload);
});

// listen for event returning value
eventBus.on('foobar', function(event) {

  // stop event propagation + prevent default
  return false;

  // stop event propagation + return custom result
  return {
    complex: 'listening result'
  };
});


// listen with custom priority (default=1000, higher is better)
eventBus.on('priorityfoo', 1500, function(event) {
  console.log('invoked first!');
});


// listen for event and pass the context (`this`)
eventBus.on('foobar', function(event) {
  this.foo();
}, this);
```


## Emitting Events

Events can be emitted via the event bus using [fire](#EventBus+fire).

```javascript

// false indicates that the default action
// was prevented by listeners
if (eventBus.fire('foo') === false) {
  console.log('default has been prevented!');
};


// custom args + return value listener
eventBus.on('sum', function(event, a, b) {
  return a + b;
});

// you can pass custom arguments + retrieve result values.
var sum = eventBus.fire('sum', 1, 2);
console.log(sum); // 3
```

<a name="EventBus+on"></a>

### eventBus.on(events, [priority], callback, [that])
Register an event listener for events with the given name.

The callback will be invoked with `event, ...additionalArguments`
that have been passed to [fire](#EventBus+fire).

Returning false from a listener will prevent the events default action
(if any is specified). To stop an event from being processed further in
other listeners execute [Event#stopPropagation](Event#stopPropagation).

Returning anything but `undefined` from a listener will stop the listener propagation.

**Kind**: instance method of [<code>EventBus</code>](#EventBus)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| events | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  |  |
| [priority] | <code>number</code> | <code>1000</code> | the priority in which this listener is called, larger is higher |
| callback | <code>function</code> |  |  |
| [that] | <code>Object</code> |  | Pass context (`this`) to the callback |

<a name="EventBus+once"></a>

### eventBus.once(event, [priority], callback, [that])
Register an event listener that is executed only once.

**Kind**: instance method of [<code>EventBus</code>](#EventBus)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | the event name to register for |
| [priority] | <code>number</code> | <code>1000</code> | the priority in which this listener is called, larger is higher |
| callback | <code>function</code> |  | the callback to execute |
| [that] | <code>Object</code> |  | Pass context (`this`) to the callback |

<a name="EventBus+off"></a>

### eventBus.off(events, [callback])
Removes event listeners by event and callback.

If no callback is given, all listeners for a given event name are being removed.

**Kind**: instance method of [<code>EventBus</code>](#EventBus)  

| Param | Type |
| --- | --- |
| events | <code>string</code> \| <code>Array.&lt;string&gt;</code> | 
| [callback] | <code>function</code> | 

<a name="EventBus+createEvent"></a>

### eventBus.createEvent(data) ⇒ <code>Object</code>
Create an EventBus event.

**Kind**: instance method of [<code>EventBus</code>](#EventBus)  
**Returns**: <code>Object</code> - event, recognized by the eventBus  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="EventBus+fire"></a>

### eventBus.fire([name], [event], ...additional) ⇒ <code>boolean</code>
Fires a named event.

**Kind**: instance method of [<code>EventBus</code>](#EventBus)  
**Returns**: <code>boolean</code> - the events return value, if specified or false if the
                  default action was prevented by listeners  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | the optional event name |
| [event] | <code>Object</code> | the event object |
| ...additional | <code>Object</code> | arguments to be passed to the callback functions |

**Example**  
```js
// fire event by name
events.fire('foo');

// fire event object with nested type
var event = { type: 'foo' };
events.fire(event);

// fire event with explicit type
var event = { x: 10, y: 20 };
events.fire('element.moved', event);

// pass additional arguments to the event
events.on('foo', function(event, bar) {
  alert(bar);
});

events.fire({ type: 'foo' }, 'I am bar!');
```
<a name="GraphicsFactory"></a>

## GraphicsFactory
**Kind**: global class  
**Category**: diagram-js  
<a name="new_GraphicsFactory_new"></a>

### new GraphicsFactory(eventBus, elementRegistry)
A factory that creates graphical elements


| Param | Type |
| --- | --- |
| eventBus | [<code>EventBus</code>](#EventBus) | 
| elementRegistry | [<code>ElementRegistry</code>](#ElementRegistry) | 

<a name="diagram-js:Modeling"></a>

## Modeling
**Kind**: global class  
**Category**: diagram-js  

* [Modeling](#diagram-js:Modeling)
    * [new Modeling(eventBus, elementFactory, commandStack)](#new_Modeling_new)
    * [new Modeling(eventBus, elementFactory, commandStack, bpmnRules)](#new_Modeling_new)
    * [.registerHandlers(commandStack)](#Modeling+registerHandlers)
    * [.moveShape(shape, delta, newParent, newParentIndex, hints)](#Modeling+moveShape)
    * [.updateAttachment(shape, [newHost])](#Modeling+updateAttachment)
    * [.moveElements(shapes, delta, [target], [hints])](#Modeling+moveElements)
    * [.createConnection(source, target, [parentIndex], connection, parent, hints)](#Modeling+createConnection) ⇒ <code>djs.model.Connection</code>
    * [.createShape(shape, position, target, [parentIndex], [hints])](#Modeling+createShape) ⇒ <code>djs.model.Shape</code>
    * [.appendShape(source, shape, position, target, [hints])](#Modeling+appendShape) ⇒ <code>djs.model.Shape</code>
    * [.makeCollaboration()](#Modeling+makeCollaboration) ⇒ <code>djs.model.Root</code>
    * [.makeProcess()](#Modeling+makeProcess) ⇒ <code>djs.model.Root</code>

<a name="new_Modeling_new"></a>

### new Modeling(eventBus, elementFactory, commandStack)
The basic modeling entry point.


| Param | Type |
| --- | --- |
| eventBus | <code>module:EventBus</code> | 
| elementFactory | <code>module:ElementFactory</code> | 
| commandStack | <code>undefined</code> | 

<a name="new_Modeling_new"></a>

### new Modeling(eventBus, elementFactory, commandStack, bpmnRules)
BPMN 2.0 modeling features activator


| Param | Type |
| --- | --- |
| eventBus | <code>module:diagram-js/lib/core/EventBus</code> | 
| elementFactory | <code>undefined</code> | 
| commandStack | <code>module:diagram-js/lib/core/CommandStack</code> | 
| bpmnRules | <code>undefined</code> | 

<a name="Modeling+registerHandlers"></a>

### modeling.registerHandlers(commandStack)
Register handlers with the command stack

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  

| Param | Type |
| --- | --- |
| commandStack | <code>CommandStack</code> | 

<a name="Modeling+moveShape"></a>

### modeling.moveShape(shape, delta, newParent, newParentIndex, hints)
Move shape.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  

| Param | Type |
| --- | --- |
| shape | [<code>Shape</code>](#Shape) | 
| delta | <code>Object</code> | 
| newParent | [<code>Shape</code>](#Shape) | 
| newParentIndex | <code>number</code> | 
| hints | <code>Object</code> | 

<a name="Modeling+updateAttachment"></a>

### modeling.updateAttachment(shape, [newHost])
Update the attachment of the given shape.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  

| Param | Type |
| --- | --- |
| shape | <code>djs.mode.Base</code> | 
| [newHost] | <code>djs.model.Base</code> | 

<a name="Modeling+moveElements"></a>

### modeling.moveElements(shapes, delta, [target], [hints])
Move a number of shapes to a new target, either setting it as
the new parent or attaching it.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  

| Param | Type | Default |
| --- | --- | --- |
| shapes | <code>Array.&lt;djs.mode.Base&gt;</code> |  | 
| delta | <code>Point</code> |  | 
| [target] | <code>djs.model.Base</code> |  | 
| [hints] | <code>Object</code> |  | 
| [hints.attach] | <code>boolean</code> | <code>false</code> | 

<a name="Modeling+createConnection"></a>

### modeling.createConnection(source, target, [parentIndex], connection, parent, hints) ⇒ <code>djs.model.Connection</code>
Create connection.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Connection</code> - the created connection.  

| Param | Type |
| --- | --- |
| source | <code>djs.model.Base</code> | 
| target | <code>djs.model.Base</code> | 
| [parentIndex] | <code>number</code> | 
| connection | <code>Object</code> \| <code>djs.model.Connection</code> | 
| parent | <code>djs.model.Base</code> | 
| hints | <code>Object</code> | 

<a name="Modeling+createShape"></a>

### modeling.createShape(shape, position, target, [parentIndex], [hints]) ⇒ <code>djs.model.Shape</code>
Create a shape at the specified position.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Shape</code> - the created shape  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>djs.model.Shape</code> \| <code>Object</code> |  |
| position | <code>Point</code> |  |
| target | <code>djs.model.Shape</code> \| <code>djs.model.Root</code> |  |
| [parentIndex] | <code>number</code> | position in parents children list |
| [hints] | <code>Object</code> |  |
| [hints.attach] | <code>boolean</code> | whether to attach to target or become a child |

<a name="Modeling+appendShape"></a>

### modeling.appendShape(source, shape, position, target, [hints]) ⇒ <code>djs.model.Shape</code>
Append shape to given source, drawing a connection
between source and the newly created shape.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Shape</code> - the newly created shape  

| Param | Type |
| --- | --- |
| source | <code>djs.model.Shape</code> | 
| shape | <code>djs.model.Shape</code> \| <code>Object</code> | 
| position | <code>Point</code> | 
| target | <code>djs.model.Shape</code> | 
| [hints] | <code>Object</code> | 
| [hints.attach] | <code>boolean</code> | 
| [hints.connection] | <code>djs.model.Connection</code> \| <code>Object</code> | 
| [hints.connectionParent] | <code>djs.model.Base</code> | 

<a name="Modeling+makeCollaboration"></a>

### modeling.makeCollaboration() ⇒ <code>djs.model.Root</code>
Transform the current diagram into a collaboration.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Root</code> - the new root element  
<a name="Modeling+makeProcess"></a>

### modeling.makeProcess() ⇒ <code>djs.model.Root</code>
Transform the current diagram into a process.

**Kind**: instance method of [<code>Modeling</code>](#bpmn-js:Modeling)  
**Returns**: <code>djs.model.Root</code> - the new root element  
