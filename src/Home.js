import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img 
            
            className="home__image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt = "" 
            / >

            <div className="home__row">
                <Product
                    id="123567654"
                    title="The Lean Start up"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                />
                <Product
                    id="123567654"
                    title="The Lean Start up"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123567654"
                    title="The Lean Start up"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                />
                <Product
                    id="123567654"
                    title="The Lean Start up"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                />
                <Product
                    id="123567654"
                    title="The Lean Start up"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123567654"
                    title="The Lean Start up"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                />
                
            </div>
           
        </div>
    )
}

export default Home
