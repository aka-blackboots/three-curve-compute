// write rollup config to generate esm bundle into dist folder
import { nodeResolve } from "@rollup/plugin-node-resolve";
import extensions from './rollup-extensions.mjs';
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "./../dist/src/index.js",
	output: {
		file: "./../resource/three-curves-compute.js",
		format: "esm",
	},
	plugins: [
		extensions({
			extensions: [ '.js' ],
		}),
		nodeResolve(),
		commonjs()
	],
};