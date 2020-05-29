import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import * as THREE from "three"; // Import our three library

let camera: THREE.OrthographicCamera,
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
    //  camera = new THREE.PerspectiveCamera(
    //     75,
    //     window.innerWidth / window.innerHeight,
    //     0.1,
    //     1000
    //   );
      camera = new THREE.OrthographicCamera(window.innerWidth/ -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 100000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor( 0x000000, 0.0 );
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio); // Retina screens have different ratios
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      node.appendChild(renderer.domElement);

      let geo = new THREE.IcosahedronGeometry(200,1);
      
    
      let matLine = new THREE.MeshBasicMaterial( {
        color: 0x000000,
        wireframe:true

      
      } );
      let geometry = new THREE.WireframeGeometry(geo);
      for (let i = 0; i < 1500; i++) {
       
        let wireframeObject = new THREE.Mesh( geometry, matLine );
        wireframeObject.position.x = Math.random() * 800 - 600;
        wireframeObject.position.y = Math.random() * 800 - 600;
        wireframeObject.position.z = Math.random() * 800 - 600;
        wireframeObject.scale.set( 1, 1, 1 );
        
        //scene.add(wireframeObject);
      }

      let cube: THREE.Mesh = new THREE.Mesh(geometry, matLine);
      //camera.position.z = window.innerWidth/4 * 1;
      scene.add(cube);
      camera.position.z = 5;
      
     

      let animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        renderer.clearDepth(); // important!
        renderer.render(scene, camera);
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
