import { useState } from "react";
import Head from "next/head";
import { Input, Typography } from "@material-tailwind/react";

const validateSin = (sin: string) => {
  // SIN must be 9 digits
  if (sin.length !== 9) {
    return false;
  }

  // SIN must be all digits
  if (!/^\d+$/.test(sin)) {
    return false;
  }

  // Luhn Algorithm
  const sinDigits = sin.split("").map(Number);
  const sum = sinDigits
    .map((digit, index) => {
      // Double every second digit only
      if (index % 2 === 0) {
        return digit;
      }

      const doubled = digit * 2;

      // If the doubled digit is greater than 9, add the digits
      return doubled > 9 ? 1 + (doubled % 10) : doubled;
    })
    .reduce((acc, curr) => acc + curr, 0);

  // The sum of all digits must be divisible by 10
  return sum % 10 === 0;
};

export default function Home() {
  const [sin, setSin] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSin(e.target.value);
    setIsValid(validateSin(e.target.value));
  };

  return (
    <>
      <Head>
        <title>Elective Take Home</title>
      </Head>
      <div className="relative min-h-[100vh] w-screen p-8">
        <div className="pt-56 text-center">
          <Typography variant="h1" color="blue-gray" placeholder={undefined}>
            Sin Checker
          </Typography>
        </div>
        <div className="justify-items-center pt-10">
          <div className="w-96">
            <Input
              error={!isValid && sin.length > 0}
              success={isValid}
              onChange={onChange}
              value={sin}
              label="SIN Number"
              type="text"
              placeholder="Enter a SIN Number"
              crossOrigin={undefined}
            />
          </div>
        </div>
      </div>
    </>
  );
}
