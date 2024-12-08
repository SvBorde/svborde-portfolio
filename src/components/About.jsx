import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/About.jpg"
import { animate, motion } from "framer-motion";

const About = () => {
    return <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About
            <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8 p-4">
                    <div className="flex item-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="About_Logo" />
                    </div>
            </motion.div>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 p-4">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-10 maxw-xl py-8 font-light tracking-tighter">
                            {ABOUT_TEXT}
                        </p>
                    </div>
            </motion.div>
        </div>

    </div>

}

export default About
