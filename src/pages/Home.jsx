import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import starsImg from '../img/stars.png'
import moonImg from '../img/moon.png'
import mountainBehindImg from '../img/mountains_behind.png'
import mountainFrontImg from '../img/mountains_front.png'
import { Link } from 'react-router-dom';

const Home = () => {

    const [scrollValue, setScrollValue] = useState();

    useEffect(() => {
        let value = 0;
        window.addEventListener('scroll', () => {
            value = window.scrollY;
            setScrollValue(value);
            console.log(scrollValue);
        })
    }, [scrollValue])

    return (
        <>
            <header >
                <a href="#home" className="logo">tetromino</a>
                <ul>
                    <li><a href="#home" className="active">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li>

                </ul>
            </header>
            <section className="images">
                <img src={starsImg} alt="" id="stars" style={{ left: scrollValue * .25 + 'px' }} />
                <img src={moonImg} alt="" id="moon" style={{ top: scrollValue * 1.05 + 'px' }} />
                <img src={mountainBehindImg} alt="" id="mountains_behind" style={{ top: scrollValue * 0.5 + 'px' }} />
                <h2 id="text" style={{ marginRight: scrollValue * 4 + 'px', marginTop: scrollValue * 1.5 + 'px' }}>Tetromino</h2>
                <Link to="/play" id="btn" style={{ marginTop: scrollValue * 1.5 + 'px' }}>PLAY NOW</Link>
                <img src={mountainFrontImg} alt="" id="mountains_front" style={{ top: scrollValue * 0 + 'px' }} />
            </section>
            <div className="sec">
                <h2>hello</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto sequi repellat. Quo, esse molestias ad libero neque sapiente. Aliquam saepe magnam rerum, id excepturi molestias non. Deserunt repellendus numquam veniam libero magni dignissimos fugiat, minus in quidem iste quo est a odio tenetur commodi explicabo corporis sequi ut neque! <br /><br />

                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto sequi repellat. Quo, esse molestias ad libero neque sapiente. Aliquam saepe magnam rerum, id excepturi molestias non. Deserunt repellendus numquam veniam libero magni dignissimos fugiat, minus in quidem iste quo est a odio tenetur commodi explicabo corporis sequi ut neque! <br /><br />

                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto sequi repellat. Quo, esse molestias ad libero neque sapiente. Aliquam saepe magnam rerum, id excepturi molestias non. Deserunt repellendus numquam veniam libero magni dignissimos fugiat, minus in quidem iste quo est a odio tenetur commodi explicabo corporis sequi ut neque! <br /><br />

                </p>
            </div>
        </>
    )
}

export default React.memo(Home);
