const util = require('util');

const {
  _identifier,
  isExternal,
  parseLink
} = require('dmd/helpers/ddata');

/**
 * @philippfromme
 * Helper that takes `alias` into account.
 */

/**
 * e.g. namepaths `module:Something` or type expression `Array.<module:Something>`
 * @static
 * @param {string} - namepath or type expression
 * @param {object} - the handlebars helper options object
 */
function _link(input, options) {
  if (typeof input !== 'string') return null

  var linked, matches, namepath
  var output = {}

  /*
  test input for
  1. A type expression containing a namepath, e.g. Array.<module:Something>
  2. a namepath referencing an `id`
  3. a namepath referencing a `longname`
  */
  if ((matches = input.match(/.*?<(.*?)>/))) {
    namepath = matches[1]
  } else {
    namepath = input
  }

  options.hash = { id: namepath }
  linked = _identifier(options)
  if (!linked) {
    options.hash = { longname: namepath }
    linked = _identifier(options)
  }

  if (!linked) {
    options.hash = { alias: namepath }
    linked = _identifier(options)
  }

  if (!linked) {
    output = { name: input, url: null }
  } else {
    output.name = input.replace(namepath, linked.name)
    if (isExternal.call(linked)) {
      if (linked.description) {
        output.url = '#' + anchorName.call(linked, options)
      } else {
        if (linked.see && linked.see.length) {
          var firstLink = parseLink(linked.see[0])[0]
          output.url = firstLink ? firstLink.url : linked.see[0]
        } else {
          output.url = null
        }
      }
    } else {
      output.url = '#' + anchorName.call(linked, options)
    }
  }
  return output
}

/**
returns a unique ID string suitable for use as an `href`.
@this {identifier}
@returns {string}
@static
@category Returns string
@example
```js
> ddata.anchorName.call({ id: "module:yeah--Yeah()" })
'module_yeah--Yeah_new'
```
*/
function anchorName(options) {
  if (!this.id) throw new Error('[anchorName helper] cannot create a link without a id: ' + JSON.stringify(this))
  if (this.inherited) {
    options.hash.id = this.inherits
    var inherits = _identifier(options)
    if (inherits) {
      return anchorName.call(inherits, options)
    } else {
      return ''
    }
  }

  return util.format(
    '%s%s%s',
    this.isExported ? 'exp_' : '',
    this.kind === 'constructor' ? 'new_' : '',
    this.alias || this.id
      .replace(/:/g, '_')
      .replace(/~/g, '..')
      .replace(/\(\)/g, '_new')
      .replace(/#/g, '+')
  )
}

/**
 * @param id {string} - the ID to link to, e.g. `external:XMLHttpRequest`, `GlobalClass#propOne` etc.
 * @static
 * @category Block helper: util
 * @example
 * {{#link "module:someModule.property"~}}
 *   {{name}} {{!-- prints 'property' --}}
 *   {{url}}  {{!-- prints 'module-someModule-property' --}}
 * {{/link}}
 */
function link (longname, options) {
  return options.fn(_link(longname, options))
}

exports.anchorName = anchorName;
exports.link = link;