'use client';

import React, { useState } from "react";
import CarouselTest from "./CarouselTest";

const tabData = [
    { label: "Tree", bg: "bg-primary/90" },
    { label: "Sun", bg: "bg-emerald-600/90" },
    { label: "Whale", bg: "bg-amber-600/90" },
    { label: "Snow", bg: "bg-blue-600/90" },
];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full mx-auto mt-8">
            <div className="flex border-b max-w-lg mx-auto">
                {tabData.map((tab, idx) => (
                    <button key={tab.label}
                            className={`flex-1 py-2 px-4 text-center font-lg transition-colors duration-200 focus:outline-none border-b-2 rounded-lg ${
                                activeTab === idx
                                    ? `${tab.bg} border-primary text-white`
                                    : "bg-white text-gray-800 hover:bg-orange hover:text-white"
                                }`}
                            onClick={() => setActiveTab(idx)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4 text-center">
                <div className="text-lg font-medium text-gray-700">
                    Active tab: {tabData[activeTab].label}
                </div>
            </div>
            <div className="mt-8">
                <CarouselTest activeCategory={tabData[activeTab].label} />
            </div>
        </div>
    );
} 