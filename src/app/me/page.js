"use client";
import * as React from "react"
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Background from "../background/background";
import {motion, useScroll} from "framer-motion";
import {useEffect, useRef} from "react";
import {useTheme} from "next-themes";
import AppBar from "../../components/AppBar/AppBar";
import Name from "./name";
import MyInfo from "./MyInfo";

export default function Home() {
    const tags = Array.from({ length: 100 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
    )
    const ref = useRef(null);

    const {resolvedTheme} = useTheme()

    return (
        <div
            className="flex justify-center items-center"
        >
            <AppBar />
            <motion.div
                className={`box ${resolvedTheme === 'light' ? 'box-light' : 'box-dark'}`}
                initial={{
                    opacity: 0,
                    scale: 0.5,
            }}
                animate={{ opacity: 1,
                    scale: 1,
            }}
                // transition={{
                //     duration: 0.8,
                //     delay: 0.5,
                //     ease: [0, 0.71, 0.2, 1.01]
                // }}
                style={{
                    borderRadius: "2%",
                    // border: "5px solid transparent",
                    // borderImage: "linear-gradient(to right, rgba(100, 0, 0, 0) 0%, rgba(0, 100, 0, 1) 100%)",
                    // borderImageSlice: 1,
                    // backgroundPosition: "50% 100%",
                    // backgroundRepeat: "no-repeat",
                }}
            >
                <ScrollArea className="h-[200px] w-[350px] rounded-md p-4"
                            style={{
                                width: "90vw",
                                height: "80vh",
                                overflowY: 'scroll',
                                borderRadius: "2%",
                                scrollbarWidth: "none",
                                borderImage: "linear-gradient(to right, #fbbf24, #f97316)",
                            }}
                            ref={ref}
                >
                    <Name parentRef={ref}/>
                    <MyInfo/>
                </ScrollArea>
            </motion.div>
            <Background/>
        </div>
    )
}
