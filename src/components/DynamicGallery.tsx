"use client";
import React, { useState } from "react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { DynamicGalleryProps } from "@/lib/interfaces";
// Light gallery.
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Function to alternate between 1, 2, and 3 images per row, ensuring no consecutive rows are the same
const getRowSizes = (galleryLength: number) => {
  const rows: number[] = [];
  let i = 0;

  // Define the available row sizes
  const rowOptions = [1, 2, 3];

  // Start with the first row type
  let lastRowSize = 0;

  // Continue until all images are used
  while (i < galleryLength) {
    // Filter out the last row type to avoid consecutive repetition
    const availableRowSizes = rowOptions.filter((size) => size !== lastRowSize);

    // Pick the smallest possible size to fit the remaining images
    const chosenSize =
      availableRowSizes.find((size) => galleryLength - i >= size) ||
      availableRowSizes[0];

    // Add the chosen size to the rows and update the iterator
    rows.push(chosenSize);
    i += chosenSize;

    // Update the last row size to ensure no repetition
    lastRowSize = chosenSize;
  }

  return rows;
};

const DynamicGallery = ({ project }: DynamicGalleryProps) => {
  // Check if the project has a gallery
  const galleryImages = project.gallery || [];

  // Get row sizes based on the number of gallery images, avoiding consecutive repeated sizes
  const rowSizes = getRowSizes(galleryImages.length);

  return (
    <div className="gallery-grid mt-10">
      <LightGallery
        onInit={() => console.log("LightGallery has been initialized")}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        selector="a"
      >
        {rowSizes.map((rowSize, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-4 ${
              rowSize === 1
                ? "lg:grid-cols-1"
                : rowSize === 2
                ? "lg:grid-cols-2"
                : "lg:grid-cols-3"
            }`}
          >
            {galleryImages
              .slice(
                rowSizes.slice(0, rowIndex).reduce((acc, val) => acc + val, 0),
                rowSizes
                  .slice(0, rowIndex + 1)
                  .reduce((acc, val) => acc + val, 0)
              )
              .map((image: any, imgIndex: number) => (
                <GalleryImage
                  key={imgIndex}
                  image={image}
                  imgIndex={imgIndex}
                />
              ))}
          </div>
        ))}
      </LightGallery>
    </div>
  );
};

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 w-full h-[600px]"></div>
);

interface GalleryImageProps {
  image: any;
  imgIndex: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image, imgIndex }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <a href={urlFor(image).url()} className="gallery-item my-2">
      {isLoading && <SkeletonLoader />} {/* Show skeleton while loading */}
      <Image
        className={`w-full max-h-[600px] min-h-[600px] object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(image)
          .width(1200)
          .quality(90)
          .auto("format")
          .url()}
        alt={`Gallery image ${imgIndex + 1}`}
        width={400}
        height={400}
        layout="responsive"
        onLoadingComplete={() => setIsLoading(false)} // Hide skeleton once loaded
      />
    </a>
  );
};

export default DynamicGallery;
