import { motion } from "framer-motion"; // Import motion
import logo from "../assets/SB_logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <motion.a
          href="https://www.linkedin.com/in/shantanuborde285"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Slightly shrink on tap/click
          initial={{ opacity: 0 }} // Fade in from 0 opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 0.5 }} // Transition duration
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/SvBorde"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="mailto:shantanuvborde@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BiLogoGmail />
        </motion.a>
        <motion.a
          href="https://www.upwork.com/freelancers/~01d0efdd60f111c62f?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaSquareUpwork />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
