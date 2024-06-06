"use client";
import { useState } from "react";
import questionsData from "@/app/questions.json";
import Number from "./Number";
import Image from "next/image";

interface IQuestion {
  id: number;
  question: string;
  answer: string;
}

export default function Home() {
  const [number, setNumber] = useState<number | null>(null);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (number !== null && !selectedNumbers.includes(number)) {
      const question = questionsData.questions.find((q) => q.id === number);
      setSelectedQuestion(question || null);
      setSelectedNumbers([...selectedNumbers, number]);
      console.log("Submitted number:", number);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-300 via-violet-100 to-emerald-300 p-4">
        <Image
          src="/techtrix.jpg"
          alt="techtrix"
          height={100}
          width={100}
          className="absolute left-2 rounded-md shadow-md"
        />
        <div className="bg-neutral-200 p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Lets play Quiz❓
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="number"
              min={1}
              max={70}
              onChange={handleChange}
              className="mb-4 p-2 border bg-slate-50 border-gray-300 rounded-md w-full"
              placeholder="Enter question number"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
          {selectedQuestion ? (
            <div className="absolute top-[50%] left-[20%] right-[10%] border-t border-gray-200">
              <p className="text-[3rem] font-semibold">
                {selectedQuestion.question}
              </p>
            </div>
          ) : (
            number !== null && (
              <p className="mt-6 text-red-500">
                No question found for the given number.
              </p>
            )
          )}
        </div>
      </div>
      <div className="h-[25vh] bg-gradient-to-r from-blue-300 via-violet-100 to-emerald-300"></div>
      <Number selectedNumbers={selectedNumbers} />
    </>
  );
}
