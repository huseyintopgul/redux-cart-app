import './styles/Product-style.css';

const Cards = ({ handleClick, item }) => {
    const {id, title, author, price, img } = item;

    return (
        <div className='product-card'>
            <div className='product-img'>
                <img src={img} alt={title} />
            </div>
            <div className='product-detail'>
                <h2>{title}</h2>
                <h4>{author} </h4>
                <span>{price} ₺</span>
                <input type="button" name="sepete-ekle" value="Sepete Ekle" onClick={() => handleClick(item)} />
            </div>
        </div>
    )
}

export default Cards