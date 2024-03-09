import { Scene } from "three";
import { SimpleLine } from "./lines/simple-line";
import { SimpleCurve } from "./curves/simple-curve";

export class ThreeCurve{
    private scene: Scene;
    simpleLine: {[name: string] : SimpleLine} = {};
    simpleCurve: {[name: string] : SimpleCurve} = {};

    constructor(scene: any){
        this.scene = scene;
    }

    CreateSimpleLine(name: string){
        const line = new SimpleLine(this.scene);
        this.simpleLine[name] = line;
        return this.simpleLine;
    }
    
    GetSimpleLine(name: string){
        return this.simpleLine[name];
    }

    CreateSimpleCurve(name: string){
        const curve = new SimpleCurve(this.scene);
        this.simpleCurve[name] = curve;
        return this.simpleCurve;
    }

    GetSimpleCurve(name: string){
        return this.simpleCurve[name];
    }
}