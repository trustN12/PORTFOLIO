import {
  Github,
  Home,
  Linkedin,
  FileTextIcon,
  Phone,
  Twitter,
  Youtube,
  User,
  Code2,
  MedalIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const buttonStyle = {
  padding: '1rem',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(255, 154, 139, 0.5), rgba(255, 106, 136, 0.7))',
  boxShadow: '0 0 10px rgba(255, 105, 180, 1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  border: 'none',
  color: 'white',
  outline: 'none',
  position: 'relative',
  overflow: 'hidden',
  animation: 'pulse 4s infinite', // Pulse animation

};

const hoverStyle = {
  
  boxShadow: '0 0 50px rgba(255, 100, 180, 1)',
  animation: 'none',
};

const iconStyle = { width: '1.5rem', height: '1.5rem' };

const getIcon = (icon) => {
  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, buttonStyle);
      }}
    >
      {icon === "home" && <Home style={iconStyle} />}
      {icon === "about" && <User style={iconStyle} />}
      {icon === "projects" && <Code2 style={iconStyle} />}
      {icon === "contact" && <Phone style={iconStyle} />}
      {icon === "github" && <Github style={iconStyle} />}
      {icon === "linkedin" && <Linkedin style={iconStyle} />}
      {icon === "youtube" && <Youtube style={iconStyle} />}
      {icon === "resume" && <FileTextIcon style={iconStyle} />}
      {icon === "certifications" && <MedalIcon style={iconStyle} />}
    </button>
  );
};



  




const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50 space-y-4 sm:space-y-4"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center
        
        "
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50  space-y-4 sm:space-y-4">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center
      
        "
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-10 h-10  xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;