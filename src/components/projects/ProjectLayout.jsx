import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const ProjectLayout = ({ name, description, demoLink, imageSrc, Tools_Technologies }) => {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      whileHover={{
        scale: 1.05,
        background:
          "linear-gradient(145deg, rgba(255, 255, 255, 0.4), rgba(173, 216, 230, 0.4))",
        boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
      }}
      className="p-6  w-[700px] sm:w-[80%] xs:w-[70%] md:w-[85%] lg:w-[80%] xl:w-[700px] mx-auto  rounded-lg shadow-xl transition-transform duration-500"
      style={{
        background: "rgba(255, 255, 255, 0.25)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        height: "400px",
        transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
      }}
    >
      <Link href={demoLink} target="_blank">
        <div className="flex flex-col items-center justify-between h-full">
          {/* Image/Icon on top */}
          <div className="flex-shrink-0 mb-4">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={name}
                className="h-24 w-24 rounded-full object-cover"
                style={{
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                }}
              />
            ) : (
              <div
                className="h-20 w-20 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-emerald-400 text-white"
                style={{
                  background:
                    "linear-gradient(100deg, #c2410c, #34d399), rgba(200, 200, 200, 0.7))",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <span style={{ fontSize: "2rem" }}>🎃</span>
              </div>
            )}
          </div>

          {/* Main Text Content */}
          <div className="text-center flex flex-col justify-between flex-1">
            <h2
              className="text-foreground"
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.6rem",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              {name}
            </h2>
            <p
              className="text-muted mt-2"
              style={{
                color: "#e0e0e0",
                fontSize: "1rem",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {description}
            </p>
            <p
              className="text-muted mt-2 font-bold"
              style={{
                color: "#f57c00",
                fontSize: "0.88rem",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {Tools_Technologies}
            </p>
            <p
              className="text-muted mt-2 animate-pulse"
              style={{
                color: "#f8f8f8",
                fontSize: "0.88rem",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Please Click Me!
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectLayout;
