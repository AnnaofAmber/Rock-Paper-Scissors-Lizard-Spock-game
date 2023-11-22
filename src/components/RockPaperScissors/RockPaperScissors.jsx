import { useDispatch, useSelector } from 'react-redux'
import scss from './RockPaperScissors.module.scss'
import { selectAction } from 'redux/selectors'
import { setAction } from 'redux/actionSlice'
import { actions } from 'redux/constants'
import { setPickedAction } from 'redux/pickedActionSlice'
import clsx from 'clsx'

export const RockPaperScissors = () =>{
    const dispatch = useDispatch()
    const action = useSelector(selectAction)
    
    const actionPick = () =>{
        const random = Math.floor(Math.random() * 10);
        if(random === 1 || random === 2 || random === 3 ){
            dispatch(setPickedAction('paper'))
        }
        else if(random === 4 || random === 5 || random === 6){
            dispatch(setPickedAction('scissors'))
        }
        else {
            dispatch(setPickedAction('rock'))
        }

    }
    
    const handleActionClick = action => {
        dispatch(setAction(action))
        actionPick()
        
    }


    return(
<div className={scss.container}>
            <button className={clsx(scss.action, [scss.paper])} selected={action === actions.paper} onClick={()=>handleActionClick(actions.actionPaper)}><div className={scss.eclipse}></div>
            </button>
            <button className={clsx(scss.action, [scss.scissors])} selected={action === actions.scissors} onClick={()=>handleActionClick(actions.actionScissors)}><div className={scss.eclipse}></div></button>
            <button className={clsx(scss.action, [scss.rock])} selected={action === actions.rock} onClick={()=>handleActionClick(actions.actionRock)}><div className={scss.eclipse}></div></button>
            
        </div>
    )
}