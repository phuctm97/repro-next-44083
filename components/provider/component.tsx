import { PropsWithChildren, useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

import { Context } from "./context";

export default function Component({ children }: PropsWithChildren) {
  // Provide example context after being mounted (client-side only). In real-world, some dynamic/asynchronous data fetching would be done here;
  const [context, setContext] = useState<object>();
  useEffect(() => setContext({}), [setContext]);
  return (
    <Context.Provider value={context}>
      {/* Example heavy dependencies */}
      <RecoilRoot>{children}</RecoilRoot>
    </Context.Provider>
  );
}
