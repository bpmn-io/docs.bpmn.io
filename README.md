# docs.bpmn.io :notebook:
Welcome to docs.bpmn.io. This repository contains documentation for:

 - diagram-js
 - bpmn-js
 - dmn-js

libraries.

## Running Locally
This repository is based on [Jekyll](https://jekyllrb.com/) and hosted via [Github Pages](https://bpmn-io.github.io/docs.bpmn.io/). To run locally:

Install bundler if not installed before:
```shell
gem install bundler jekyll
```

Run the website:
```shell
bundle exec jekyll serve
```
This should take couple of minutes until the page is built and served in http://localhost:4000/docs.bpmn.io/

**Note about search**

Pages added & removed from the docs should automatically be handled, so no need to do extra steps in order to take care of search functionality.

## Playing With Colors :art:

These color variables may be modified to achieve custom themes inside [bpmn-io.scss](https://github.com/bpmn-io/docs.bpmn.io/blob/master/_sass/color_schemes/bpmn-io.scss):

```
    $body-background-color
    $sidebar-color
    $border-color

    $body-text-color
    $body-heading-color
    $nav-child-link-color
    $search-result-preview-color

    $link-color
    $btn-primary-color
    $base-button-color

    $code-background-color
    $search-background-color
    $table-background-color
    $feedback-color
```
