import React from 'react';
import './home.css';
import bg from '../food_bg.jpeg';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>


            <div className='body'>

                <div className='food_bg'>
                    
                    <div className="bg_text">
                        <div className='f'>It's not just food, it's an experience</div>
                        <div className="s">Order your favourite food from your favourite restaurant <b>Foodie Lab</b> and check out your favourite food items </div>
                        <div className="t">Check out your favourite foods :</div>
                    </div>

                </div>



                <div className="cardbody">
                    <div className="card">
                        <div className="image">
                            <img width="345px" src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/466bbb03-01a1-47a7-b060-5f34601fdbb7_882931.jpg" alt="" />
                        </div>



                        <div className="text">
                            <h2 className='homeh2'>Pizza</h2>
                            <p>Indulge in our freshly baked, handmade pizzas, crafted with the finest ingredients. Perfectly crisp crusts, delicious toppings, and irresistible flavors!</p>
                        </div>
                        <Link className='order' to={'/Pizza'}>
                            Explore

                        </Link>

                    </div>
                    <div className="card">
                        <div className="image">
                            <img width="345px" src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=" alt="" />
                        </div>



                        <div className="text">
                            <h2 className='homeh2'>Burgers</h2>
                            <p>Indulge in our delicious, flame-grilled burgers, layered with premium toppings, crispy lettuce, and melty cheese—perfectly satisfying in every bite!</p>
                        </div>
                        <Link className='order' to={'/Burger'}>
                            Explore

                        </Link>

                    </div>
                    <div className="card">
                        <div className="image">
                            <img width="345px" src="https://cdn.shopify.com/s/files/1/0517/4609/files/HD-Coca-Cola-Photos_large.jpg?v=1544425170" alt="" />
                        </div>



                        <div className="text">
                            <h2 className='homeh2'>Drinks</h2>
                            <p>Explore our delightful range of drinks, from creamy milkshakes and refreshing smoothies to zesty juices and chilled beverages.</p>
                        </div>
                        <Link className='order' to={'/Drinks'}>
                            Explore

                        </Link>
                    </div>




                </div>
                <div className='cardbody'>


                    <div className="card">
                        <div className="image">
                            <img width="345px" src="https://media.istockphoto.com/id/510482834/photo/sandwich-bread-tomato-lettuce-and-yellow-cheese.jpg?s=612x612&w=0&k=20&c=Q69t_vK73KXddedlvN4RmFcPL34mCwEqprJvbDTyOWo=" alt="" />
                        </div>



                        <div className="text">
                            <h2 className='homeh2'>Sandwich</h2>
                            <p>Indulge in our freshly made, handmade sandwiches, crafted with the finest ingredients. Perfectly crisp crusts, delicious toppings, and irresistible flavors!</p>
                        </div>
                        <Link className='order' to={'/sandwich'}>
                            Explore

                        </Link>

                    </div>
                    <div className="card">
                        <div className="image">
                            <img width="345px" src="https://nfcihospitality.com/wp-content/uploads/2019/04/chole-bhture.jpg" alt="" />
                        </div>



                        <div className="text">
                            <h2 className='homeh2'>Chhole Bhature</h2>
                            <p>Savory, aromatic, authentic, flavorful, handcrafted, delicious, traditional, spicy, royal, gourmet, hearty, rich, fragrant, exquisite, irresistible.</p>
                        </div>
                        <Link className='order' to={'/Chhole bhature'}>
                            Explore

                        </Link>

                    </div>
                    <div className="card">
                        <div className="image">
                            <img width="345px" src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2023-12/Small-Scale-Chocolate-Cakes_1409.jpg?itok=A-KawtMI" alt="" />
                        </div>



                        <div className="text">
                            <h2 className='homeh2'>Cakes</h2>
                            <p>Decadent, moist, rich, fluffy, delightful, scrumptious, heavenly, sweet, creamy, luscious, celebratory, artisanal, exquisite, perfect.</p>
                        </div>
                      <Link className='order' to={'/Cakes'}>
                            Explore

                        </Link>
                    </div>

                </div>




            </div>
        </div>



    )
}

export default Home;