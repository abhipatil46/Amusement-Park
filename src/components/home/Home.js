import React from 'react'
import '../home/home.css'
import s3 from '../images/slider3.jpg';
import s4 from '../images/slider4.jpg';
import s2 from '../images/slider2.jpg';
function Home() {
    return (
        <div>
        <div className="carousel m-5">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={s3} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={s4} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={s2} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

<div>
    <p className="m-5">An interesting and fun water park in India, Wonderla is a favourite among young kids as well as older
         people for the variety of rides they offer. The park has both a water park and theme park, but unlike
          most combined parks, there hasn't been a cut in the number of rides of both types. Many find it
           difficult to finish all the rides in one day but come out having the best time. The park has
            extremely high thrill rides for daredevils and people who like to test their limits. Entry fare: 
            Changes according to the season. Must try rides: Wavy and vertical fall, Equinox , Insanity,
             Y-Scream and all other high thrill rides.</p>
</div>
 </div>          
        
    )
}

export default Home
