import { useDispatch, useSelector } from 'react-redux'
import scss from './GameOver.module.scss'
import {  selectStatus } from 'redux/selectors'
import { setAction } from 'redux/actionSlice'
import { setPickedAction } from 'redux/pickedActionSlice'
import { setStatus } from 'redux/statusSlice'
import clsx from 'clsx'


export const GameOver = () => {
const dispatch = useDispatch()

const status = useSelector(selectStatus)

const handleClick = () =>{
dispatch(setAction('unselected'))
dispatch(setPickedAction('unselected'))
dispatch(setStatus('unselected'))
}

    return (
        <div className={scss.container}>
<div className={scss.wrapper}>
{status=== 'win' && <p className={clsx(scss.text, [scss.win])}>You win</p>}
            {status=== 'lose' && <p className={clsx(scss.text, [scss.lose])}>You lose</p>}
            {status=== 'draw' && <p className={scss.text}> It's a draw</p>}
            <button className={scss.btn} onClick={handleClick}>play again</button>
</div>
        </div>
    )
}

