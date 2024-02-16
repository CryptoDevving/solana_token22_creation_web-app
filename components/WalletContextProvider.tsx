import {FC, ReactNode} from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
import {GlowWalletAdapter, PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
desc
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletContextProvider: FC<{ children: ReactNode }> = ({children}) => {
    const wallets = [new PhantomWalletAdapter(),
        new GlowWalletAdapter()];

    const endpoint = web3.clusterApiUrl("mainnet-beta");

    return (

        <ConnectionProvider endpoint={endpoint} >
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default WalletContextProvider;
