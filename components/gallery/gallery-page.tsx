"use client";

import { MasonryGrid } from "./masonry-grid";
import type { GalleryImage } from "@/sanity/types";

interface GalleryPageProps {
  images: GalleryImage[];
}

export function GalleryPage({ images }: GalleryPageProps) {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-cream via-[#FDFBF7] to-green-lite/10 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green mb-6">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-green/70">
              Explore moments from our events and activities celebrating 
              neurodivergent learners and their achievements.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        {images.length > 0 ? (
          <MasonryGrid images={images} />
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-green-lite/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-lite"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green mb-4">
                No images yet
              </h3>
              <p className="text-lg text-green/60">
                Check back soon for photos from our events and activities!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
