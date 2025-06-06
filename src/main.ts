import './style.css';

import { config, Map, type MapOptions, MapStyle } from '@maptiler/sdk';

import '@maptiler/sdk/dist/maptiler-sdk.css';

config.apiKey = 'clZrmP7UgVs1sKWo5A8V';

const options: MapOptions = {
  container: document.getElementById('map') as HTMLElement,
  style: MapStyle.OUTDOOR,
  center: [15.1707594, 50.7259572],
  zoom: 3,
  projectionControl: true,
};

const map = new Map(options);
