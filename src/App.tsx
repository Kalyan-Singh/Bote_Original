import { useState } from "react";
import Navbar from "./Components/Navbar";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider,midnightTheme } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { Routes, Route } from "react-router-dom";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Vote from "./Components/Vote";
import CreateAPoll from "./Components/CreateAPoll";
import MyPolls from "./Components/MyPolls";
import Results from "./Components/Results";
import Home from "./Components/Home";
const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  const [test, settest] = useState<Boolean | null>(null);
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={midnightTheme({
          accentColor:'#1d4fd8',
          borderRadius:'large'
        })}>
          <Navbar></Navbar>
          <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/vote" element={<Vote></Vote>} />
          <Route path="/createapoll" element={<CreateAPoll></CreateAPoll>} />
          <Route path="/mypolls" element={<MyPolls></MyPolls>} />
          <Route path="/results" element={<Results></Results>} />
        </Routes>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
