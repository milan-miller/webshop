import './category-item.styles.scss';

const CategoryItem = ({ category: { id, image, title } }) => {
	return (
		<div key={id} className='category-container'>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${image})`,
				}}
			/>
			<div className='category-container__body'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};
export default CategoryItem;
