import Logo from '../assets/avdgBO01.svg'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="logo" />
        <h1>AI Chef</h1>
    </header>
  )
}

export default Header