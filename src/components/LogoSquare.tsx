import logo from "../assets/logo.svg"

export const LogoSquare = () => {
  return (
    <div className="flex flex-col justify-center p-2 leading-none">
      <img src={logo} alt="Rock Paper Scissors" className="w-20" />
    </div>
  )
}
