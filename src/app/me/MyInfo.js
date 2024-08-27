import AppBar from "../../components/AppBar/AppBar";
import {motion} from "framer-motion";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Background from "../background/background";
import * as React from "react";

export default function MyInfo() {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = hours < 12 ? "morning" : hours < 18 ? "afternoon" : "evening";
    return (
        <div className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    h-full w-full">
            <h2
                className="
                        text-4xl
                        font-bold text-center
                        w-full
                        "
            >
                Good {timeOfDay},
                <span className="text-blue-500">&nbsp;I&apos;m</span>
            </h2>
            <h1
                className="
                        text-6xl h-60 p-3 grid
                        font-bold text-center text-transparent bg-clip-text
                        sm:text-6xl lg:text-6xl justify-center items-center
                        w-full animated-gradient
                        "
                style={{
                    backgroundImage: "linear-gradient(to right, #fbbf24, #f97316)",
                }}
            >
                Wenqian Zhang
            </h1>
            <h2
                className="
                        text-4xl
                        font-bold text-center
                        w-full
                        "
            >
                <span className="font-bold text-center text-transparent bg-clip-text animated-gradient"
                      style={{
                          backgroundImage: "linear-gradient(to right, #a855f7, #f43f5e)",
                      }}
                >
                    Welcome
                </span>
                &nbsp;to my personal website
            </h2>

        </div>
    )

}