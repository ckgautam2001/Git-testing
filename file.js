
const PSD = require('psd');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Convert PSD to PNG and then to JPG
function convertPsdToJpg(psdPath, outputJpgPath) {
  PSD.open(psdPath).then(psd => {
    return psd.image.saveAsPng('./temp_output.png');
  }).then(() => {
    console.log("PNG file saved. Converting to JPG...");
    return sharp('./temp_output.png')
      .jpeg({ quality: 90 }) // Set JPEG quality
      .toFile(outputJpgPath);
  }).then(() => {
    console.log(`Finished! JPG saved as ${outputJpgPath}`);
    // Optionally delete the temporary PNG file
    fs.unlink('./temp_output.png', err => {
      if (err) throw err;
      console.log('Temporary PNG file deleted');
    });
  }).catch(err => {
    console.error("Error processing PSD file:", err);
  });
}

// Example usage
const psdPath = '/Users/ckgautam/Downloads/CT_SkillTest_v3.psd'; // Path to the input PSD
const outputJpgPath = '/Users/ckgautam/Downloads/psd_file/file.jpg'; // Path to save the JPG file
convertPsdToJpg(psdPath, outputJpgPath);

