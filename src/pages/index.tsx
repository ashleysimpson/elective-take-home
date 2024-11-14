import Head from "next/head";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elective Take Home</title>
      </Head>
      <div className="relative grid min-h-[100vh] w-screen p-8">
        <div className="flex-col gap-2 pt-56 pb-40 text-center">
          <Typography variant="h1" color="blue-gray" placeholder={undefined}>
            Sin Checker
          </Typography>
        </div>
      </div>
    </>
  );
}
