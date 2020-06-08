import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import * as THREE from "three"; // Import our three library
import { debounce } from "lodash";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { TAARenderPass } from "three/examples/jsm/postprocessing/TAARenderPass";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
let camera: THREE.Camera,
  scene: THREE.Scene,
  composer: EffectComposer,
  mesh: THREE.Mesh,
  taaRenderPass: TAARenderPass,
  fxaaPass: ShaderPass,
  copyPass: ShaderPass,
  renderPass: RenderPass,
  renderer: THREE.WebGLRenderer;

const RENDER_SCALE = 0.99;
const TAA_SAMPLE_LEVEL = 5;
const UPDATE_SIZE_WAIT = 10;
const BACKGROUND_COLOR = 0xffffff; // 0x20252f is also an excellent color
const threeJSSetup = function () {
  // This is just for setting up the variables
  if (!scene) {
    // Set up the scene info
    scene = new THREE.Scene();
    scene.background = new THREE.Color(BACKGROUND_COLOR);
  }
  // set up the renderer
  if (!renderer && window) {
    renderer = new THREE.WebGLRenderer();
    let width = 0;
    let height = 0;

    width = window.innerWidth;
    height = window.innerHeight;

    renderer.setSize(width, height);

    renderer.setPixelRatio(window.devicePixelRatio); // Retina screens have different ratios
  }
  if (!camera && window) {
    camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
  }
  if (!mesh) {
    // mesh = createTriangleLines(2, 2, 2, 1);;
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 50; j++) {
      const y = 0.9 - i * 0.4; // this is the row we are working on
      const x = -5 + 0.475 * j;
      const z = 0;
      const scale = 0.15;
      const shape2 = createTriangleLines(x, y, z, scale);
      scene.add(shape2);
    }
  }
  console.log("Added shapes");
  //scene.add(mesh);
  // Setup the camera
  camera.position.x = 0; //2.2;
  camera.position.y = 0;
  camera.position.z = 8;

  setupShaders();
};

const createTriangleLines: (
  x: number,
  y: number,
  z: number,
  s: number
) => THREE.Line = (x, y, z, s) => {
  const triangleShape: THREE.Shape = new THREE.Shape()
    .moveTo(0, 0) // bottom
    .lineTo(-1.5, 1) // left
    .lineTo(0, 2) // top
    .lineTo(1.5, 1) // right
    .lineTo(0, 0); // back to bottom
  //.lineTo(6, 6)
  //.lineTo(10, 4)
  //.lineTo(4, 0); // close path
  const points = triangleShape.getPoints();
  const geometryPoints = new THREE.BufferGeometry().setFromPoints(points);
  // solid line
  const line = new THREE.Line(
    geometryPoints,
    new THREE.LineBasicMaterial({ color: 0x000000 })
  );
  line.position.set(x, y, z);
  // line.rotation.set(0, 0, 0);
  line.scale.set(s, s, s);
  return line;
};

const setupShaders = function () {
  // postprocessing
  if (!scene || !camera || !renderer || !window) {
    return;
  }
  try {
    if (!composer) {
      composer = new EffectComposer(renderer);
      const width: number = Math.floor(window.innerWidth * RENDER_SCALE);
      const height: number = Math.floor(window.innerHeight * RENDER_SCALE);

      composer.setSize(width, height);
    }

    if (!taaRenderPass) {
      taaRenderPass = new TAARenderPass(scene, camera, 0x000000, 0);
      taaRenderPass.unbiased = false;
      taaRenderPass.sampleLevel = TAA_SAMPLE_LEVEL;
      taaRenderPass.accumulate = false;
    }
    if (!renderPass) {
      renderPass = new RenderPass(scene, camera);
    }
    if (!fxaaPass) {
      fxaaPass = new ShaderPass(FXAAShader);
      fxaaPass.uniforms["resolution"].value.x =
        1 / (window.innerWidth * renderer.getPixelRatio() * 1);
      fxaaPass.uniforms["resolution"].value.y =
        1 / (window.innerHeight * renderer.getPixelRatio() * 1);
    }

    if (!copyPass) {
      copyPass = new ShaderPass(CopyShader);
    }

    composer.addPass(taaRenderPass);
    composer.addPass(copyPass);
  } catch (e) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.error(e);
    }
    return;
  }
};
const onWindowResize = function (event?: Event) {
  if (camera && renderer && composer && window) {
    if (event) {
      event.preventDefault();
    }
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    camera.updateMatrixWorld();
    renderer.setSize(width, height);
    composer.setSize(width * RENDER_SCALE, height * RENDER_SCALE);
  }
};
const addWindowListener = function () {
  if (window) {
    window.addEventListener(
      "resize",
      debounce(onWindowResize, UPDATE_SIZE_WAIT),
      false
    );
  }
};
const removeWindowListener = function () {
  if (window) {
    window.removeEventListener("resize", onWindowResize, false);
  }
};

const animate = function () {
  requestAnimationFrame(animate);
  if (composer) {
    //mesh.rotation.x += 0.0025;
    //mesh.rotation.y += 0.0025;
    composer.render();
  }
};
function addThreeJs() {
  const ref = useRef(null); // initially set the ref to null
  const setRef = useCallback(node => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
      removeWindowListener();
    }
    if (node) {
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      if (!renderer) {
        threeJSSetup();
      }
      if (renderer) {
        node.appendChild(renderer.domElement);
      }
      animate();
      addWindowListener();
    }
    // Save the reference to the node
    ref.current = node;
  }, []);

  return [setRef];
}

const WireframeVideo: React.FC = ({ children }) => {
  const [ref] = addThreeJs();

  return (
    <OuterBackground>
      <VideoContainer ref={ref}></VideoContainer>
      {children}
    </OuterBackground>
  );
};

export default WireframeVideo;

const VideoContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: calc(69px - 100vh);
  top: 0;
  left: 0;
  z-index: -1;
`;
const OuterBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
