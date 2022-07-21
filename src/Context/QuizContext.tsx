import React, { createContext, useState } from "react";
import EndScreen from "../Components/EndScreen";
import QuizStart from "../Components/QuizStart";
import { ContextItems } from "./ContextInterface";

export const QuizContexts = createContext<ContextItems | null>(null);

const sampleContext : ContextItems = {
    finalScore: 0,
    setFinalScore: 0,
};

export const QuizContextss = () =>(
    <QuizContexts.Provider value={sampleContext}>
        <QuizStart/><EndScreen/>
    </QuizContexts.Provider>
);

