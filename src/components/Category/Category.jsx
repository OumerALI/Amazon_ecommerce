
// import { CategoryInfos } from './CategoryInfo/CategoryInfos';
import CategoryCard from './CategoryCard';
import style from './Category.module.css'

function Category() {
  return (
    
    <section className={style.category__container}>
      {CategoryInfos?.map((infos) => {
        
        return <CategoryCard  data = {infos} />;
      })}
    </section>
  );
}

export default Category;