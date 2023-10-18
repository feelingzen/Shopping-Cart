import { NavBar } from './Navbar'
import '../Styles/home.css'
import { Link } from "react-router-dom"
import jordans from '../assets/jordans.png'

function Home () {
    return (
        <>
            <NavBar />
            <div className="home">
                <div className="text">                
                    <h1>Providing you with the best quality sneakers</h1>
                    <p>Step into Kickz and experience the fusion of fashion, function, and personality in every shoe. Join us on our journey in making the newest and trendiest sneakers available to everyone!</p>
                    <Link to='store'>Step In</Link>
                </div>
                <img src={jordans} alt="" />
            </div>
            <div className="reviews">
                <h2>What Our Customers Think</h2>
                <div className="review">
                    <p>&apos;&apos;Kickz is an absolute gem! The incredible 
                        variety, friendly staff, and unbeatable quality keep 
                        me coming back. It&apos;s my go-to destination for stylish, 
                        affordable footwear. Highly recommended!&apos;&apos; <br /><span> - Famous Person</span>
                    </p>
                </div>
                <div className="review">
                    <p>&apos;&apos;Kickz is an absolute gem! The incredible 
                        variety, friendly staff, and unbeatable quality keep 
                        me coming back. It&apos;s my go-to destination for stylish, 
                        affordable footwear. Highly recommended!&apos;&apos; <br /><span> - Famous Person</span>
                    </p>
                </div>
                <div className="review">
                    <p>&apos;&apos;Kickz is an absolute gem! The incredible 
                        variety, friendly staff, and unbeatable quality keep 
                        me coming back. It&apos;s my go-to destination for stylish, 
                        affordable footwear. Highly recommended!&apos;&apos; <br /><span> - Famous Person</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home