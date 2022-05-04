import useInvestContext from '../../hooks/useInvestContext'
import { ListItem } from '../ListItem/ListItem'
import styles from './List.module.css'

export const List = () => {
  const { listArray } = useInvestContext()

  return (
    <ul className={ styles.listContainer }>
        { 
          listArray.length !== 0 ? 
            listArray.map(entry => <ListItem entry={ entry }/> )
            :
            listArray.length === 0 && <div>no data</div> 
        }
    </ul>
  )
}
