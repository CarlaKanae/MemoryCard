import { cards } from '../../../data/cards';
import { Grid } from '../../Grid';
import './style.css'


export function App() {
  return <div className='app'>
    <Grid cards={cards}/>
  </div>
}