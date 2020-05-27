import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import * as THREE from "three"; // Import our three library

let camera: THREE.PerspectiveCamera,
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
      camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      node.appendChild( renderer.domElement );
      geometry = new THREE.BoxGeometry( 1, 1, 1 );
      material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      let cube: THREE.Mesh = new THREE.Mesh( geometry, material );
      scene.add( cube );
      camera.position.z = 5;
      let animate = function () {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
      };
      animate();
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
}

const WireframeVideo: React.FC = () => {
    // In your component you'll still recieve a `ref`, but it 
  // will be a callback function instead of a Ref Object
  const [ref] = useHookWithRefCallback()
  
  return <VideoContainer ref={ref}></VideoContainer>
};

export default WireframeVideo

const VideoContainer = styled.div`
position:fixed;
width:100vw;
height:100vh;
top:0;
left:0;
z-index:-1;
`