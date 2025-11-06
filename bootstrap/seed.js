const { execSync } = require('child_process');
execSync('npm run migrate', { stdio: 'inherit' });
execSync('npm run seed', { stdio: 'inherit' });
console.log("Base pronta.");
