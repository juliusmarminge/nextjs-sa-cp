"use server";

import { exec } from "child_process";

export async function run() {
    const child = exec("echo 'Hello, world!'");
    child.stdout?.on("data", (data) => {
        console.log(data.toString());
    });
    child.stderr?.on("data", (data) => {
        console.error(data.toString());
    });
    child.on("close", (code) => {
        console.log(`Child process exited with code ${code}`);
    });
}
