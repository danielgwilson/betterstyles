Notes of SDX tutorial: 
Link broke to Office JS doc.
Missing npm run build instruction under "Setup the development environment for React-Native SDXes"

Bug:
Rename file under /fabric-internal/packages/sdx_helloworld/dist/win32/ship/index.win32.bundle to bundle.js
** This file gets generated everytime after doing a 'npm run build', needs to be renamed again **
Run commands:
rm bundle.js
mv index.win32.bundle bundle.js