import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import * as THREE from "three"; // Import our three library
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { TAARenderPass } from "three/examples/jsm/postprocessing/TAARenderPass";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
let camera: THREE.Camera,
  geometry: any,
  scene: THREE.Scene,
  material: any,
  composer: EffectComposer,
  mesh: THREE.Mesh,
  smaaPass: SMAAPass,
  taaRenderPass: TAARenderPass,
  fxaaPass: ShaderPass,
  copyPass: ShaderPass,
  renderPass: RenderPass,
  renderer: THREE.WebGLRenderer;
const threeJSSetup = function () {
  // This is just for setting up the variables
  if (!scene) {
    // Set up the scene info
    scene = new THREE.Scene();
    //scene.background = new THREE.Color(0x20252f);
    scene.background = new THREE.Color(0xffffff);
  }
  // set the renderer
  if (!renderer) {
    renderer = new THREE.WebGLRenderer();
    let width: number = 0;
    let height: number = 0;
    if (window) {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    renderer.setSize(width, height);
    if (window) {
      renderer.setPixelRatio(window.devicePixelRatio); // Retina screens have different ratios
    }
  }
  if (!camera) {
    camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
  }
  if (!geometry) {
    let geo = new THREE.IcosahedronBufferGeometry(1, 1);
    geometry = new THREE.WireframeGeometry(geo);
  }
  if (!material) {
    material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
    });
  }
  if (!mesh) {
    mesh = new THREE.Mesh(geometry, material);
  }
  scene.add(mesh);
  // Setup the camera
  camera.position.x = 2.2;
  camera.position.y = 0.3;
  camera.position.z = 6;
  setupShaders();
};
const setupShaders = function () {
  // postprocessing
  if (!scene || !camera || !renderer) {
    return;
  }
  if (!composer) {
    composer = new EffectComposer(renderer);
    if (window) {
      let renderScale: number = 0.89;
      let width: number = window.innerWidth * renderScale;
      let height: number = window.innerHeight * renderScale;
      composer.setSize(width, height);
    }
  }

  if (!taaRenderPass) {
    taaRenderPass = new TAARenderPass(scene, camera, 0x000000, 0);
    taaRenderPass.unbiased = false;
    taaRenderPass.sampleLevel = 5;
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
  if (!smaaPass) {
    smaaPass = new SMAAPass(
      window.innerWidth * renderer.getPixelRatio(),
      window.innerHeight * renderer.getPixelRatio()
    );
  }

  if (!copyPass) {
    copyPass = new ShaderPass(CopyShader);
  }

  composer.addPass(taaRenderPass);
  composer.addPass(copyPass);
};

const animate = function () {
  requestAnimationFrame(animate);
  if (mesh && composer) {
    mesh.rotation.x += 0.0025;
    mesh.rotation.y += 0.0025;
    composer.render();
  }
};
function useHookWithRefCallback() {
  const ref = useRef(null);
  const setRef = useCallback(node => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
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
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
}

const WireframeVideo: React.FC = ({ children }) => {
  // In your component you'll still recieve a `ref`, but it
  // will be a callback function instead of a Ref Object
  const [ref] = useHookWithRefCallback();

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
  height: 100vh;
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
