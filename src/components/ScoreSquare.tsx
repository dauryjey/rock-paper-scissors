interface ScoreSquareProps {
  score: number
}

export const ScoreSquare = ({ score = 0 }: ScoreSquareProps) => {
  return (
    <div className="flex justify-center items-center flex-col bg-indigo-100 py-3 px-6 rounded-md">
      <p className="font-medium text-xs tracking-wider text-[var(--dark-text)] uppercase">
        score
      </p>
      <p className="font-bold text-4xl text-[var(--score-text)]">{score}</p>
    </div>
  )
}
