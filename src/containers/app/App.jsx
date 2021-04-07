import styles from './App.module.css';
import { Nav } from '../nav/Nav';
import { Sidenav } from '../sidenav/Sidenav';
import { Content } from '../content/Content';

function App() {

//   async function post() {
//     let resp = await fetch('api/products', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'product5'
//       })
//     })
  
//     console.log(resp);
//   }

//   useEffect( () => {
//      post();

//       fetch('api/products').then( res => res.json()).then( res => {
//         console.log(res);
//       })
//       .catch(err => console.error(err));

//   });

  return (
    <div className={ styles.App }>
      <div className={ styles.nav__container }>
        <Nav/>
      </div>
      <div className={ styles.sidenav__container }>
        <Sidenav />
      </div>
      <div className={ styles.content__container }>
        <Content />
      </div>      
      {/* <Loader loading = { loading } />
      <NotificationContainer notifications = { notifications } /> */}
    </div>
  );
}

export default App;
