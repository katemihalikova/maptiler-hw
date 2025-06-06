import './style.css';

import { config, Map, type MapOptions } from '@maptiler/sdk';

import '@maptiler/sdk/dist/maptiler-sdk.css';

config.apiKey = 'clZrmP7UgVs1sKWo5A8V';

const options: MapOptions = {
  container: document.getElementById('map') as HTMLElement,
};

const map = new Map(options);
