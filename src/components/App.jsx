import { useSelector } from 'react-redux';
import scss from './App.module.scss'
import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';
import { RockPaperScissors } from './RockPaperScissors/RockPaperScissors';
import { selectAction, selectStatus } from 'redux/selectors';
import { GameStarted } from './GameStarted/GameStarted';
import { GameOver } from './GameOver/GameOver';
import { ModalRules } from './ModalRules/ModalRules';

export const App = () => {
const action = useSelector(selectAction)
const status = useSelector(selectStatus)
  return (
    <div className={scss.container}>
      <Layout> 
      <Header/>
      {action === 'unselected' && <RockPaperScissors/>}
      {action !== 'unselected' && <GameStarted/>}
      {status !== 'unselected' && <GameOver/>}
      <ModalRules/>
      </Layout>
    </div>
  );
};
