"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import type { GalleryImage } from "@/sanity/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageModalProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageModalProps) {
  const currentImage = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && hasPrev) {
        onNavigate(currentIndex - 1);
      } else if (e.key === "ArrowRight" && hasNext) {
        onNavigate(currentIndex + 1);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, hasPrev, hasNext, onNavigate, onClose]);

  const imageUrl = urlFor(currentImage.image)?.width(1920).url();

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
        <DialogTitle className="sr-only">
          Gallery Image {currentIndex + 1} of {images.length}
        </DialogTitle>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Navigation buttons */}
        {hasPrev && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}

        {hasNext && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}

        {/* Image container */}
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <Image
            src={imageUrl || ""}
            alt={currentImage.image.alt || "Gallery image"}
            width={1920}
            height={1080}
            className="max-w-full max-h-full object-contain"
            priority
          />
        </div>

        {/* Image info footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="flex items-center justify-between text-white">
            <div className="flex gap-2">
              {currentImage.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-yellow text-green text-sm font-semibold rounded-full capitalize"
                >
                  {cat}
                </span>
              ))}
            </div>
            <span className="text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
