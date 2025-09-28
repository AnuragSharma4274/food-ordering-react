import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <h1 className='hey'>ABOUT US</h1>
            <div className='aboutcont'>
                <div className="cards">
                    <h2 className='abouth2'>Mission</h2>
                    <div className='abtext'>At 'Foodie Lab', our mission is simple: to bring delicious, fresh, and our hot meals right to your doorstep, whenever you crave them. We are dedicated to making every food delivery experience seamless, quick, and enjoyable. Whether it's a late-night snack or a wholesome meal, we ensure that quality and speed are always our priority.</div>
                </div>
                <div className="cards">
                    <h2 className='abouth2'>Vision</h2>
                    <div className='abtext'>We envision a world around us where everyone can enjoy our delicious food experience, no matter where they are. Our goal is to be the go-to platform for people looking for tasty meals delivered fast and fresh. We aim to lead the food delivery industry by expanding our reach and providing exceptional service that keeps our customers coming back for more.</div>
                </div>
                <div className="cards">
                    <h2 className='abouth2'>Community</h2>
                    <div className='abtext'>At 'Foodie Lab', we’re not just about food—we’re about building a community. We believe that food has the power to bring people together, and that’s why we’re committed to supporting our local restaurants, creating jobs, and giving back to the communities we serve. we are proud to make a difference in people’s lives.</div>
                </div>

            </div>
            <h1>Customer Reviews</h1>
            <div className="reviews">
                    
                    <div className="rvwcards">
                        <div className='rvwtext'>
                            <strong>Jane D.</strong> - "Foodie Lab is a game-changer! The food always arrives hot and fresh, and the delivery is super fast. My go-to for late-night cravings!"
                        </div>
                    </div>
                    <div className="rvwcards">
                        <div className='rvwtext'>
                            <strong>Michael S.</strong> - "I love the variety of restaurants on Foodie Lab. The app is easy to use, and the customer service is top-notch. Highly recommend!"
                        </div>
                    </div>
                    <div className="rvwcards">
                        <div className='rvwtext'>
                            <strong>Sarah K.</strong> - "The community focus of Foodie Lab is amazing. I feel good supporting local businesses, and the food quality is always excellent!"
                        </div>
                    </div>
                </div>
        </div>



    )
}

export default About;