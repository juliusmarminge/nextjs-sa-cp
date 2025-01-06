import { initTRPC } from "@trpc/server";
import { experimental_nextAppDirCaller } from "@trpc/server/adapters/next-app-dir";

const t = initTRPC.create();

export const actionProc = t.procedure.experimental_caller(experimental_nextAppDirCaller({}));