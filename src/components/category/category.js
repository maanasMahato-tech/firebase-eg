import './category.styles.scss';

const Category = ({ categoryItems }) => {
    return (
        <div className='category-container' key={categoryItems.id}>
            <div className='background-image' style={{
                backgroundImage: `url(${categoryItems.imageUrl})`
            }} />
            <div className='category-body-container'>
                <h2>{categoryItems.title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    );
}

export default Category;