import { Suspense } from "react";
import Panel from "./_devtools/panel";

export default function Home() {
  return (
    <Suspense>
      <Panel />
    </Suspense>
  );
}
