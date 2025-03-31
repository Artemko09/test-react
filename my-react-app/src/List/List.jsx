import styles from './List.module.css'
import PropTypes from 'prop-types';

function List({ items = [], category = "Category" }) {
    const itemList = [...items];
    itemList.sort((a, b) => b.calories - a.calories);

    const listItems = itemList.map(item => (
        <li key={item.id}>
            {item.name}: &nbsp; <b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <h3 className={styles.listCategory}>{category}</h3>
            <ol className={styles.listOfItems}>{listItems}</ol>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
        name: PropTypes.string, 
        calories: PropTypes.number}))
}
export default List;