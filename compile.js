const { readFileSync, writeFileSync } = require("fs");
const wabtPromise = require("wabt")();
const path = require("path");

const inputWatPath = process.argv[2] || "main.wat";
const outputWasmPath = inputWatPath.replace(".wat", ".wasm");

wabtPromise.then((wabt) => {
	const wasmModule = wabt.parseWat(
		inputWatPath,
		readFileSync(inputWatPath, "utf8"),
	);
	const { buffer } = wasmModule.toBinary({});

	writeFileSync(outputWasmPath, buffer);
	console.log("New wasm generated. New length is " + buffer.length);
});
