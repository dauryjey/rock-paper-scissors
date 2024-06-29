import { HeaderScoreLayout } from "./components/HeaderScoreLayout"
import { LogoSquare } from "./components/LogoSquare"
import { RulesButton } from "./components/RulesButton"
import { ScoreSquare } from "./components/ScoreSquare"

function App() {
  return (
    <div id="app-container">
      <header className="flex justify-center p-4 w-full">
        <HeaderScoreLayout>
          <LogoSquare />
          <ScoreSquare score={0} />
        </HeaderScoreLayout>
      </header>
      <main></main>
      <footer>
        <RulesButton />
      </footer>
    </div>
  )
}

export default App
