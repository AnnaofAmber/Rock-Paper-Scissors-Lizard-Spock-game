import { WinScore } from 'components/WinScore/WinScore'
import scss from './Header.module.scss'


export const Header = () => {
    return(
     <header className={scss.header}>
        <a href='/' className={scss.title}> Rock Paper Scissors Lizard Spock</a>
        <WinScore/>
     </header>
    )
}