import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const input = path.join(
  root,
  "public",
  "images",
  "poniente-bar-hero-source.jpg",
);
const outWebp = path.join(root, "public", "images", "poniente-bar-hero.webp");

if (!fs.existsSync(input)) {
  console.error(
    `No se encontró ${input}\n\nColocá tu foto como: public/images/poniente-bar-hero-source.jpg\nLuego ejecutá: npm run process:hero`,
  );
  process.exit(1);
}

// Upscale/optimize: fuerza un ancho grande para portada.
// Si la imagen original es menor, sharp igual permite ampliar.
const TARGET_WIDTH = 1920;

await sharp(input)
  .rotate()
  .resize({
    width: TARGET_WIDTH,
    withoutEnlargement: false,
    fit: "cover",
  })
  .webp({ quality: 82 })
  .toFile(outWebp);

console.log(`OK: generado ${path.relative(root, outWebp)}`);
