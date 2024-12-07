import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Front.png"
import { animate, motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },

    }
})

const HomePage = () => {
    return <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl p-4">
                            Shantanu Borde
                    </motion.h1>

                    <motion.span
                        variants={container(0.25)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent lg:text-3xl p-5">
                            Associate Consultant
                    </motion.span>
                    <motion.p
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-width-xl py-6 font-light tracking-tighter p-4">
                            {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 p-4">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:0.5}}
                        src={profilePic} alt="Shantanu Borde" className="rounded"/>
                </div>
            </div>
        </div>

    </div>
}

export default HomePage