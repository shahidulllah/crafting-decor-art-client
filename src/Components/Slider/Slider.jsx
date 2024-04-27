

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full rounded-b-xl h-[40vh] lg:h-[95vh]">
                <div id="slide1" className="carousel-item relative w-full  ">

                    {/* title */}
                    <div className="bg-black/10 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
                        <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center animate__animated animate__rubberBand animate__slow"></h1>
                        <h1 className="lg:text-3xl text-center animate__animated animate__fadeInUp animate__slow"></h1>
                    </div>
                    <img src="https://i.postimg.cc/wjWtjWKX/slider1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="bg-black/5 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
                        <h1 className="animate__animated animate__fadeInDown animate__slow text-3xl lg:text-6xl font-serif font-bold text-center "></h1>
                        <h1 className="lg:text-3xl text-center animate__slow animate__animated animate__fadeInUp"></h1>
                    </div>
                    <img src="https://i.postimg.cc/g0nxXvdf/slider2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="bg-black/35 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
                        <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center animate__slow animate__animated animate__fadeInUp ">Collect Your Best Choice View</h1>
                        <h1 className="lg:text-3xl text-center animate__slow animate__animated animate__fadeInUp  p-6 rounded bg-yellow-500">Art & Craft spearing now</h1>
                    </div>
                    <img src="https://i.postimg.cc/WbwFQNXf/slider3.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Slider;
