function App() {
  return (
    <div id="app-container">
      <header className="p-4">
        <div className="flex justify-between gap-8 border-4 rounded-lg border-[hsl(217,16%,45%)] px-4 py-2">
          <div className="flex flex-col justify-center p-2 leading-none">
            <span className="font-bold">ROCK</span>
            <span className="font-bold">PAPER</span>
            <span className="font-bold">SCISSORS</span>
          </div>
          <div className="flex justify-center items-center flex-col bg-indigo-100 py-3 px-6 rounded-md">
            <p className="font-medium text-xs tracking-wider text-[hsl(229,64%,46%)]">
              SCORE
            </p>
            <p className="font-bold text-4xl text-[hsl(229,25%,31%)]">0</p>
          </div>
        </div>
      </header>
      <main></main>
      <footer>
        <input type="button" value="RULES" />
      </footer>
    </div>
  )
}

export default App
