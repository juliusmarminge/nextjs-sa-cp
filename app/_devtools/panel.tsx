"use client"

import { useTransition } from "react";
import { run } from "./actions";

export default function Panel() {
    const [running, startRunning] = useTransition();
    return (
        <button disabled={running} onClick={() => {
            startRunning(async () => {
                await run();
            });
        }}>
            Run
        </button>
    );
}