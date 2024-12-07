import { FaJava } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { DiMysql } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiLooker } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = {
  hover: {
    y: -10, // Move the icon up when hovered or tapped
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  initial: {
    y: 0, // Default icon position
  },
};

const textVariants = {
  hover: {
    opacity: 1, // Show the text on hover or tap
    y: 5, // Slight downward movement for the text
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  initial: {
    opacity: 0, // Initially hide the text
    y: 20, // Position it further down to give the reveal effect
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}

        className="flex flex-wrap items-center justify-center gap-4"> {/* Added flex-wrap */}
        {/* ReactJS Icon and Text */}
        <motion.div
          className="rounded-2xl p-4"
          initial="initial"
          whileHover="hover"
          whileTap="hover" // Trigger animation on tap for mobile users
          key="reactjs"
        >
          <motion.div variants={iconVariants}>
            <GrReactjs className="text-5xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="text-center text-sm text-cyan-400"
          >
            ReactJS
          </motion.div>
        </motion.div>

        {/* Java Icon */}
        <motion.div
          className="rounded-2xl p-4"
          initial="initial"
          whileHover="hover"
          whileTap="hover" // Added for mobile
          key="java"
        >
          <motion.div variants={iconVariants}>
            <FaJava className="text-5xl text-orange-700" />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="text-center text-sm text-orange-700"
          >
            Java
          </motion.div>
        </motion.div>

        {/* Javascript Icon */}
        <motion.div
          className="rounded-2xl p-4"
          initial="initial"
          whileHover="hover"
          whileTap="hover" // Added for mobile
          key="javascript"
        >
          <motion.div variants={iconVariants}>
            <RiJavascriptFill className="text-5xl text-yellow-500" />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="text-center text-sm text-yellow-500"
          >
            JavaScript
          </motion.div>
        </motion.div>

        {/* Python Icon */}
        <motion.div
          className="rounded-2xl p-4"
          initial="initial"
          whileHover="hover"
          whileTap="hover" // Added for mobile
          key="python"
        >
          <motion.div variants={iconVariants}>
            <FaPython className="text-5xl text-blue-800" />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="text-center text-sm text-blue-800"
          >
            Python
          </motion.div>
        </motion.div>

        {/* MySQL Icon */}
        <motion.div
          className="rounded-2xl p-4"
          initial="initial"
          whileHover="hover"
          whileTap="hover" // Added for mobile
          key="mysql"
        >
          <motion.div variants={iconVariants}>
            <DiMysql className="text-5xl text-blue-800" />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="text-center text-sm text-blue-800"
          >
            MySQL
          </motion.div>
        </motion.div>

        {/* TensorFlow Icon */}
        <motion.div
          className="rounded-2xl p-4"
          initial="initial"
          whileHover="hover"
          whileTap="hover" // Added for mobile
          key="tensorflow"
        >
          <motion.div variants={iconVariants}>
            <SiTensorflow className="text-5xl text-orange-500" />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="text-center text-sm text-orange-500"
          >
            Tensor
          </motion.div>
        </motion.div>

        {/* PostgreSQL Icon */}
        <motion.div
          className="rounded-2xl p-4"
          initial="initial"
          whileHover="hover"
          whileTap="hover" // Added for mobile
          key="postgresql"
        >
          <motion.div variants={iconVariants}>
            <SiPostgresql className="text-5xl text-sky-900" />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="text-center text-sm text-sky-900"
          >
            Postgre
          </motion.div>
        </motion.div>

        {/* Looker Icon */}
        <motion.div
          className="rounded-2xl p-4"
          initial="initial"
          whileHover="hover"
          whileTap="hover" // Added for mobile
          key="looker"
        >
          <motion.div variants={iconVariants}>
            <SiLooker className="text-5xl text-green-700" />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="text-center text-sm text-green-700"
          >
            Looker
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
