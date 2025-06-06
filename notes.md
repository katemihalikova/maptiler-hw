# Project scaffolding

Quick and easy by using Vite scaffolding with vanilla-ts template:

```sh
npm create vite@latest maptiler-hw -- --template vanilla-ts
```

# Adding MapTiler SDK

First, I install the package:

```sh
npm i @maptiler/sdk
```

Then, I copy the basic example from [SDK JS Examples](https://docs.maptiler.com/sdk-js/examples/ts-get-started/) to get a working map. It requires an API key though, so I solve this problem first. Creating an account creates a default key automatically, so I use that one. Remove extra code that was part of the template and the map runs just fine!

# Adding a projection control button

The SDK has a functionality for that so it's as simple as adding this to the config object:

```ts
projectionControl: true
```

# Time spent so far

The scaffolding and preparing a basic map took me cca 30 minutes. The SDK is well-documented and the documentation is on a very high level.

# Adding a rubber duck 3D model

I started by signing up into sketchfab.com to be able to download 3D models. Then, I followed yet another documentation page. First, a plugin must be installed because 3D is not included in the SDK by default:

```sh
npm i @maptiler/3d
```

The I add the code from the documentation, modifying it for my use. It runs just fine without any problems!
