import ProductList from "@containers/ProductList";
import Filter from '@components/Filter';
import styles from '@styles/Home.module.scss';
export default function Home() {
  return (
       <div className={styles.Home}>
          
          <div>
          <Filter/>
          </div>
         
          <div className={styles['home-product-list']}>
          <ProductList/>
           </div>
        
        </div>
   
  );
}
 