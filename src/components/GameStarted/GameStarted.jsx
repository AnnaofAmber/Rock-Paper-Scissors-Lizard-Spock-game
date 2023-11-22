import { useDispatch, useSelector } from 'react-redux'
import scss from './GameStarted.module.scss'
import clsx from "clsx"
import { selectAction, selectPickedAction, selectStatus } from 'redux/selectors'
import { setStatus } from 'redux/statusSlice'
import { useEffect } from 'react'
import { setScore } from 'redux/scoreSlice'

export const GameStarted = () =>{
    const dispatch = useDispatch()
    const action = useSelector(selectAction)
    const pickedAction = useSelector(selectPickedAction)
    const status = useSelector(selectStatus)

    useEffect(()=>{
        const statusPick = () =>{
            if(action === 'paper'){
                if(pickedAction === 'paper'){
                    dispatch(setStatus('draw'))
                }
                else if (pickedAction === 'scissors'){
                    dispatch(setStatus('lose'))
                }
                else{
                    dispatch(setStatus('win'))
                    dispatch(setScore(0.5))
                }
            }
            if(action === 'scissors'){
                if(pickedAction === 'paper'){
                    dispatch(setStatus('win'))
                    dispatch(setScore(0.5))
                }
                else if (pickedAction === 'scissors'){
                    dispatch(setStatus('draw'))
                }
                else{
                    dispatch(setStatus('lose'))
                }
            }
            if(action === 'rock'){
                if(pickedAction === 'paper'){
                    dispatch(setStatus('lose'))
                }
                else if (pickedAction === 'scissors'){
                    dispatch(setStatus('win'))
                    dispatch(setScore(0.5))
                }
                else{
                    dispatch(setStatus('draw'))
                }
            }
        }

        statusPick()
      
    }, [action, dispatch,pickedAction])

    return(
        <div className={scss.container}>
<div className={scss['action-container']} >
    <div className={clsx(scss.status,{[scss.win]:status === 'win', [scss.lose]: status=== 'lose'})}></div>
<div className={clsx(scss.action, {
            [scss.paper]:action === 'paper', [scss.scissors]:action === 'scissors', [scss.rock]:action === 'rock',
        })}></div>
        <p className={scss.text}>YOU PICKED</p>
</div>

<div className={scss['action-container']}>
{pickedAction === 'unselected' && <div className={scss.unselected}></div>}
<div className={clsx(scss.action, {
            [scss.paper]:pickedAction === 'paper', [scss.scissors]:pickedAction === 'scissors', [scss.rock]:pickedAction === 'rock'
        })}></div>
    <p className={scss.text}>THE HOUSE PICKED</p>
</div>

        </div>
    )
}