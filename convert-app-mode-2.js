const chalk = require("chalk");
const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
const imageminPngquant = require("imagemin-pngquant");
const imageminMozjpeg = require("imagemin-mozjpeg");

let PNGImages = "./sourceFolder/*.png"; // PNG images
let JPEGImages = "./sourceFolder/*.jpg"; // JPEG images

imagemin([PNGImages], {
  destination: __dirname + "/exportFolder/",
  plugins: [
    imageminPngquant({
      quality: [0.7, 0.9],
    }),
  ],
}).then(() => {
  console.log(chalk.green("PNG > PNG optimized"));
});

imagemin([JPEGImages], {
  destination: __dirname + "/exportFolder/",
  plugins: [
    imageminMozjpeg({
      quality: 90,
    }),
  ],
}).then(() => {
  console.log(chalk.green("JPEG > JPEG optimized"));
});
