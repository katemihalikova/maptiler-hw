import './style.css';

import { config, Map, type MapOptions, MapStyle } from '@maptiler/sdk';
import { Layer3D } from '@maptiler/3d';

import '@maptiler/sdk/dist/maptiler-sdk.css';

config.apiKey = 'clZrmP7UgVs1sKWo5A8V';

const options: MapOptions = {
  container: document.getElementById('map') as HTMLElement,
  style: MapStyle.OUTDOOR,
  center: [15.1725192, 50.7348128],
  zoom: 15,
  projectionControl: true,
  pitch: 45,
};

const map = new Map(options);

map.on('ready', async () => {
  const layer3D = new Layer3D('layer3D');
  map.addLayer(layer3D);

  await layer3D.addMeshFromURL('duck', '/rubber_duck.glb', {
    lngLat: [15.1725188, 50.7348114],
    heading: 325,
    scale: .4,
  });

  layer3D.cloneMesh('duck', 'duck-baby1', {
    lngLat: [15.1727942, 50.7363203],
    heading: 20,
    scale: .3,
  });

  layer3D.cloneMesh('duck', 'duck-baby2', {
    lngLat: [15.1728194, 50.7377597],
    heading: 350,
    scale: .3,
  });
});
