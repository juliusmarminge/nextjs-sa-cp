"use server";

import { exec } from "child_process";

import { actionProc } from "../trpc";
import { TRPCError } from "@trpc/server";

const env = process.env.VERCEL_ENV ?? "development";

const devtoolAction = (allowedEnvs:string[]) => {
    return actionProc.use(({ next }) => {
        if (!allowedEnvs.includes(env)) {
            throw new TRPCError({
                code: "FORBIDDEN",
                message: `This action is not allowed in ${env}`,
            });
        }
        return next();
    });
};

export const run = devtoolAction(["development"]).mutation(async ({ input }) => {       
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
});
