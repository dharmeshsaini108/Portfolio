import React from 'react';
import vg from "../assets/2.webp";
// Importing icons like this (below)
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* First section */}
      <div className='home' id='home'>
        <main>
          <h1>codesage</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>
      {/* Second section */}
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>We are your one and solution to the tech problems you face every day.We are leading tech company whose aim is to increase the problem solving ability in children.</p>
        </div>
      </div>
      {/* Third section */}
      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium molestias molestiae, assumenda quidem mollitia velit at culpa quae corporis odio consequatur voluptates temporibus saepe vero ducimus quisquam officiis. Facilis maxime earum suscipit labore nulla ea nostrum, laborum esse porro ab quos illo inventore quam, exercitationem nam laboriosam minus aperiam voluptates eligendi quisquam voluptatibus harum. Consequatur aliquam, nam beatae corrupti nulla magni sint quo quia omnis. Nihil rem reprehenderit eveniet! Placeat natus ad sit omnis cupiditate facere praesentium nisi id dolorum! Aspernatur accusantium cumque fuga ex, beatae saepe magnam iusto in eos repellendus distinctio facilis illum ullam unde alias molestias qui.</p>
        </div>
      </div>

      {/* Fourth section */}
      <div className="home4" id='brands'>
        <div>

          <h1>Brands</h1>

          <article>
{/* here below `animation delay is used for differnt animations timings in all icons ,OK😊` */}
            <div style={{
              animationDelay:"0.3s",
            }}>
              <AiFillGoogleCircle/> 
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s",
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"0.7s",
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay:"1s",
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>

          </article>
        </div>
      </div>



    </>
  )
};

export default Home