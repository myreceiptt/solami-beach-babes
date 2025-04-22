import { AnchorProvider, Program, Idl } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { WalletContextState } from "@solana/wallet-adapter-react";
import idl from "./idl.json"; // Adjust the path if necessary

// Replace this with your program's public key
const programID = new PublicKey("Bk44xgKmyPvTc5yCbWGNjpfTZPTRVTg9F8kmmPZjfkca");

export const getAnchorProgram = (
  connection: Connection,
  wallet: WalletContextState
) => {
  if (!wallet.publicKey || !wallet.signTransaction) {
    throw new Error("Wallet not fully initialized.");
  }

  const provider = new AnchorProvider(
    connection,
    {
      publicKey: wallet.publicKey,
      signTransaction: wallet.signTransaction,
      signAllTransactions:
        wallet.signAllTransactions || (() => Promise.resolve([])), // Ensure a default no-op function if undefined
    },
    AnchorProvider.defaultOptions()
  );

  const program = new Program(idl as Idl, programID, provider);
  return program;
};
