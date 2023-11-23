import logo from '../assets/logo.png';

const Header = ()=> {
    return (
        <header id='header'>
         <img src={logo} alt="Big money" />   
         <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header;