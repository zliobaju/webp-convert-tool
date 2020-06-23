const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

let PNGImages = "./sourceFolder/*.png";         // PNG images
let JPEGImages = "./sourceFolder/*.jpg";        // JPEG images

imagemin([PNGImages], {
  destination: __dirname + '/exportFolder/',
  plugins: [
    imageminWebp({
      lossless: true
    })
  ]
}).then(() => {
  console.log('PNGImages Images optimized');
});

imagemin([JPEGImages], {
  destination: __dirname + '/exportFolder/',
  plugins: [
    imageminWebp({
      quality: 70
    })
  ]
}).then(() => {
  console.log('JPEGImages Images optimized');
});