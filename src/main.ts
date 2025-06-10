import './style.css';

import {
  config,
  Map,
  MapStyle,
  type CustomLayerInterface,
  type CustomRenderMethodInput,
  type LngLatLike,
  type MapOptions,
} from '@maptiler/sdk';
import { AmbientLight, Cache, Camera, Matrix4, Scene, Vector3, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import '@maptiler/sdk/dist/maptiler-sdk.css';

config.apiKey = 'clZrmP7UgVs1sKWo5A8V';
Cache.enabled = true;

const options: MapOptions = {
  container: document.getElementById('map') as HTMLElement,
  style: MapStyle.OUTDOOR,
  center: [15.1725192, 50.7348128],
  zoom: 15,
  projectionControl: true,
  pitch: 45,
  canvasContextAttributes: {antialias: true},
};

const map = new Map(options);

class RubberDuckLayer implements CustomLayerInterface {
  id;
  type = "custom" as const;
  renderingMode = "3d" as const;

  #origin: LngLatLike;
  #altitude: number;
  #scale: number;
  #rotation: number;

  #camera!: Camera;
  #scene!: Scene;
  #map!: Map;
  #renderer!: WebGLRenderer;

  constructor(id: string, origin: LngLatLike, altitude = 0, scale = 1, rotation = 0) {
    this.id = id;
    this.#origin = origin;
    this.#altitude = altitude;
    this.#scale = scale;
    this.#rotation = rotation;
  }

  onAdd(map: Map, gl: WebGLRenderingContext | WebGL2RenderingContext) {
    this.#camera = new Camera();
    this.#scene = new Scene();
    this.#map = map;

    this.#scene.add(new AmbientLight(0xffffff));

    new GLTFLoader().load("rubber_duck.glb", gltf => this.#scene.add(gltf.scene));

    this.#renderer = new WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true,
    });

    this.#renderer.autoClear = false;
  }

  render(_gl: WebGLRenderingContext | WebGL2RenderingContext, options: CustomRenderMethodInput) {
    const m = new Matrix4().fromArray(options.defaultProjectionData.mainMatrix);
    const l = new Matrix4()
      .fromArray(this.#map.transform.getMatrixForModel(this.#origin, this.#altitude))
      .multiply(new Matrix4().makeRotationY(this.#rotation))
      .scale(new Vector3(this.#scale, this.#scale, this.#scale));

    this.#camera.projectionMatrix = m.multiply(l);
    this.#renderer.resetState();
    this.#renderer.render(this.#scene, this.#camera);
    this.#map.triggerRepaint();
  }
};

map.on("style.load", () => {
  map.addLayer(new RubberDuckLayer("duck", [15.1725188, 50.7348114], -2, .4, 35/180 * Math.PI));
  map.addLayer(new RubberDuckLayer("duck-baby1", [15.1727942, 50.7363203], -2, .3, 340/180 * Math.PI));
  map.addLayer(new RubberDuckLayer("duck-baby2", [15.1728194, 50.7377597], -2, .3, 10/180 * Math.PI));
});
