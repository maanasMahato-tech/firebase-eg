import Category from '../category/category';
import './categories.styles.scss';

function Categories({ categories }) {
    return (
        <div className='categories-container'>
            {categories.map((category) => {
                return (
                    <Category key={category.id} categoryItems={category} />
                );
            })}
        </div>
    )
}

export default Categories;