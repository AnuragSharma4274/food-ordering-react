import React from 'react';
import { useState } from 'react';
import './Rest.css';

function Restocard({ img, restoname, restoprice }) {
  const handleOrder = () => {
     alert(`Review your order and proceed to payment \nItem: ${restoname} \nPrice: Rs.${restoprice}`);
   
  };

  return (
    <div className="restcard">
      <div className="restimage">
        <img width="345px" src={img} alt={restoname} />
      </div>
      <div className="resttext">
        <h2 className="resthomeh2">{restoname}</h2>
        <p className="address">Rs.{restoprice}</p>
        <div className="add" onClick={handleOrder}>Order</div>
      </div>
    </div>
  );
}




const Pizza = ()=> {
  return (
    <div>
      <div className="restbody">
        <Restocard
          img="https://images.squarespace-cdn.com/content/v1/5e484ab628c78d6f7e602d73/6298b58c-db25-4c96-9a43-6441d90c9542/Pizza-Napoletana.jpeg"
          restoname="Neapolitan Pizza"
          restoprice="350"
          
        />
        <Restocard
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/1200px-Pizza_Margherita_stu_spivack.jpg"
          restoname=" Pizza Margherita"
          restoprice="450"
        />
        <Restocard
          img="https://www.seriouseats.com/thmb/c9291mRIx6n1mtaxIRuypUe4mhs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__02__20170216-detroit-style-pizza-47-1500x1125-1-233d75e6021048b3bf3cf28bd59d310b.jpg"
          restoname="Detroit-style Pizza"
          restoprice="550"
        />
        <Restocard
          img="https://www.allrecipes.com/thmb/gKD4hlJ26TYEvBTrYzX2SiF95Io=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-15022-veggie-pizza-DDMFS-4x3-hero-3dabf0783ef544eeaa23bdf28b48b178.jpg"
          restoname="Veggie Pizza"
          restoprice="400"
        />
        <Restocard
          img="https://upload.wikimedia.org/wikipedia/commons/c/c5/Sfincione_palermitano.jpg"
          restoname="Scilian Pizza"
          restoprice="300"
        />
      </div>
    </div>
  );
};


const Burger = () => {
  return (
    <div>
      <div className="restbody">
        <Restocard
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg"
          restoname="Cheeseburger"
          restoprice="60"
        />
        <Restocard
          img="https://hips.hearstapps.com/hmg-prod/images/turkey-burger-index-64873e8770b34.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"
          restoname=" Turkey burger"
          restoprice="80"
        />
        <Restocard
          img="https://blog.swiggy.com/wp-content/uploads/2025/01/Image-2_-veggie-burger.png"
          restoname="Veggie Burger"
          restoprice="50"
        />
        <Restocard
          img="https://blog.swiggy.com/wp-content/uploads/2025/01/Image-10_-Mushroom-Burger-1024x538.png"
          restoname="Mushroom Burger"
          restoprice="80"
        />
     
      </div>
    </div>
  );
};
const Drinks = () => {
  return (
    <div>
      <div className="restbody">
        <Restocard
          img="https://images.immediate.co.uk/production/volatile/sites/30/2021/11/Ginger-beer-ef08bb1.jpg?quality=90&webp=true&crop=1007px,0px,6057px,4035px&fit=1300,866"
          restoname="Ginger beer"
          restoprice="99"
        />
        <Restocard
          img="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/kale-smoothie-b96d533.jpg?quality=90&webp=true&resize=440,400"
          restoname=" Vegan kale smoothie"
          restoprice="120"
        />
        <Restocard
          img="https://www.spicypunch.com/wp-content/uploads/2019/06/lassi-recipe-1280x720.jpg"
          restoname="Kulhad lassi"
          restoprice="60"
        />
        <Restocard
          img="https://images.immediate.co.uk/production/volatile/sites/30/2021/10/Frozen-blackberry-smoothie-829927b.jpg?quality=90&webp=true&resize=700,636"
          restoname="Blackberry smoothie"
          restoprice="400"
        />
        <Restocard
          img="https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Cranberry-spritz-c1c0840.jpg?quality=90&webp=true&resize=700,636"
          restoname="Cranberry Spritz"
          restoprice="300"
        />
      </div>
    </div>
  );
};
const Sandwich = () => {
  return (
    <div>
      <div className="restbody">
        <Restocard
          img="https://hips.hearstapps.com/hmg-prod/images/club-sandwich-index-67c06a0f16e38.jpg?crop=0.566xw:1.00xh;0.252xw,0&resize=1200:*"
          restoname="Club Sandwich"
          restoprice="50"
        />
        <Restocard
          img="https://images.immediate.co.uk/production/volatile/sites/30/2024/05/Monte-Cristo-sandwich-9534bba.jpg?quality=90&webp=true&fit=1300,866"
          restoname=" Monte-Cristo Sandwich"
          restoprice="100"
        />
        <Restocard
          img="https://static01.nyt.com/images/2021/07/12/dining/kc-chickpea-salad-sandwich/kc-chickpea-salad-sandwich-jumbo.jpg"
          restoname="Chickpea Salad Sandwich"
          restoprice="60"
        />
        <Restocard
          img="https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Panuozzo-sandwich-2fc89cb.jpg?quality=90&webp=true&fit=1300,866"
          restoname="Panuozzo sandwich"
          restoprice="100"
        />
        
      </div>
    </div>
  );
};


const Cb = () => {
  return (
    <div className='Cb_body'>
      <div className="restbody">
        
        <Restocard
          img="https://nfcihospitality.com/wp-content/uploads/2019/04/chole-bhture.jpg"
          restoname="Chhole Bhature"
          restoprice="60"
        />
      </div>
    </div>
  );
};



const Cakes = () => {
  return (
    <div>
      <div className="restbody">
        <Restocard
          img="https://images.squarespace-cdn.com/content/v1/5e484ab628c78d6f7e602d73/6298b58c-db25-4c96-9a43-6441d90c9542/Pizza-Napoletana.jpeg"
          restoname="Neapolitan Pizza"
          restoprice="350"
        />
        <Restocard
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/1200px-Pizza_Margherita_stu_spivack.jpg"
          restoname=" Pizza Margherita"
          restoprice="450"
        />
        <Restocard
          img="https://www.seriouseats.com/thmb/c9291mRIx6n1mtaxIRuypUe4mhs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__02__20170216-detroit-style-pizza-47-1500x1125-1-233d75e6021048b3bf3cf28bd59d310b.jpg"
          restoname="Detroit-style Pizza"
          restoprice="550"
        />
        <Restocard
          img="https://www.allrecipes.com/thmb/gKD4hlJ26TYEvBTrYzX2SiF95Io=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-15022-veggie-pizza-DDMFS-4x3-hero-3dabf0783ef544eeaa23bdf28b48b178.jpg"
          restoname="Veggie Pizza"
          restoprice="400"
        />
        <Restocard
          img="https://upload.wikimedia.org/wikipedia/commons/c/c5/Sfincione_palermitano.jpg"
          restoname="Scilian Pizza"
          restoprice="300"
        />
      </div>
    </div>
  );
};

export { Pizza, Burger,Drinks,Sandwich,Cb,Cakes};
