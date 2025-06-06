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

