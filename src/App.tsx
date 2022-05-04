import { List } from './components/List/List'
import styles from './App.module.css';

function App() {
  return (
    <div className={ styles.appContainer }>
      <header className={ styles.header }>This is the invest app</header>
      <div className={ styles.mainContainer }>
        <section className={ styles.listSection }>
          <List/>
        </section>
        <section className={ styles.detailsSection }>

        </section>
      </div>
    </div>
  );
}

export default App;
