const fs = require('fs-extra');

async function deploy() {
  try {
    // Remove existing files from root
    await fs.emptyDir('./');

    // Copy files from the build folder to the root
    await fs.copy('./build', './');

    console.log('Deployment completed successfully!');
  } catch (err) {
    console.error('Deployment failed:', err);
  }
}

deploy();
