import imageRules from "../assets/image-rules.svg"

interface RulesModalProps {
  showRules: boolean
  handleShowRules: () => void
}

export const RulesModal = ({ showRules, handleShowRules }: RulesModalProps) => {
  return (
    <div
      className={`flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-10 p-4 ${
        showRules ? "block" : "hidden"
      }`}
      onClick={handleShowRules}
    >
      <article className="bg-white p-8 rounded-lg">
        <section className="flex justify-between items-center">
          <p className="font-bold uppercase text-3xl text-[var(--score-text)]">
            Rules
          </p>
          <input
            type="button"
            className="font-bold uppercase text-4xl text-gray-300 cursor-pointer"
            value="×"
            onClick={handleShowRules}
          />
        </section>
        <section className="mt-6">
          <img src={imageRules} alt="Game Rules" />
        </section>
      </article>
    </div>
  )
}
