'use client';

import React, { useState } from "react";
import Carousel from "./Carousel";

const tabData = [
    { label: "Installation" },
    { label: "Sun" },
    { label: "Whale" },
    { label: "Snow" },
];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full mx-auto mt-8">
            <div className="flex max-w-xs md:max-w-md lg:max-w-lg mx-auto gap-0">
                {tabData.map((tab, idx) => (
                    <button key={tab.label}
                            className={`flex-1 py-1 md:py-2 px-1 md:px-2 lg:px-4 text-center text-xs md:text-sm lg:text-lg transition-colors duration-200 focus:outline-none border-b-2 rounded-lg ${
                                activeTab === idx
                                    ? "bg-primary border-primary text-white"
                                    : "bg-transparent text-gray-800 border-transparent hover:bg-red/75 hover:text-white"
                                }`}
                            onClick={() => setActiveTab(idx)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-8">
                <Carousel activeCategory={tabData[activeTab].label} />
            </div>
        </div>
    );
} 