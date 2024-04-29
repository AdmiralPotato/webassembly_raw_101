// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require("node:fs");

const wasmBuffer = fs.readFileSync("main.wasm");
WebAssembly.instantiate(wasmBuffer).then((wasmModule) => {
	// Exported function live under instance.exports
	const { helloWorld, passthrough, add } = wasmModule.instance.exports;
	let result = helloWorld();
	console.log("helloWorld result:", result);
	result = passthrough(999);
	console.log("passthrough result:", result);
	result = add(999, 1);
	console.log("add result:", result);
});
