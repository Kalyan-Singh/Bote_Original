import { BigNumber } from "ethers";
import React, { useState } from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { Bote } from "./Contracts";
import { abi_Bote } from "./Contracts";

function CreateAPoll() {
  const [duration, setduration] = useState<BigNumber | null>();
  const [parties, setparties] = useState<string[] | null>();
  const { config } = usePrepareContractWrite({
    address: Bote,
    abi: abi_Bote,
    functionName: "addPoll",
    args: [duration!,parties!],
  });

  const { write, isSuccess, isLoading } = useContractWrite(config);


  function partyHandler(e: React.ChangeEvent<HTMLInputElement>) {
    let Parties = e.target.value.split(" ");
    setparties(Parties);
  }

  if(isSuccess){
    return (
      <div className='justify-center flex mt-44 text-blue-700'>Poll was created successfully</div>
    )
  }


  if (isLoading) {
    return (
      <div role="status" className="flex justify-center mt-52">
        <svg
          aria-hidden="true"
          className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          ></path>
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          ></path>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center mt-28">
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Duration
            </label>
            <input
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-sm"
              placeholder="In Minutes"
              required
              onChange={(e) => {
                setduration(BigNumber.from(e.target.value));
              }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Parties
            </label>
            <input
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-sm"
              required
              placeholder="Space Seprated"
              onChange={partyHandler}
            />
          </div>
          <div className="flex justify-center"></div>
        </form>
      </div>
      <div className="flex justify-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={()=>write?.()}
        >
          Create
        </button>
      </div>
    </>
  );
}

export default CreateAPoll;
