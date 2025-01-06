"use client"

import { run } from "./actions";

export default function Panel() {
    return <button onClick={run}>Run</button>;
}