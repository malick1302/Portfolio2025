import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';

let camera, scene, renderer; 

function main() {
    // Création de la scène
    scene = new THREE.Scene();
    // Arrière-plan transparent
    scene.background = null; 

    // Configuration de la caméra
    const fov = 40;
    const aspect = 2;
    const near = 0.1;
    const far = 790;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 60;

    // Création du rendu WebGL et du canvas
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('c'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Définit la couleur de fond comme transparente

    
    // Ajouter des lumières
    addLights();

    // Ajouter le Torus Knot à la scène
    addTorusKnot(0, 0);

    // Lancer l'animation
    animate();
}

function addLights() {
    const light = new THREE.DirectionalLight(0xfff0dd, 1);
    light.position.set(0, 12, 10);
    scene.add(light);
}

// Fonction pour créer l'objet Torus Knot
function addTorusKnot(x, y) {
    const radius =  5.8;  
    const tubeRadius =  1.0;  
    const radialSegments =  9;  
    const tubularSegments =  20;  
    const p =  1;  
    const q = 13; 

    const geometry = new THREE.TorusKnotGeometry(
        radius, tubeRadius, tubularSegments, radialSegments, p, q 
    );
    const material = new THREE.MeshPhysicalMaterial({
        metalness: 0,  
        roughness: 0
      });    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh);

}

function createMaterial() {
    const material = new THREE.MeshPhysicalMaterial({  
        roughness: 0,  
        transmission: 1, // Add transparency
      });
}

function animate() {
    requestAnimationFrame(animate);

    // Faire tourner l'objet sur l'axe Y
    scene.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
            child.rotation.y += 0.03; 
        }
    });

    // Rendu de la scène
    renderer.render(scene, camera);
}



main();
