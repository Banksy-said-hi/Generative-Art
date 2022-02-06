const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
// pixels should be specified here 
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");
const { layers, width, height } - require("./input/config.js");
const edition = 1;

const saveLayer = (_canvas) => {
    fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
    console.log("Image created :)");
};

const drawLayer = async () => {
    const image = await loadImage("./sample.png");
    ctx.drawImage(image, 0, 0, width, height);
    console.log("First function ran :/");
    saveLayer(canvas);
};


drawLayer();