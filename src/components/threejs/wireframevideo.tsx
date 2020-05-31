import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import * as THREE from "three"; // Import our three library
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { TAARenderPass } from "three/examples/jsm/postprocessing/TAARenderPass";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";
let camera: THREE.Camera,
  geometry: THREE.Geometry,
  scene: THREE.Scene,
  material,
  mesh: THREE.Mesh,
  renderer: THREE.WebGLRenderer;

function useHookWithRefCallback() {
  const ref = useRef(null);
  const setRef = useCallback(node => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0x20252f);
      scene.background = new THREE.Color(0xffffff);
      camera = new THREE.PerspectiveCamera(
        20,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(0x000000, 0.0);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio); // Retina screens have different ratios
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      node.appendChild(renderer.domElement);

      let geo = new THREE.IcosahedronGeometry(1, 1);

      let matLine = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
      });
      let geometry = new THREE.WireframeGeometry(geo);
      let cube: THREE.Mesh = new THREE.Mesh(geometry, matLine);
      //camera.position.z = window.innerWidth/4 * 1;
      scene.add(cube);
      // Set camera positions
      camera.position.x = 2.2;
      camera.position.y = 0.3;
      camera.position.z = 6;
      // postprocessing
      let composer = new EffectComposer(renderer);
    
    
      let taaRenderPass = new TAARenderPass(scene, camera, 0x000000, 1);
      taaRenderPass.unbiased = false;
      taaRenderPass.sampleLevel = 5;
      taaRenderPass.accumulate = false;
    
      let renderPass = new RenderPass(scene, camera);
    

      let smaaPass = new SMAAPass(
        window.innerWidth * renderer.getPixelRatio(),
        window.innerHeight * renderer.getPixelRatio()
      );

      let copyPass = new ShaderPass(CopyShader);

     
      composer.addPass(renderPass);
      composer.addPass(taaRenderPass);
      composer.addPass(smaaPass);
      composer.addPass(copyPass);

      let animate = function () {
        requestAnimationFrame(animate);
        if (taaRenderPass) {
        }
        cube.rotation.x += 0.0025;
        cube.rotation.y += 0.0025;
        //renderer.clearDepth(); // important!
        composer.render();
        // renderer.render(scene, camera);
      };
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
