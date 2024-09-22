"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...", {
      style: {
        background: "rgba(255, 255, 255, 0.8)", // Dreamy background for toast
        backdropFilter: "blur(5px)", // Blurring effect for the toast background
        border: "2px solid orange", // Border for the toast
        color: "purple", // Text color for the toast
      },
    });

    // Replace these values with your actual EmailJS credentials
    const serviceID = "service_op3qko5"; // Your EmailJS service ID
    const templateID = "template_7z969v9"; // Your EmailJS template ID
    const publicKey = "72yf9lHWZdhA6bsR4"; // Your EmailJS public key

    emailjs.send(serviceID, templateID, params, publicKey).then(
      () => {
        toast.success(
          "I appreciate your message and will get back to you promptly!",
          {
            id: toastId,
            style: {
              background: "rgba(255, 255, 255, 0.8)", // Dreamy background for success toast
              backdropFilter: "blur(5px)", // Blurring effect for the success toast
              border: "2px solid orange", // Green border for the success toast
              color: "purple", // Text color for the success toast
            },
          }
        );
      },
      (error) => {
        toast.error(
          "There was an error sending your message, please try again later!",
          {
            id: toastId,
            style: {
              background: "rgba(255, 255, 255, 0.8)", // Dreamy background for error toast
              backdropFilter: "blur(5px)", // Blurring effect for the error toast
              border: "2px solid red", // Red border for the error toast
              color: "purple", // Text color for the error toast
            },
          }
        );
      }
    );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Nabarun",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "transparent", // No background for the form itself
        }}
      >
        <motion.input
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          type="text"
          placeholder="Your Name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long.",
            },
          })}
          className="w-full p-4 rounded-md shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.2)", // Dreamy background for input
            backdropFilter: "blur(5px)", // Blurring effect for the input background
            borderTop: "2px solid yellow", // Top border color
            borderLeft: "2px solid yellow", // Left border color
            borderBottom: "2px solid orange", // Bottom border color
            borderRight: "2px solid orange", // Right border color
            color: "orange", // Input text color
            transition: "transform 0.3s",
            outline: "none", // Remove default outline
          }}
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="Your Mail ID"
          {...register("email", { required: "This field is required!" })}
          className="w-full p-4 rounded-md shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.2)", // Dreamy background for input
            backdropFilter: "blur(5px)", // Blurring effect for the input background
            borderTop: "2px solid yellow", // Top border color
            borderLeft: "2px solid yellow", // Left border color
            borderBottom: "2px solid orange", // Bottom border color
            borderRight: "2px solid orange", // Right border color
            color: "orange", // Input text color
            transition: "transform 0.3s",
            outline: "none", // Remove default outline
          }}
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <motion.input
          type="tel"
          placeholder="Your Contact Number"
          {...register("contact", {
            required: "This field is required!",
            minLength: {
              value: 10,
              message: "Contact number must be 10 digits long.",
            },
            maxLength: {
              value: 10,
              message: "Contact number must be 10 digits long.",
            },
          })}
          className="w-full p-4 rounded-md shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.2)", // Dreamy background for input
            backdropFilter: "blur(5px)", // Blurring effect for the input background
            borderTop: "2px solid yellow", // Top border color
            borderLeft: "2px solid yellow", // Left border color
            borderBottom: "2px solid orange", // Bottom border color
            borderRight: "2px solid orange", // Right border color
            color: "orange", // Input text color
            transition: "transform 0.3s",
            outline: "none", // Remove default outline
          }}
        />

        <motion.textarea
          variants={item}
          placeholder="Your Message"
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 700,
              message: "Message should be less than 700 characters",
            },
            minLength: {
              value: 40,
              message: "Message should be more than 40 characters",
            },
          })}
          className="w-full p-4 rounded-md shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.2)", // Dreamy background for input
            backdropFilter: "blur(5px)", // Blurring effect for the input background
            borderTop: "2px solid yellow", // Top border color
            borderLeft: "2px solid yellow", // Left border color
            borderBottom: "2px solid orange", // Bottom border color
            borderRight: "2px solid orange", // Right border color
            color: "orange", // Input text color
            transition: "transform 0.3s",
            outline: "none", // Remove default outline
          }}
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          className="px-10 py-4 rounded-md shadow-lg text-white border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer capitalize"
          type="submit"
          value="Send your message! 🎃"
          style={{
            background:
              "linear-gradient(to right, rgba(128, 0, 128, 0.7) 0%, rgba(255, 165, 0, 0.7) 100%)", // Dreamy gradient background
            transition: "transform 0.3s, background 0.3s", // Transition for scaling and background
            borderTop: "2px solid yellow", // Top border color
            borderLeft: "2px solid yellow", // Left border color
            borderBottom: "2px solid orange", // Bottom border color
            borderRight: "2px solid orange", // Right border color
          }}
          whileHover={{
            scale: 1.05,
            background:
              "linear-gradient(to right, rgba(255, 165, 0, 0.9) 0%, rgba(128, 0, 128, 0.9) 100%)",
          }} // Change background on hover
        />
      </motion.form>
    </>
  );
}
