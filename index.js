const express = require("express");
const sharp = require("sharp");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/api/processImage/:imageName", async (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "src", "assets", "images", imageName);
  const format = req.query.format || "jpeg";
  try {
    if (!fs.existsSync(imagePath)) {
      return res.status(404).send("Image not found");
    }

    // Process the image using sharp with the provided options
    const processedImage = await sharp(imagePath)
      .resize(4096)
      .normalize(255)
      .gamma(1)
      .sharpen()
      .modulate({saturation: 1.2 })
      .linear(1.1, 0) // Adjust the contrast using the linear function
      [format]({ quality: 70 })
      .toBuffer();

    res.setHeader("Content-Type", "image/webp");
    res.send(processedImage);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing image");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
