import {v4} from 'uuid';

const ShoeCard = (props) => {
    const {title, price, images } = props.item
    const itemId = v4();
    console.log(itemId)
    return (
        <div className="col-4">
            <div className="card">
            {/* <img src={images[1]}
                className="card-img-top img-fluid" alt={title}/> */}
            <div id={itemId} className="carousel slide carousel-dark carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target={`#${itemId}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={`#${itemId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target={`#${itemId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                <div className="carousel-inner">
                  
                    {/* {images.map((img) => {
                        <div className="carousel-item active">
                            <img src={img} className="d-block w-100" alt={title}/>
                        </div>
                    })} */}

                    <div className="carousel-item active">
                        <img src={images[0]} className="d-block w-100" alt={title}/>
                    </div>
                    <div className="carousel-item">
                        <img src={images[1]} className="d-block w-100" alt={title}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${itemId}`}  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${itemId}`}  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>

            <div className="card-body">
                <p className="card-text">{title}</p>
                <p className="card-text">{price}</p>
                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
            </div>
            </div>
        </div>
    )
}

export default ShoeCard