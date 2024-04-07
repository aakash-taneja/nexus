"use client";
import LoanTrendChart from "@/components/LoanChart";
import Layout from "@/components/layout";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect, useState } from "react";

export default function Home() {
  const generateRandomData = () => {
    return Array.from({ length: 10 }, (_, i) => ({
      date: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      loansOffered: Math.floor(Math.random() * 50), // Random number of loans offered
    }));
  };
  const [data, setData] = useState<any>();
  const [data2, setData2] = useState<any>();
  const [data3, setData3] = useState<any>();
  useEffect(() => {
    const t1 = generateRandomData();
    const t2 = generateRandomData();
    const t3 = generateRandomData();
    setData(t1);
    setData2(t2);
    setData3(t3);
  }, []);

  return (
    <>
      <Layout pageTitle="Home">
        <div className=" grid grid-cols-2 ">
          <div
            className="p-10 mr-3 rounded-2xl"
            style={{ background: "rgb(21,20,18)" }}
          >
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ color: "#FBA6B9" }}
            >
              Earn in just 2 simple steps
            </h2>

            <div className="grid grid-cols-1 items-end mt-12 pt-12">
              {/* <ApproveButton user={address} amount={100} /> */}
              <button
                className="mt-2 w-full text-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm   hover:bg-yellow-700"
                style={{ color: "white", background: "#411F34" }}
              >
                Step 1: Connect Your Wallet
              </button>
              <button
                className="mt-2 w-full text-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm   hover:bg-yellow-700"
                style={{ color: "white", background: "#411F34" }}
              >
                Step 2: Choose your Real Estate to lend
              </button>
            </div>
          </div>

          <div
            className=" p-10 ml-3 rounded-2xl"
            style={{ background: "rgb(21,20,18)" }}
          >
            <h2
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
              style={{ color: "#FBA6B9" }}
            >
              What&apos;s new?
            </h2>

            <p
              className="mt-4 text-md leading-6 text-gray-500"
              style={{ color: "#FBA6B9" }}
            ></p>
            <p
              className="mt-4 text-md leading-6 text-gray-500"
              style={{ color: "#FBA6B9" }}
            >
              - View your tokenized assets
            </p>
            <p
              className="mt-4 text-md leading-6 text-gray-500"
              style={{ color: "#FBA6B9" }}
            >
              - Lend your asset and earn rental income
            </p>
            <p
              className="mt-4 text-md leading-6 text-gray-500"
              style={{ color: "#FBA6B9" }}
            >
              - Invest in real world assets
            </p>

            {/* <div className="flex mt-7">
              <div
                className="my-3 mr-3 p-3 rounded-2xl shadow-lg w-[30%] flex flex-col justify-between"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgba(66,31,52,1) 0%, rgba(66,31,52,1) 100%)",
                }}
              >
                <p className="font-bold text-lg text-white">Connect</p>
              </div>
              <div
                className="my-3 mr-3 p-3 rounded-2xl shadow-lg w-[30%] flex flex-col justify-between"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgba(66,31,52,1) 0%, rgba(66,31,52,1) 100%)",
                }}
              >
                <Image
                  src="/chooseNft.svg"
                  alt="polygon"
                  width={100}
                  height={100}
                />
                <p className="font-bold text-lg text-white">Choose</p>
              </div>
              <div
                className="my-3 mr-3 p-3 rounded-2xl shadow-lg w-[30%] flex flex-col justify-between"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgba(66,31,52,1) 0%, rgba(66,31,52,1) 100%)",
                }}
              >
                <Image
                  src="/applyForLoan.svg"
                  alt="base"
                  width={100}
                  height={100}
                  // className="h-100 w-20 mb-5"
                />
                <p className="font-bold text-lg text-white">Apply</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-3 mt-6">
          <div
            className="shadow-lg relative isolate rounded-2xl overflow-hidden  py-24 mr-3"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(66,31,52,1) 0%, rgba(66,31,52,1) 100%)",
            }}
          >
            <div className="mx-auto max-w-full px-6 lg:px-8">
              <div className="mx-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
                {/* <div className="max-w-xl lg:max-w-lg"> */}
                {/* <h2 className="text-4xl font-bold tracking-tight text-white">
                    Use your RWA to get a loan
                  </h2>
                  <p className="mt-4 text-md leading-4 text-lg text-gray-300">
                    Use your tokenized RWA as collateral to borrow crypto from
                    lenders. Repay your loan, and you get your Asset back.
                  </p> */}
                {/* </div> */}

                <div className="text">
                  <h1 className="text-5xl font-bold text-zinc-100">36</h1>
                  <p className="text-zinc-100 text-2xl">
                    Tokenized Properties listed today...
                  </p>
                </div>
                <div> {data && <LoanTrendChart data={data} />}</div>
              </div>
            </div>
            {/* <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div> */}
          </div>
          <div
            className="shadow-lg relative isolate rounded-2xl overflow-hidden  py-24 mx-3"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(66,31,52,1) 0%, rgba(66,31,52,1) 100%)",
            }}
          >
            <div className="mx-auto max-w-full px-6 lg:px-8">
              <div className="mx-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
                {/* <div className="max-w-xl lg:max-w-lg"> */}
                {/* <h2 className="text-4xl font-bold tracking-tight text-white">
                    Use your RWA to get a loan
                  </h2>
                  <p className="mt-4 text-md leading-4 text-lg text-gray-300">
                    Use your tokenized RWA as collateral to borrow crypto from
                    lenders. Repay your loan, and you get your Asset back.
                  </p> */}
                {/* </div> */}

                <div className="text">
                  <h1 className="text-5xl font-bold text-zinc-100">$250</h1>
                  <p className="text-zinc-100 text-2xl">Invested today...</p>
                </div>
                <div> {data2 && <LoanTrendChart data={data2} />}</div>
              </div>
            </div>
            {/* <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div> */}
          </div>
          <div
            className="shadow-lg relative isolate rounded-2xl overflow-hidden  py-24 ml-3"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(66,31,52,1) 0%, rgba(66,31,52,1) 100%)",
            }}
          >
            <div className="mx-auto max-w-full px-6 lg:px-8">
              <div className="mx-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
                {/* <div className="max-w-xl lg:max-w-lg"> */}
                {/* <h2 className="text-4xl font-bold tracking-tight text-white">
                    Use your RWA to get a loan
                  </h2>
                  <p className="mt-4 text-md leading-4 text-lg text-gray-300">
                    Use your tokenized RWA as collateral to borrow crypto from
                    lenders. Repay your loan, and you get your Asset back.
                  </p> */}
                {/* </div> */}

                <div className="text">
                  <h1 className="text-5xl font-bold text-zinc-100">$100</h1>
                  <p className="text-zinc-100 text-2xl">
                    Interst yeild today...
                  </p>
                </div>
                <div> {data3 && <LoanTrendChart data={data3} />}</div>
              </div>
            </div>
            {/* <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
}
