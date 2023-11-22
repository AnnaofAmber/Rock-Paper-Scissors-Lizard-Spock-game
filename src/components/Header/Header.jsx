import { WinScore } from 'components/WinScore/WinScore'
import scss from './Header.module.scss'


export const Header = () => {
    return(
     <header className={scss.header}>
        <h1 className={scss.title}> Rock Paper Scissors</h1>
        <WinScore/>
     </header>
    )
}