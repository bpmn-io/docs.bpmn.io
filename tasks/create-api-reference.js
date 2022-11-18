const fs = require('fs');
const path = require('path');

const jsdoc2md = require('jsdoc-to-markdown');

(async () => {
  const options = {
    // template,
    configure: path.resolve(__dirname, './config.json'),
    files: [
      path.resolve(__dirname, '../node_modules/diagram-js/lib/model/index.js'),
      path.resolve(__dirname, '../node_modules/diagram-js/lib/core/*.js'),
      path.resolve(__dirname, '../node_modules/diagram-js/lib/features/modeling/Modeling.js'),
      path.resolve(__dirname, '../node_modules/bpmn-js/lib/features/modeling/Modeling.js')
    ],
    helper: path.resolve(__dirname, './helper/**/*.js'),
    partial: path.resolve(__dirname, './partial/**/*.hbs'),
    'global-index-format': 'dl' // none, grouped, table, dl
  };

  // (1) .js ➡️ JSDoc data
  const jsdocData = await jsdoc2md.getJsdocData(options);

  // console.log('jsdoc data', JSON.stringify(jsdocData, null, 2));

  fs.writeFileSync(path.resolve(__dirname, '../jsdocData.json'), JSON.stringify(jsdocData, null, 2));

  // (2) JSDoc data ➡️ template data
  const templateData = await jsdoc2md.getTemplateData(options);

  fs.writeFileSync(path.resolve(__dirname, '../templateData.json'), JSON.stringify(templateData, null, 2));

  // (3) template data ➡️ https://github.com/jsdoc2md/dmd ➡️ .md
  const markdown = jsdoc2md.renderSync(options);

  // console.log('markdown', markdown);

  fs.writeFileSync(path.resolve(__dirname, '../docs/api.md'), markdown);
})();