#Thoughts on the SDX ramp up experience

##Notes of SDX tutorial
Link broke to Office JS doc.
Missing npm run build instruction under "Setup the development environment for React-Native SDXes"

##Setting up a development environment
One note Julio and I agreed upon is the tutorial series doesn't really help explain the SDX development workflow; it appears to suggest that we simply modify tutorial packages within the Fabric Internal repo and doesn't walk through creating an empty project from scratch.

##Bugs
Rename file under /fabric-internal/packages/sdx_helloworld/dist/win32/ship/index.win32.bundle to bundle.js
**This file gets generated everytime after doing a 'npm run build', needs to be renamed again**
Run commands:
rm bundle.js
mv index.win32.bundle bundle.js