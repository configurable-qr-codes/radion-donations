const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const fs = require('fs');

const ajv = new Ajv();
addFormats(ajv);

const schema = JSON.parse(fs.readFileSync('config.schema.json', 'utf-8'));
const validate = ajv.compile(schema);
let config;

try {
  config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));
} catch (err) {
  console.error(`ERROR: config.json contains invalid JSON:`, err.message);
  process.exit(1);
}

const valid = validate(config);

if (!valid) {
  console.error('ERROR: Invalid configuration in config.json:\n', validate.errors.map(error => ` - ${error.instancePath} ${error.message}`).join("\n"));
  process.exit(1);
}

console.log(`config.json file is valid!`);
