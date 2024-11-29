
import { CategoryInfos } from './CategoryInfo'; // Ensure this file exports an array
import CategoryCard from './CategoryCard'; // Ensure this file exports a valid component
import style from './Category.module.css';

function Category() {
  return (
    <section className={style.category__container}>
      {CategoryInfos?.map((infos, index) => {
        return (
          <CategoryCard 
            key={infos.id || index} // Add a unique key, fallback to index if `infos.id` is not available
            data={infos} // Pass `infos` to `CategoryCard` as `data`
          />
        );
      })}
    </section>
  );
}

export default Category;
