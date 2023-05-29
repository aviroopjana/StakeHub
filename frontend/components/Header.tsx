import { useEffect, useState } from "react";
import { Beans } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Header(): JSX.Element {
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect() as { disconnect: () => void };

  useEffect(() => {
    if (!isConnected) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, [isConnected]);

  return (
    <section className={styles.main}>
      <section className={styles.header}>
        <div className={styles.header_logoSection}>
          <h1 className={styles.title}>Stake Hub</h1>
          <Beans fontSize="20px" className={styles.beans} />
        </div>
        <div className={styles.header_btn}>
          {!isLoggedIn ? (
            <button className={styles.connectBtn} onClick={disconnect}>
              DISCONNECT WALLET
            </button>
          ) : (
            <>
              {connectors.map((connector) => (
                <button
                  disabled={!connector.ready}
                  key={connector.id}
                  onClick={() => connect({ connector })}
                  className={styles.connectBtn}
                >
                  CONNECT WALLET
                </button>
              ))}
            </>
          )}
        </div>
      </section>
    </section>
  );
}
