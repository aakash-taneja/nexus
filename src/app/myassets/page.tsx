"use client";
import Layout from "@/components/layout";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useAccount } from "wagmi";
import { useContractRead } from "wagmi";
// import { NFT } from "../utils/constants";
import { usePublicClient } from "wagmi";
import { Alchemy, Network } from "alchemy-sdk";

export default function MyNFTs() {
  //   const { address } = useAccount();
  //   const publicClient = usePublicClient();
  const [nftByAddress, setNftByAddress] = useState<any>();

  //   const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  let wallet = "0xc0f184cc590ef2e414675e03e80ed32f312b57e9";
  let totalSupply = 10;

  const chains: any = {
    1: {
      alchemyChain: Network.ETH_MAINNET,
    },
    137: {
      alchemyChain: Network.MATIC_MAINNET,
    },
  };
  const getNftsByAddress = async (address: any) => {
    const nftPromises = Object.keys(chains).map(async (chain: any) => {
      const settings = {
        apiKey: "vnA-7rIYqhwArKLfBN_qAu7XCquJ0Sw-", // Replace with your Alchemy API Key.
        network: chains[chain].alchemyChain,
      };
      const alchemy = new Alchemy(settings);
      const nfts = await alchemy.nft.getNftsForOwner(address);
      return nfts.ownedNfts;
    });

    try {
      const nftArrays = await Promise.all(nftPromises);
      const combinedNfts = nftArrays.flat(); // Flatten the arrays
      setNftByAddress(combinedNfts);
      setLoading(false);
      console.log(combinedNfts);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching NFTs:", error);
    }
  };

  useEffect(() => {
    getNftsByAddress("0x26a5A637dae1487e6A0a677fFcf4E93C52A5bdc9");
  }, []);

  return (
    <Layout pageTitle="Select one of your Real Estate to get it listed">
      <section>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {nftByAddress.length > 0 &&
              nftByAddress.map((nft: any, index: any) => (
                // {console.log(nft)}
                <Link
                  key={index}
                  //   href={`/nft?Contract=${NFT.contract}&Id=${nft.NFTId}`}
                  href={`/asset`}
                >
                  <li className="relative">
                    <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                      <img
                        src={`${`https://api.decentraland.org/v2/parcels/0/${nft.tokenId}/map.png?size=24&width=1024&height=1024`}`}
                        alt=""
                        className="pointer-events-none object-cover group-hover:opacity-75"
                      />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for {nft.NFTId}
                        </span>
                      </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      Token: {nft.tokenId}
                    </p>
                    <p className="pointer-events-none block text-sm font-medium text-gray-500">
                      {nft.NFTName}
                    </p>
                  </li>
                </Link>
              ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}
