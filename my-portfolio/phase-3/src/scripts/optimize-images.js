// scripts/optimize-images.js
// A Node.js script to optimize images for the website

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  // Source directories containing images to optimize
  sourceDirs: [
    'public/assets/images/projects',
    'public/assets/images/blog',
    'public/assets/images',
  ],
  // Output quality for JPEG and WebP (0-100)
  quality: 80,
  // Sizes to generate for responsive images
  sizes: [640, 768, 1024, 1280, 1536],
  // Generate WebP versions
  generateWebP: true,
  // Generate AVIF versions (advanced, may not be supported everywhere)
  generateAVIF: false,
  // Generate responsive sizes
  generateResponsive: true,
  // Keep original images
  keepOriginals: true,
};

/**
 * Processes all images in the given directories
 */
async function processImages() {
  console.log('🖼️  Starting image optimization...');
  
  let totalImages = 0;
  let totalOptimized = 0;
  let totalSizeBefore = 0;
  let totalSizeAfter = 0;
  
  for (const sourceDir of config.sourceDirs) {
    console.log(`\n📁 Processing directory: ${sourceDir}`);
    
    try {
      // Get all files in the directory
      const files = await fs.readdir(sourceDir);
      
      // Filter for image files
      const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
      });
      
      if (imageFiles.length === 0) {
        console.log('  No image files found in this directory');
        continue;
      }
      
      console.log(`  Found ${imageFiles.length} images`);
      totalImages += imageFiles.length;
      
      // Process each image
      for (const file of imageFiles) {
        const filePath = path.join(sourceDir, file);
        const stats = await fs.stat(filePath);
        const sizeBefore = stats.size;
        totalSizeBefore += sizeBefore;
        
        // Get file info
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const isJpeg = ['.jpg', '.jpeg'].includes(ext.toLowerCase());
        const isPng = ext.toLowerCase() === '.png';
        
        try {
          // Load the image
          let image = sharp(filePath);
          const metadata = await image.metadata();
          
          console.log(`  Processing: ${file} (${metadata.width}x${metadata.height})`);
          
          // Optimize the original image if keeping originals
          if (config.keepOriginals) {
            const optimizedFilePath = path.join(sourceDir, `${basename}-optimized${ext}`);
            
            if (isJpeg) {
              await image
                .jpeg({ quality: config.quality, mozjpeg: true })
                .toFile(optimizedFilePath);
            } else if (isPng) {
              await image
                .png({ quality: config.quality, compressionLevel: 9 })
                .toFile(optimizedFilePath);
            } else {
              // For other formats, just resize slightly to trigger optimization
              await image
                .resize(metadata.width)
                .toFile(optimizedFilePath);
            }
            
            const optimizedStats = await fs.stat(optimizedFilePath);
            console.log(`    Optimized: ${formatBytes(sizeBefore)} → ${formatBytes(optimizedStats.size)} (${calculateReduction(sizeBefore, optimizedStats.size)}% reduction)`);
            
            totalSizeAfter += optimizedStats.size;
            totalOptimized++;
          }
          
          // Generate WebP version
          if (config.generateWebP) {
            const webpFilePath = path.join(sourceDir, `${basename}.webp`);
            await image
              .webp({ quality: config.quality })
              .toFile(webpFilePath);
            
            const webpStats = await fs.stat(webpFilePath);
            console.log(`    WebP: ${formatBytes(webpStats.size)} (${calculateReduction(sizeBefore, webpStats.size)}% reduction)`);
          }
          
          // Generate AVIF version (if enabled)
          if (config.generateAVIF) {
            try {
              const avifFilePath = path.join(sourceDir, `${basename}.avif`);
              await image
                .avif({ quality: config.quality })
                .toFile(avifFilePath);
              
              const avifStats = await fs.stat(avifFilePath);
              console.log(`    AVIF: ${formatBytes(avifStats.size)} (${calculateReduction(sizeBefore, avifStats.size)}% reduction)`);
            } catch (error) {
              console.log(`    AVIF generation failed: ${error.message}`);
            }
          }
          
          // Generate responsive sizes
          if (config.generateResponsive) {
            for (const size of config.sizes) {
              // Skip if image is already smaller than this size
              if (metadata.width <= size) {
                continue;
              }
              
              // Generate responsive JPEG/PNG
              const responsiveFilePath = path.join(sourceDir, `${basename}-${size}${ext}`);
              await image
                .resize(size)
                .toFile(responsiveFilePath);
              
              // Generate responsive WebP
              if (config.generateWebP) {
                const responsiveWebpFilePath = path.join(sourceDir, `${basename}-${size}.webp`);
                await image
                  .resize(size)
                  .webp({ quality: config.quality })
                  .toFile(responsiveWebpFilePath);
              }
              
              // Generate responsive AVIF
              if (config.generateAVIF) {
                try {
                  const responsiveAvifFilePath = path.join(sourceDir, `${basename}-${size}.avif`);
                  await image
                    .resize(size)
                    .avif({ quality: config.quality })
                    .toFile(responsiveAvifFilePath);
                } catch (error) {
                  // Silently fail for AVIF (still experimental in some environments)
                }
              }
            }
            
            console.log(`    Generated ${config.sizes.length} responsive sizes`);
          }
          
        } catch (error) {
          console.error(`    Error processing ${file}: ${error.message}`);
        }
      }
    } catch (error) {
      console.error(`  Error reading directory ${sourceDir}: ${error.message}`);
    }
  }
  
  // Print summary
  console.log('\n✅ Image optimization complete!');
  console.log(`   Processed ${totalImages} images`);
  console.log(`   Optimized ${totalOptimized} images`);
  
  if (totalOptimized > 0) {
    console.log(`   Total size reduction: ${formatBytes(totalSizeBefore)} → ${formatBytes(totalSizeAfter)}`);
    console.log(`   Saved: ${formatBytes(totalSizeBefore - totalSizeAfter)} (${calculateReduction(totalSizeBefore, totalSizeAfter)}%)`);
  }
}

/**
 * Format bytes to a human readable string
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Calculate percentage reduction
 */
function calculateReduction(before, after) {
  return ((before - after) / before * 100).toFixed(1);
}

// Run the script
processImages().catch(error => {
  console.error('Failed to optimize images:', error);
  process.exit(1);
});

/*
To use this script:

1. Add it to your project in a 'scripts' folder
2. Install sharp: npm install --save-dev sharp
3. Run it: node scripts/optimize-images.js

You can add it to your package.json scripts:

"scripts": {
  "optimize-images": "node scripts/optimize-images.js"
}

Then run with: npm run optimize-images
*/