import AppBar from "../../components/AppBar/AppBar";
import {motion} from "framer-motion";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Background from "../background/background";
import * as React from "react";
import {useTheme} from "next-themes";

export default function Name({ parentRef }) {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = hours < 12 ? "morning" : hours < 18 ? "afternoon" : "evening";
    const {resolvedTheme} = useTheme()
    return (
        <div className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    h-full w-full">
            <h1
                className="
                        font-bold
                        text-center
                        w-full
                        sm:text-4xl lg:text-6xl
                        "
            >
                Good {timeOfDay},
                <span className="text-blue-500">&nbsp;I'm</span>
            </h1>
            <h1
                className="
                        {/*text-8xl*/}
                        h-60 grid
                        font-bold text-center text-transparent bg-clip-text
                        sm:text-6xl lg:text-8xl
                        justify-center items-center
                        w-full animated-gradient
                        "
                style={{
                    backgroundImage: "linear-gradient(to right, #fbbf24, #f97316)",
                }}
            >
                Wenqian Zhang
            </h1>
            <h1
                className="
                        font-bold
                        text-center
                        w-full
                        sm:text-4xl lg:text-6xl
                        "

            >
                <span className="text-center text-transparent bg-clip-text animated-gradient"
                      style={{
                          backgroundImage: "linear-gradient(to right, #a855f7, #f43f5e)",
                      }}
                >
                    Welcome
                </span>
                &nbsp;to my personal website
            </h1>

            <motion.div
                style={{
                    bottom: "5px",
                    position: "absolute",
                    cursor: "pointer",
                }}
                whileHover={{scale: 1.5}}
                animate={{y:  -20}}
                onClick={() => {
                    const height = window.innerHeight*0.8;
                    parentRef.current.scrollTo({top: height, behavior: 'smooth'}
                )}}

                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 50,
                    repeat: Infinity, // 无限循环
                    repeatType: "mirror", // 使动画来回循环
                    duration: 3 // 动画持续时间
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="200px" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10L12 15L17 10"
                          stroke={resolvedTheme === 'light' ? "black" : "white"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </motion.div>
        </div>
    )

}