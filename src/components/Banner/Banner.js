import React from "react";
import banner from "../../images/banner.jpg";
import watch from "../../images/watch.jpg";
import watch2 from "../../images/watch2.jpg";
import "./Banner.css";
function Banner() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel container my-4 slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={watch} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={watch2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={banner} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
    // <div className="banner_container my-5 container">
    // <div
    //   id="carouselExampleSlidesOnly"
    //   class="carousel container slide"
    //   data-ride="carousel"
    // >
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img class="d-block w-100" src={banner} alt="First slide" />
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src={watch} alt="Second slide" />
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src={watch2} alt="Third slide" />
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
}

export default Banner;
