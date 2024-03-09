import { BufferAttribute, BufferGeometry, Line, LineBasicMaterial, Scene } from "three";

export class SimpleLine{
    constructor(
        scene: Scene
    ){
        const geometry = new BufferGeometry;
        const vertices = new Float32Array([
            -2.0, 1.0, 0.0,
            2.0, 1.0, 0.0
        ]);
        geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        const material = new LineBasicMaterial({ color: 0x0000ff });
        const line = new Line(geometry, material);
        scene.add(line);
    }
}