import { useState } from "react"
import { HeaderScoreLayout } from "./components/HeaderScoreLayout"
import { LogoSquare } from "./components/LogoSquare"
import { RulesButton } from "./components/RulesButton"
import { ScoreSquare } from "./components/ScoreSquare"
import { RulesModal } from "./components/RulesModal"

function App() {
  const [showRules, setShowRules] = useState<boolean>(false)

  const handleShowRules = () => {
    setShowRules(!showRules)
  }

  return (
    <div id="app-container">
      <header className="flex justify-center p-4 w-full">
        <HeaderScoreLayout>
          <LogoSquare />
          <ScoreSquare score={0} />
        </HeaderScoreLayout>
      </header>
      <main>
        <div className="flex">
          <div></div>
        </div>
      </main>
      <footer>
        <RulesButton handleClick={handleShowRules} />
        <RulesModal showRules={showRules} handleShowRules={handleShowRules} />
      </footer>
    </div>
  )
}

export default App
