import { useDispatch, useSelector } from 'react-redux';
import scss from './RockPaperScissors.module.scss';
import { selectAction } from 'redux/selectors';
import { setAction } from 'redux/actionSlice';
import { actions } from 'redux/constants';
import { setPickedAction } from 'redux/pickedActionSlice';
import clsx from 'clsx';

export const RockPaperScissors = () => {
  const dispatch = useDispatch();
  const action = useSelector(selectAction);

  const actionPick = () => {
    const random = Math.floor(Math.random() * 10);

    switch (random) {
      case 1 || 2:
        dispatch(setPickedAction('paper'));
        break;
      case 3 || 4:
        dispatch(setPickedAction('scissors'));
        break;
      case 5 || 6:
        dispatch(setPickedAction('rock'));
        break;
      case 7 || 8:
        dispatch(setPickedAction('lizard'));
        break;
      case 9 || 10:
        dispatch(setPickedAction('spock'));
        break;
      default:
        break;
    }
  };

  const handleActionClick = action => {
    dispatch(setAction(action));
    actionPick();
  };

  return (
    <div className={scss.container}>
<button
        className={clsx(scss.action, [scss.scissors])}
        selected={action === actions.scissors}
        onClick={() => handleActionClick(actions.actionScissors)}
      >
        <div className={scss.eclipse}></div>
      </button>
      <button
        className={clsx(scss.action, [scss.spock])}
        selected={action === actions.spock}
        onClick={() => handleActionClick(actions.actionSpock)}
      >
        <div className={scss.eclipse}></div>
      </button>
      <button
        className={clsx(scss.action, [scss.paper])}
        selected={action === actions.paper}
        onClick={() => handleActionClick(actions.actionPaper)}
      >
        <div className={scss.eclipse}></div>
      </button>
<div className={scss.wrapper}>
<button
        className={clsx(scss.action, [scss.lizard])}
        selected={action === actions.lizard}
        onClick={() => handleActionClick(actions.actionLizard)}
      >
        <div className={scss.eclipse}></div>
      </button>
      <button
        className={clsx(scss.action, [scss.rock])}
        selected={action === actions.rock}
        onClick={() => handleActionClick(actions.actionRock)}
      >
        <div className={scss.eclipse}></div>
      </button>
</div>

    </div>
  );
};
