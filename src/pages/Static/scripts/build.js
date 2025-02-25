// scripts/build.js
const { execSync } = require('child_process');

async function buildProject() {
  try {
    console.log('🔍 Step 1: Prefetching data from Firebase...');
    execSync('node scripts/prefetchFirebaseData.js', { stdio: 'inherit' });
    
    console.log('🏗️ Step 2: Building the React application...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('🔮 Step 3: Running pre-render for static pages...');
    execSync('node src/pages/Static/scripts/prerender.mjs', { stdio: 'inherit' });
    
    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildProject();