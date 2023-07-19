import { ethers } from "ethers";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const Web3ProviderNetwork = createWeb3ReactRoot("network");

export function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Supported Ethereum network chain IDs
});

export function Web3Provider({ children }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        {children}
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}
