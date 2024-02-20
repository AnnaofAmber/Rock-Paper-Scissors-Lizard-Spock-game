import { useSelector } from 'react-redux'
import scss from './WinScore.module.scss'
import { selectScore } from 'redux/selectors'



export const WinScore = () => {
const score = useSelector(selectScore)

    return(
        <div className={scss['score-container']}>
            <p className={scss['score-text']}>Score <span className={scss['score-current']}>{score}</span></p>
        </div>
    )
}