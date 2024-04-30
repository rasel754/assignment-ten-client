const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">


        <div style={{ backgroundImage: 'url("https://i.ibb.co/2hhXyNh/banner11.jpg")',}} id="slide1" className="carousel-item relative w-full h-[550px] grid justify-center items-center text-center">
            <div className=' text-white space-y-4' >
            <h1 className="text-4xl font-extrabold text-lime-400	">Explore the Artistry of Glass</h1>
            <div>
            <p className='w-3/5 mx-auto text-emerald-300 font-medium text-xl'>Captivate your audience with the mesmerizing beauty and versatility of glass art. From delicate stained glass masterpieces to contemporary fused glass creations, immerse yourself in a world where transparency meets color and light dances with form. Discover the rich history, intricate techniques, and endless possibilities that await within the realm of glass artistry.</p>
            <button className="btn btn-active btn-accent mt-5">Explore Now</button>
            </div>
            </div>
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div style={{ backgroundImage: 'url("https://i.ibb.co/Cw8FjGy/banner12.jpg")',}} id="slide2" className="carousel-item relative w-full h-[550px] grid justify-center items-center text-center">
           <div className=' text-white space-y-4' >
            <h1 className="text-4xl font-extrabold text-black	">Unfold the Beauty of Paper Crafts</h1>
            <div>
            <p className='w-3/5 mx-auto text-rose-900 font-medium text-xl'>Courney into the realm of paper crafts, where imagination knows no bounds and creativity takes flight. Delve into the art of origami, where a single sheet of paper transforms into intricate shapes and creatures. Explore the elegance of quilling, where delicate strips of paper weave together to create stunning designs. Experience the joy of papercutting, where precision and finesse bring intricate patterns to life. Let the beauty of paper unfold before your eyes.</p>
            <button className="btn btn-active btn-accent mt-5">Explore Now</button>
            </div>
            </div>
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div style={{ backgroundImage: 'url("https://i.ibb.co/682HjMW/banner13.jpg")',}} id="slide3" className="carousel-item relative w-full h-[550px] grid justify-center items-center text-center">
        <div className=' text-white space-y-4' >
            <h1 className="text-4xl font-extrabold text-lime-400	">Crafting with Passion and Precision</h1>
            <div>
            <p className='w-3/5 mx-auto text-cyan-300	 font-medium text-xl'>At Glass & Paper Palette, we are passionate about craftsmanship. Each piece we create is infused with dedication, skill, and a love for the art form. From the meticulous precision of glass cutting to the intricate detailing of paper folding, every step of our process is imbued with care and creativity. Join us on a journey where passion meets precision, and witness the magic that happens when artistry and dedication intertwine.</p>
            <button className="btn btn-active btn-accent mt-5">Explore Now</button>
            </div>
            </div>
          {/* <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
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
