import { Scene, BufferGeometry, BufferAttribute, LineBasicMaterial, Line } from 'three';

export class SimpleCurve{
    constructor(
        scene: Scene
    ){
        const geometry = new BufferGeometry;
        const vertices = new Float32Array([
            -1.0, 0.0, 0.0,
            1.0, 0.0, 0.0
        ]);
        geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        const material = new LineBasicMaterial({ color: 0xff0000 });
        const line = new Line(geometry, material);
        scene.add(line);
    }
}