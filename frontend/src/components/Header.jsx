import logoImg from '../assets/quiz-logo.png';

export default function Header() {
    return(
        <header>
            <img src={logoImg} alt='react-logo' />
            <h1>REACTQUIZZ</h1>
        </header>
    );
}