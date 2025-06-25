import { useState } from "react";
import { createPortal } from "react-dom";
import { PORTFOLIO } from "./Constants/Constants";

type Image = {
  src: string;
  alt: string;
};

type Project = {
  projectName: string;
  link?: string;
  techUsed?: string;
  description?: string;
  images: Image[];
};

export default function PortfolioContent() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Handler to close modal when clicking outside the image
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  // Use portal to render modal at the document body level for full screen coverage
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col mb-10 gap-8">
        {PORTFOLIO.map((project: Project, index) => {
          const [mainImage, ...thumbnails] = project.images;

          return (
            <div
              key={index}
              className="p-4 hover:bg-[#242424] hover:drop-shadow-lg  \
              rounded-md transition-all duration-500 hover:boxglow text-white hover:animate-glow"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold">{project.projectName}</h2>
                {/* You can add a project link here if available */}
              </div>
               {/* Existing UI */}
              <ul>
                <li>
                  <div className="flex flex-wrap">
                    {/* If you have techUsed, render here */}
                    {/* Example: project.techUsed && project.techUsed.split(',').map(...) */}
                  </div>
                </li>
                <div className="xl:text-base text-md p-4">
                  <li>{project.description}</li>
                </div>
              </ul>
                
              {/* Image Grid */}
              <div className="grid grid-cols-[3fr_1fr] gap-2 h-[500px] mb-4">
                {/* Main Image */}
                {mainImage && (
                  <div
                    className="bg-black cursor-pointer h-full rounded overflow-hidden"
                    onClick={() => setSelectedImage(mainImage)}
                  >
                    <img
                      src={mainImage.src}
                      alt={mainImage.alt}
                      className="w-full h-full object-cover"
                       style={{ objectPosition: "center 50%" }}
                    />
                  </div>
                )}

                {/* Thumbnails */}
                <div className="overflow-y-auto flex flex-col gap-2 h-full">
                  {thumbnails.map((img, idx) => (
                    <div
                      key={idx}
                      className=" cursor-pointer h-1/2 rounded overflow-hidden bg-black"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-contain "
                       
                      />
                    </div>
                  ))}
                </div>
              </div>

             
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && typeof window !== 'undefined' &&
        (typeof document !== 'undefined' && document.body
          ? createPortal(
              <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
                onClick={handleModalClick}
              >
                <div
                  className="bg-white rounded-lg overflow-hidden relative flex items-center justify-center"
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    padding: 0,
                    background: "transparent",
                    boxShadow: "none"
                  }}
                >
                  <button
                    className="absolute top-2 right-2 text-black text-2xl font-bold z-10 bg-white bg-opacity-80 rounded-full px-2"
                    onClick={() => setSelectedImage(null)}
                  >
                    ✕
                  </button>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    style={{
                      maxWidth: "90vw",
                      maxHeight: "90vh",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      objectPosition: "top",
                      display: "block",
                      margin: "auto"
                    }}
                  />
                </div>
              </div>,
              document.body
            )
          : null)
      }
    </>
  );
}
