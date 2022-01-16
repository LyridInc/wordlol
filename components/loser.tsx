import Guesses from "./guesses";
import Link from "next/link";

export interface LoserProps {
  guesses: string[];
  answer: string;
}

const Loser: React.FC<LoserProps> = ({ guesses, answer }) => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold">You Lose!</h1>
        <h2>
          The answer was <span className="font-bold">{answer}</span>
        </h2>
        <Guesses guesses={guesses} answer={answer} />
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Play Again
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Loser;