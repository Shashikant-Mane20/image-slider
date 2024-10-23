import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../app.css';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function App() {
    const images = [{
      id: 1,
      name: "Dog 1",
      url: "https://www.arrelic.com/frontend/media/service-slider-1.webp",
    },
    {
      id: 2,
      name: "Dog 2",
      url: "https://www.arrelic.com/frontend/media/service-slider-2.webp"
    },
    {
      id: 3,
      name: "Dog 3",
      url: "https://www.arrelic.com/frontend/media/service-slider-3.webp"
    },
    {
      id: 4,
      name: "Dog 4",
      url: "https://www.arrelic.com/frontend/media/service-slider-4.webp"
    },
    {
      id: 5,
      name: "Laptop",
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  
    ]
    return (
      <>
        <div className='App  max-w-[800px] h-[500px] w-full m-auto py-2 px-4 relative'>
          <div className="container w-full h-full  bg-center bg-cover">
            <Swiper className='mySwiper'
            // Added some custom styling
              // style={{
              //   "--swiper-pagination-color": "#FFBA08",
              //   "--swiper-pagination-bullet-inactive-color": "#999999",
              //   "--swiper-pagination-bullet-inactive-opacity": "1",
              //   "--swiper-pagination-bullet-size": "16px",
              //   "--swiper-pagination-bullet-horizontal-gap": "10px",
  
  
              // }}
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={{
                // type: 'progressbar',
                clickable: true,
                // dynamicBullets: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
  
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {images.map((item) => {
                return (
                  <SwiperSlide key={item.id} className=' max-w-[1000px] max-h-[520px] w-full h-full m-auto py-8 px-2 bg-center bg-cover relative'>
                    <img src={item.url} alt={item.name} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div> 
        
        
       
  
      </>
    )
  }
  
  export default App