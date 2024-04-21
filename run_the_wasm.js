// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require("node:fs");

const wasmBuffer = fs.readFileSync("main.wasm");
WebAssembly.instantiate(wasmBuffer).then((wasmModule) => {
	// Exported function live under instance.exports
	const { helloWorld } = wasmModule.instance.exports;
	const result = helloWorld();
	console.log("result:", result);
});
