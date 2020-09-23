---
layout: default
title: "Getting Started With bpmn-js"
nav_order: 2
description: "Getting started with bpmn-js"
permalink: /general/getting-started/bpmn-js
last_modified_date: 2020-04-27T17:54:08+0000
parent: "Getting Started"
grand_parent: "General"
---

# Getting Started With bpmn-js

bpmn-js is a [BPMN 2.0](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) rendering toolkit and web modeler. It is written in JavaScript, embeds BPMN 2.0 diagrams into modern browsers and requires no server backend. That's why it is easy to embed it into any web application.

Feel free to play with it [on our demo playground](https://demo.bpmn.io/s/start).

![image](/assets/images/bpmn-start.gif)

bpmn-js can be included in any application with:

* an [all-in-one pre-packaged version of the library](https://unpkg.com/browse/bpmn-js/dist/)
* the [npm](http://npmjs.com/package/bpmn-js) version, which gives you access to individual library components and allows for easier extensibility

## Including the Container

bpmn-js requires a container DOM element (for instance, a simple DIV element) on which the rendering is performed. Simply create the container DOM element in the HTML file:

```html
<!-- BPMN diagram container -->
<div id="canvas"></div>
```

Here, an ID is given to the container DOM element since an ID will be necessary to select this component and pass to bpmn-js later on.

## Including the Stylesheet

Include [diagram-js](/general/getting-started/diagram-js) CSS and [BPMN Icon Font](https://github.com/bpmn-io/bpmn-font) in order to ensure that everything looks good. There're several ways this can be achieved:

### Option 1

Include the CSS via `link` tag in the HTML file. Note that these CSS files are shipped with with the bpmn-js distribution under [dist/assets folder](https://unpkg.com/browse/bpmn-js/dist/assets/).

```html
<link rel="stylesheet" href="bpmn-js/dist/assets/diagram-js.css" />
<link rel="stylesheet" href="bpmn-js/dist/assets/bpmn-font/css/bpmn.css" />
```

### Option 2

If you have install the bpmn-js via [NPM](#including-via-npm), you can additionally include these CSS files using `import` statement in the Javascript file:

```javascript
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
```

## bpmn-js Use Cases

bpmn-js can be used either as:

* [a modeler](#using-bpmn-js-as-modeler) to create BPMN 2.0 diagrams
* [a viewer](#using-bpmn-js-as-viewer) to view BPMN 2.0 diagrams
* [a vavigated viewer](#using-bpmn-js-as-viewer) to view BPMN 2.0 diagrams and navigate through them


### Using bpmn-js as Viewer

bpmn-js may be used as a viewer. In that case the user would not be able to interact with the diagram to modify the existing BPMN 2.0 XML, but would only be able to view it. In addition to viewer, bpmn-js offers a navigated viewer which enables [move-keyboard](/modules/common-modules/keyboard-move), [move-canvas](/modules/common-modules/move-canvas) and [zoom-scroll](/modules/common-modules/zoom-scroll) [modules](/modules/adding-customizing-removing) by default.

#### Including the Pre-packaged Version

For the pre-packaged version, include the bpmn-js viewer via HTML script tag:

```html
<!-- Feel free to replace the CDN url with local bpmn-js path if necessary -->
<script src="https://unpkg.com/bpmn-js/dist/bpmn-viewer.production.min.js"></script>
```

or for the navigated viewer:

```html
<!-- Feel free to replace the CDN url with local bpmn-js path if necessary -->
<script src="https://unpkg.com/bpmn-js/dist/bpmn-navigated-viewer.production.min.js"></script>
```

#### Including via NPM

First, install bpmn-js via NPM:
```
npm install bpmn-js
```

Once bpmn-js is installed, import the BPMN viewer as an ES module:

```javascript
import Viewer from 'bpmn-js/lib/Viewer';
```

or for the navigated viewer:

```javascript
import NavigatedViewer from 'bpmn-js/lib/NavigatedViewer';
```

#### Import a BPMN 2.0 Diagram

After the setup process, construct a new bpmn-js Viewer instance. If you have imported bpmn-js as pre-packaged, you should use the `BpmnJS` constructor:

```javascript
const viewer = new BpmnJS({ container: '#canvas' });
```

if you have imported the bpmn-js via NPM, you should go for the `Viewer` constructor instead:
```javascript
const viewer = new Viewer({ container: '#canvas' });
```

or for the navigated viewer:
```javascript
const viewer = new NavigatedViewer({ container: '#canvas' });
```

Note that `#canvas` here refers to the [container DOM element in the HTML file](#including-the-container).

Then import a BPMN 2.0 XML using the [importXML API](/general/api-reference/bpmn-js/importXML). For this demo, you can use this simple BPMN file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0xcv3nk" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="3.0.0">
  <bpmn:process id="Process_0sckl64" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0sckl64">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="159" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
```

You can directly set this to a variable or you can store this file somewhere and fetch it. For simplicity, this topic won't be covered here.

```javascript
const xml = ' ... '; // This variable contains the XML content above.

try {

  await viewer.importXML(xml);

  console.log('XML imported successfully');
} catch (err) {

  console.log('An error happened importing XML:', err);
}
```

#### Putting It All Together

See this [Sandbox](https://codesandbox.io/s/quizzical-waterfall-8ffif?file=/src/index.js).

### Using bpmn-js as Modeler

bpmn-js modeler extends the functionality of the [viewer](#using-bpmn-js-as-viewer) by allowing users to interact with the diagram on the canvas and add/remove/edit BPMN elements via a graphical interface. A live example of bpmn-js modeler can be found [in the demo website.](https://demo.bpmn.io/new)

#### Including the Pre-packaged Version

For the pre-packaged version, include the bpmn-js modeler via HTML script tag:

```html
<!-- Feel free to replace the CDN url with local bpmn-js path if necessary -->
<script src="https://unpkg.com/bpmn-js/dist/bpmn-modeler.production.min.js"></script>
```

#### Including via NPM

First, install bpmn-js via NPM:
```
npm install bpmn-js
```

Then, import the BPMN modeler as an ES module:

```javascript
import Modeler from 'bpmn-js/lib/Modeler';
```

#### Instantiating the Modeler

Just like the viewer, you need to create an instance of bpmn-js modeler after the setup.

If you have imported the bpmn-js pre-packaged:
```javascript
const modeler = new BpmnJS({ container: '#canvas' });
```

if youve imported the bpmn-js via NPM, use the `Modeler` constructor instead:
```javascript
const modeler = new Modeler({ container: '#canvas' });
```

Just like the viewer, you need to import an initial XML to get the modeler going. You can use the same BPMN file above:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0xcv3nk" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="3.0.0">
  <bpmn:process id="Process_0sckl64" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0sckl64">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="159" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
```

```javascript
const xml = ' ... '; // This variable contains the XML content above.

try {

  await modeler.importXML(xml);

  console.log('Modeler is ready');
} catch (err) {

  console.log('An error happened importing XML:', err);
}
```

#### Putting It All Together

See this [Sandbox](https://codesandbox.io/s/quiet-pine-182uh?file=/src/index.js).

## Dynamic Attaching/Detaching

bpmn-js allows attaching the viewer/modeler dynamically via [attachTo API](/general/api-reference/bpmn-js/attachTo) to any DOM element:

```javascript
// bpmnJS is an instance of Modeler or a Viewer

bpmnJS.attachTo('#some-other-element');
```

You can also detach it from any element via [detach API](/general/api-reference/bpmn-js/detach):

```javascript
bpmnJS.detach();
```

## Going Further

bpmn-js offers much more than what is covered here. Check these pages out in order to go further with this library:

* [Components of bpmn-js](/general/components)
* [bpmn-js Examples](/examples/bpmn)
* [Working With Business Objects](/general/working-with-business-objects)
* [Working With Commands](/general/working-with-commands)
* [Working With Events](/general/working-with-events)
* [Working With Labels](/general/working-with-labels)
* [Working With Modules](/general/working-with-modules)
