// src/components/OptimizedImage.jsx
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage Component
 * Renders responsive, lazy-loaded images with multiple source formats
 * 
 * @component
 * @param {Object} props
 * @param {string} props.src - Base image path
 * @param {string} props.alt - Alt text for the image
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.width] - Image width
 * @param {number} [props.height] - Image height
 * @param {boolean} [props.eager=false] - Whether to load eagerly (disables lazy loading)
 * @param {string} [props.sizes="100vw"] - Sizes attribute for responsive images
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  eager = false,
  sizes = '100vw',
  ...rest 
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);
  
  // Extract file name and extension from src
  const getImageInfo = (src) => {
    const parts = src.split('/');
    const filename = parts[parts.length - 1];
    const [name, ext] = filename.split('.');
    
    return {
      path: parts.slice(0, -1).join('/'),
      name,
      ext
    };
  };
  
  const { path, name, ext } = getImageInfo(src);
  
  // Generate responsive image URLs
  const generateSrcSet = () => {
    const widths = [640, 768, 1024, 1280, 1536];
    const srcSet = widths.map(w => {
      return `${path}/${name}-${w}.${ext} ${w}w`;
    }).join(', ');
    
    return srcSet;
  };
  
  // Generate WebP URLs if original is not WebP
  const generateWebPSrcSet = () => {
    if (ext === 'webp') return null;
    
    const widths = [640, 768, 1024, 1280, 1536];
    const srcSet = widths.map(w => {
      return `${path}/${name}-${w}.webp ${w}w`;
    }).join(', ');
    
    return srcSet;
  };
  
  useEffect(() => {
    // Skip intersection observer if eager loading is requested
    if (eager) {
      setIsIntersecting(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '200px', // Start loading 200px before image enters viewport
        threshold: 0.01
      }
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [eager]);
  
  // Handle image load event
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };
  
  const webpSrcSet = generateWebPSrcSet();
  
  return (
    <div 
      ref={imageRef}
      className={`relative ${className} ${!isLoaded ? 'bg-gray-200 dark:bg-gray-700 animate-pulse' : ''}`}
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : 'auto'
      }}
    >
      {(isIntersecting || eager) && (
        <picture>
          {/* WebP format (if available) */}
          {webpSrcSet && (
            <source 
              type="image/webp" 
              srcSet={webpSrcSet}
              sizes={sizes}
            />
          )}
          
          {/* Original format */}
          <img
            src={src} 
            alt={alt}
            width={width}
            height={height}
            loading={eager ? 'eager' : 'lazy'}
            srcSet={generateSrcSet()}
            sizes={sizes}
            onLoad={handleImageLoaded}
            className={`w-full h-full object-cover ${!isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
            {...rest}
          />
        </picture>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  eager: PropTypes.bool,
  sizes: PropTypes.string,
};

export default OptimizedImage;

// Usage example in a component:
/*
import OptimizedImage from '../components/OptimizedImage';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <OptimizedImage 
        src={`/assets/images/projects/${project.image}`}
        alt={`${project.title} screenshot`}
        className="w-full h-48"
        width={640}
        height={360}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};
*/

// NOTE: For this component to work properly, you need to generate multiple sizes of each image:
// - original.jpg
// - original-640.jpg
// - original-768.jpg
// - original-1024.jpg
// - original-1280.jpg
// - original-1536.jpg
// And the same for WebP format if you want to support it.
// You can automate this with a build script using Sharp or similar library.