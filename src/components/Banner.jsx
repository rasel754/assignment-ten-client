import banner11 from '../assets/banner11.jpg'
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">


        <div id="slide1" className="carousel-item relative w-full bg-[url('../assets/banner11.jpg)'] bg-cover bg-center bg-no-repeat h-[550px]">
            <div >
            <h1 className="text-4xl font-extrabold pt-8">Explore the Artistry of Glass</h1>
            
            <p>Captivate your audience with the mesmerizing beauty and versatility of glass art. From delicate stained glass masterpieces to contemporary fused glass creations, immerse yourself in a world where transparency meets color and light dances with form. Discover the rich history, intricate techniques, and endless possibilities that await within the realm of glass artistry.</p>
            </div>
          {/* <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
