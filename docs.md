#Thoughts on the SDX ramp up experience

##Notes of SDX tutorial
Link broke to Office JS doc.
Missing npm run build instruction under "Setup the development environment for React-Native SDXes"

##Setting up a development environment
One note Julio and I agreed upon is the tutorial series doesn't really help explain the SDX development workflow; it appears to suggest that we simply modify tutorial packages within the Fabric Internal repo and doesn't walk through creating an empty project from scratch.
- Line 126 of the manifest - how the heck are you supposed to work collaboratively on an SDX if the manifest has a full path required?? (e.g. "C:/Users/danwilso/dev/fabric-internal/packages/sdx_helloworld/dist/win32/ship/bundle.js")
- Also needed to change the package.json file
- How do you get a new GUID??
- The README.md file tells you to authenticate npm for access to MSFT private node repos, but it's not written in the docs.
- Running NPM install takes a LONG time - this is not conducive to getting started quickly
- Kept running into this error:
> "Module not found: Error: Can't resolve 'office-ui-fabric-react/lib/Button' in 'C:\Users\danwilso\dev\fabric-internal\packages\sdx_betterstyles\node_modules\@office-iss\polyester\lib\web\CommandButton'"
- OHHH... you need to run npm install from the root folder of fabric-internal, not a sub project. We were missing things like rush and the npm private auth.
- I don't care about having all the packages/shared components at the beginning - why should I have to sit here waiting for npm to install ALL of their dependencies?
- That means you cannot even start your own SDX without depending directly on fabric-internal... wtf man.

##Bugs
###Avoiding broken add-in after running npm run sideload
Before running npm run sideload, you must:
- Rename file under /fabric-internal/packages/sdx_helloworld/dist/win32/ship/index.win32.bundle to bundle.js
- **This file gets generated everytime after doing a 'npm run build', needs to be renamed again**
- Run commands:
- rm bundle.js
- mv ./dist/win32/ship/index.win32.bundle ./dist/win32/ship/bundle.js
