import list from '../data';
import Cards from './Cards';

const Products = ({handleClick}) => {
    return (
        <section>
            {
                list.map((item) => {
                    return <Cards key={item.id} {...item} handleClick={handleClick} />
                })
            }
        </section>
    )
}

export default Products