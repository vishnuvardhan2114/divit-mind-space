"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { GalleryImage } from "@/sanity/types";
import { ImageModal } from "./image-modal";

interface MasonryGridProps {
  images: GalleryImage[];
}

export function MasonryGrid({ images }: MasonryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => {
          const imageUrl = urlFor(image.image)?.width(600).url();
          
          return (
            <div
              key={image._id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => openModal(index)}
            >
              <Image
                src={imageUrl || ""}
                alt={image.image.alt || "Gallery image"}
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay with categories */}
              <div className="absolute inset-0 bg-linear-to-t from-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex gap-2 flex-wrap">
                  {image.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 bg-yellow text-green text-xs font-semibold rounded-full capitalize"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <ImageModal
          images={images}
          currentIndex={selectedIndex}
          onClose={closeModal}
          onNavigate={setSelectedIndex}
        />
      )}
    </>
  );
}
