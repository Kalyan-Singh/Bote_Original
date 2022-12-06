export const Bote = "0xB1B97101D8C56C2C0ed3fb38d76bDFCA05077159" as const;
export const abi_Bote = [
  {
    inputs: [
      { internalType: "contract IWorldID", name: "_worldId", type: "address" },
      { internalType: "string", name: "_actionId", type: "string" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "Ended", type: "error" },
  { inputs: [], name: "InvalidNullifier", type: "error" },
  { inputs: [], name: "NotStarted", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: true,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "PollCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "PollStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256[]",
        name: "result",
        type: "uint256[]",
      },
    ],
    name: "ResultAnnounced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "confirmation",
        type: "string",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_duration", type: "uint256" },
      { internalType: "string[]", name: "_parties", type: "string[]" },
    ],
    name: "addPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "pollID", type: "uint256" }],
    name: "getParties",
    outputs: [{ internalType: "string[]", name: "", type: "string[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_pollID", type: "uint256" }],
    name: "getState",
    outputs: [
      { internalType: "enum BoteOriginal.State", name: "", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "pollID", type: "uint256" }],
    name: "getVotes",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "myPolls",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "PollID", type: "uint256" },
          { internalType: "address", name: "creator", type: "address" },
          { internalType: "string[]", name: "parties", type: "string[]" },
          { internalType: "uint256[]", name: "votes", type: "uint256[]" },
          {
            internalType: "enum BoteOriginal.State",
            name: "c_state",
            type: "uint8",
          },
          { internalType: "uint256", name: "duration", type: "uint256" },
        ],
        internalType: "struct BoteOriginal.Poll[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_pollID", type: "uint256" }],
    name: "startPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "input", type: "address" },
      { internalType: "uint256", name: "root", type: "uint256" },
      { internalType: "uint256", name: "nullifierHash", type: "uint256" },
      { internalType: "uint256[8]", name: "proof", type: "uint256[8]" },
      { internalType: "uint256", name: "_pollID", type: "uint256" },
      { internalType: "string", name: "_partyName", type: "string" },
    ],
    name: "verifyAndExecute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
