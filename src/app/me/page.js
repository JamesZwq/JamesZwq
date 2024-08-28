"use client";
import * as React from "react"
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Background from "../background/background";
import {motion} from "framer-motion";
import {useRef} from "react";
import {useTheme} from "next-themes";
import AppBar from "../../components/AppBar/AppBar";
import Name from "./name";
import MyInfo from "./MyInfo";
import {Button} from "@/components/ui/button";
import {Maximize2,Minimize2} from "lucide-react";

export default function Me() {

    const ref = useRef(null);
    const [isFullscreen, setFullscreen] = React.useState(false);
    const {resolvedTheme} = useTheme()

    return (
        <div
            className="flex justify-center items-center"
        >
            <AppBar/>
            {/*<motion.div*/}
            {/*    className="progress-bar"*/}
            {/*    style={{scaleX: 0.5}}*/}
            {/*/>*/}
            <motion.div
                className={`box ${resolvedTheme === 'light' ? 'box-light' : 'box-dark'}`}
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    height: isFullscreen ? '100vh' : '80vh',
                    width: isFullscreen ? '100vw' : '90vw',
                    borderRadius: isFullscreen ? '0%' : '2%',
                }}
                transition={{
                    duration: 0.8,
                    // delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                style={{
                    borderRadius: "2%",
                }}
            >
                <ScrollArea className={`
                h-full w-full
                rounded-md p-4`}
                            style={{
                                overflowY: 'scroll',
                                borderRadius: "2%",
                                scrollbarWidth: "none",
                                borderImage: "linear-gradient(to right, #fbbf24, #f97316)",
                            }}
                            initial={{
                                opacity: 0,
                                scale: 0.5,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            ref={ref}
                >
                    <Name parentRef={ref}/>
                    <MyInfo/>
                </ScrollArea>
            </motion.div>
            <Button
                className="absolute bottom-10 right-10"
                onClick={() => setFullscreen(!isFullscreen)}
                variant="outline" size="icon">
                {/*<motion.div*/}
                {/*    key={isFullscreen ? "minimize" : "maximize"}*/}
                {/*>*/}
                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-minimize-2">
                        <motion.polyline
                            points={isFullscreen ? "4 14 10 14 10 20" : "15 3 21 3 21 9"}
                            animate={{points: isFullscreen ? "4 14 10 14 10 20" : "15 3 21 3 21 9"}}
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <motion.polyline
                            points={isFullscreen ? "20 10 14 10 14 4" : "9 21 3 21 3 15"}
                            animate={{points: isFullscreen ? "20 10 14 10 14 4" : "9 21 3 21 3 15"}}
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <motion.line
                            x1="14"
                            x2="21"
                            y1="10"
                            y2="3"
                            animate={{x1: isFullscreen ? 14 : 3, x2: isFullscreen ? 21 : 10, y1: isFullscreen ? 10 : 21, y2: isFullscreen ? 3 : 14}}
                            transition={{duration: 0.3, ease: "easeInOut"}}/>
                        <motion.line
                            x1="3"
                            x2="10"
                            y1="21"
                            y2="14"
                            animate={{x1: isFullscreen ? 3 : 14, x2: isFullscreen ? 10 : 21, y1: isFullscreen ? 21 : 10, y2: isFullscreen ? 14 : 3}}
                            transition={{duration: 0.3, ease: "easeInOut"}}/>
                    </motion.svg>
                {/*</motion.div>*/}
            </Button>
            <Background/>
        </div>
    )
}
