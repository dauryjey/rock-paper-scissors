interface RulesButtonProps {
  handleClick: () => void
}

export const RulesButton = ({ handleClick }: RulesButtonProps) => {
  return (
    <input
      type="button"
      value="RULES"
      className="border-solid border-2 border-white tracking-widest font-medium px-6 py-2 rounded-lg text-xs cursor-pointer"
      onClick={handleClick}
    />
  )
}
