import styles from "@/styles/Home.module.css";

import Image from "next/image";
import { atom, useRecoilValue } from "recoil";

const componentAtom = atom<void>({
  key: "component",
  default: new Promise((resolve) => setTimeout(resolve, 5000)), // Example data fetching or async operation
});

export default function Component() {
  // This will suspend the component
  // Recoil is being used just to demonstrate the issue happen when this component being suspended
  // If you use React Developer Tools to suspend this component manually, the issue will still happen
  useRecoilValue(componentAtom);
  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className={styles.thirteen}>
        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
      </div>
    </div>
  );
}
