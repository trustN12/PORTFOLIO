"use client"; // Mark the component as client-side

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Volume2, VolumeX } from "lucide-react"; // Ensure the import path is correct

const Modal = ({ onClose, toggle }) => {
  // Only render this on the client-side using the createPortal
  if (typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div
        className="px-10 py-8 rounded-md shadow-lg text-white border border-accent/30 
              border-solid backdrop-blur-sm focus:outline-none focus:ring-2 
              focus:ring-orange-500 space-y-6 text-center capitalize"
        style={{
          background:
            "linear-gradient(to right, rgba(128, 0, 128, 0.7), rgba(255, 165, 0, 0.7))",
          transition: "transform 0.3s, background 0.3s",
          borderTop: "2px solid yellow",
          borderLeft: "2px solid yellow",
          borderBottom: "2px solid orange",
          borderRight: "2px solid orange",
        }}
      >
        <p className="text-xl font-semibold">
          Would you like to enjoy some background music? 🎵
        </p>
        <div className="flex items-center justify-center space-x-6">
          <motion.button
            onClick={toggle}
            className="px-10 py-4 rounded-md shadow-lg text-white border border-accent/30 
                        hover:shadow-glass-sm backdrop-blur-sm cursor-pointer capitalize"
            style={{
              background:
                "linear-gradient(to right, rgba(128, 0, 128, 0.7), rgba(255, 165, 0, 0.7))",
              transition: "transform 0.3s, background 0.3s",
              borderTop: "2px solid yellow",
              borderLeft: "2px solid yellow",
              borderBottom: "2px solid orange",
              borderRight: "2px solid orange",
            }}
            whileHover={{
              scale: 1.05,
              background:
                "linear-gradient(to right, rgba(255, 165, 0, 0.9), rgba(128, 0, 128, 0.9))",
            }}
          >
            Yes, play it!
          </motion.button>
          <motion.button
            onClick={onClose}
            className="px-10 py-4 rounded-md shadow-lg text-white border border-accent/30 
                        hover:shadow-glass-sm backdrop-blur-sm cursor-pointer capitalize"
            style={{
              background:
                "linear-gradient(to right, rgba(128, 0, 128, 0.7), rgba(255, 165, 0, 0.7))",
              transition: "transform 0.3s, background 0.3s",
              borderTop: "2px solid yellow",
              borderLeft: "2px solid yellow",
              borderBottom: "2px solid orange",
              borderRight: "2px solid orange",
            }}
            whileHover={{
              scale: 1.05,
              background:
                "linear-gradient(to right, rgba(255, 165, 0, 0.9), rgba(128, 0, 128, 0.9))",
            }}
          >
            No, thanks!
          </motion.button>
        </div>
      </div>
    </div>,

    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  



  useEffect(() => {
    // Show modal every time page loads (no consent check)
    setShowModal(true); // Always show modal on page load

  }, []);

  const toggle = () => {
    console.log('Toggling audio play state');
    const newState = !isPlaying;
    setIsPlaying(newState);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
    audioRef.current.volume = 0.7; // Set volume to maximum

  };
  
  

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}

<audio ref={audioRef} loop src="/audio/MAIN.mp3">
  Your browser does not support the audio element. Please check the file path.
</audio>

      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"Sound control button"}
        name={"Sound control button"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
