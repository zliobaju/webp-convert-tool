import imagemin from 'imagemin';
import chalk from 'chalk'
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from "imagemin-webp";
import imageminMozjpeg from 'imagemin-mozjpeg'

let PNGImages = "./sourceFolder/*.png"; // PNG images
let JPEGImages = "./sourceFolder/*.jpg"; // JPEG images

const pngToWebp = await imagemin([PNGImages], {
  destination: 'exportFolder',
  plugins: [
    imageminWebp({
      lossless: true,
    }),
  ],
}).then(() => {
  console.log(chalk.green("PNG > WEBP optimized"));
});

const pngToPngFiles = await imagemin([PNGImages], {
	destination: 'exportFolder',
	plugins: [
		imageminPngquant({
			quality: [0.6, 0.8]
		})
	]
}).then(() => {
  console.log(chalk.green("PNG > PNG optimized"));
});

const jpegToWebpFiles = await imagemin([JPEGImages], {
  destination: "exportFolder",
  plugins: [
    imageminWebp({
      quality: 70,
    }),
  ],
}).then(() => {
  console.log(chalk.green("JPEG > WEBP optimized"));
});

const jpegToJepgFiles = await imagemin([JPEGImages], {
  destination: "exportFolder",
  plugins: [
    imageminMozjpeg({
      quality: 80,
    }),
  ],
}).then(() => {
  console.log(chalk.green("JPEG > JPEG optimized"));
});