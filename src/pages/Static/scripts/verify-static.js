const fs = require('fs');
const path = require('path');
const { statesList } = require('../src/utils/states');

function verifyStaticBuild() {
  const distPath = path.join(__dirname, '../dist');
  const designersPath = path.join(distPath, 'designers');
  
  console.log('Verifying static build...\n');
  
  // Check if dist directory exists
  if (!fs.existsSync(distPath)) {
    console.error('❌ dist directory not found. Run npm run build first.');
    process.exit(1);
  }

  // Check if designers directory exists
  if (!fs.existsSync(designersPath)) {
    console.error('❌ designers directory not found in dist.');
    process.exit(1);
  }

  // Check for state HTML files
  let allStatesFound = true;
  statesList.forEach(state => {
    const stateFile = path.join(designersPath, `${state.slug}.html`);
    if (fs.existsSync(stateFile)) {
      console.log(`✅ Found static page for ${state.name}`);
      
      // Check if file contains static content
      const content = fs.readFileSync(stateFile, 'utf8');
      if (!content.includes(`Interior Designers in ${state.name}`)) {
        console.warn(`⚠️ Warning: ${state.name} page might not be properly static`);
      }
    } else {
      console.error(`❌ Missing static page for ${state.name}`);
      allStatesFound = false;
    }
  });

  if (allStatesFound) {
    console.log('\n✅ All state pages generated successfully!');
  } else {
    console.error('\n❌ Some state pages are missing.');
    process.exit(1);
  }
}

verifyStaticBuild();