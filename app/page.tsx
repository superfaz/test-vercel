import fs from "node:fs";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {Object.entries(process.env).map(([key, value]) => (
            <span key={key}>
              {key} = {value}
              <br />
            </span>
          ))}

          <hr />

          {fs.readdirSync(".").map((file) => (
            <span key={file}>
              {file}
              <br />
            </span>
          ))}
        </p>
      </div>
    </main>
  );
}
