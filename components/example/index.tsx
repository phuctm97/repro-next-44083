import dynamic from "next/dynamic";
import { Suspense, useContext } from "react";

import { Context } from "../provider";
import { Fallback } from "./fallback";

const Component = dynamic(() => import("./component"));

// Example component that depends on Context (see ../provider/context.ts)
export function Example() {
  const context = useContext(Context);
  if (!context) return <Fallback />; // Render fallback when context is not available (dynamic import/async data fetching is still in progress)
  // [ISSUE] Everything works fine until this line
  // <Component /> (see ./component.tsx) will suspend for 5 seconds (e.g. fetch data, etc.)
  // Within those 5 seconds, <Fallback /> SHOULD be rendered, but IT IS NOT, nothing is rendered
  // Only after 5 seconds, <Component /> is render 
  return (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  );
}
