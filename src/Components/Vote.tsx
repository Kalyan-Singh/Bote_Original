import React, { useState } from "react";
import { WorldIDWidget } from "@worldcoin/id";
import { VerificationResponse } from "@worldcoin/id/dist/types";
import Confirmation from "./Confirmation";
import { BigNumber } from "ethers";
import { useAccount } from "wagmi";
import {keccak256} from "@ethersproject/solidity"

function Vote() {
  const {address}=useAccount();
  const [party,setparty]=useState<string | undefined>();
  const [pollID,setpollID]=useState<BigNumber |undefined >();
  const [verificationRes, setverificationRes] = useState<
    VerificationResponse | undefined
  >();
  if(verificationRes){
    return <Confirmation pollID={pollID!} party={party!} verificationRes={verificationRes}></Confirmation>
  }
  console.log(address);

  return (
    <div className="flex justify-center mt-28">
      <form>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Poll Id
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-sm"
            placeholder="Id for the poll"
            required
            onChange={(e)=>{
              setpollID(BigNumber.from(e.target.value))
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Party
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-sm"
            required
            placeholder="Party you want to vote"
            onChange={(e)=>{
              setparty(e.target.value)
            }}
          />
        </div>
        <div className="flex justify-center">

            <WorldIDWidget
              signal={address}
              onSuccess={(verificationResponse) => {
                console.log(verificationResponse);
                setverificationRes(verificationResponse);
              }} // pass the proof to the API or your smart contract
              onError={(error) => console.error(error)}
              debug={true} // to aid with debugging, remove in production
              enableTelemetry={true}
              actionId="wid_staging_978b5b53ab94088150a6fc64d5ee3912" // obtain this from developer.worldcoin.org
            />
        </div>
      </form>
    </div>
  );
}

export default Vote;
