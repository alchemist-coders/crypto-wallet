import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";

import { Web3Context } from "../utils/Web3Provider";

import crypto from "../assets/crypto.svg";

const welcome = () => {
  const { connect, account } = useContext(Web3Context);

  return (
    <>
      <Navbar />
      <main className="h-screen p-8 pt-24 grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-start gap-8">
          <h3 className="text-4xl text-red-500 font-semibold">Just a Wallet</h3>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            ipsam tempora inventore obcaecati voluptate eaque natus, blanditiis
            et molestiae, at provident numquam dignissimos. In aut sapiente nam
            iure, facilis ducimus. Non itaque at magnam nobis autem debitis?
            Autem impedit et numquam mollitia blanditiis vel asperiores corrupti
            possimus voluptate eius ad maiores ab dolor nesciunt, facere,
            perspiciatis magnam esse voluptatum rerum! Magnam perferendis minima
            quod omnis laborum molestiae fuga fugiat saepe ex, veniam beatae
            necessitatibus, corrupti voluptate perspiciatis unde, repudiandae
            culpa a cum sit quisquam ipsa cupiditate nisi? Nihil, provident
            iste.
          </p>
          {account ? (
            <Link href="/wallet">
              <a className="self-center bg-red-500 text-2xl text-white px-8 py-2 rounded-3xl">
                Open Wallet
              </a>
            </Link>
          ) : (
            <button
              onClick={connect}
              className="self-center bg-red-500 text-2xl text-white px-8 py-2 rounded-3xl"
            >
              Get Started
            </button>
          )}
        </div>
        <Image src={crypto} priority />
      </main>
    </>
  );
};

export default welcome;
