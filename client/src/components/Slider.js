import Carousel from 'react-bootstrap/Carousel';
import { useGlobalContext } from '../context';


function Slider() {

  const {data,impofday} = useGlobalContext()
  console.log(data);
  const day = new Date().getDate()
  return (
    <Carousel variant="dark" className='slider'>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100"
          src="https://www.tahapaksu.com/wp-content/uploads/Opera-Background-Light-Blue.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="slide">
          <div className="testimonial">
            <h5 className="testimonial__header">Günün Anlam ve Önemi</h5>
            <blockquote className="testimonial__text">
             {impofday[day]}
            </blockquote>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://www.tahapaksu.com/wp-content/uploads/Opera-Background-Light-Blue.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="slide">
          <div className="testimonial">
            <h5 className="testimonial__header">Günün Örf ve Adeti</h5>
            <blockquote className="testimonial__text">
              {data.tradition}
            </blockquote>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://www.tahapaksu.com/wp-content/uploads/Opera-Background-Light-Blue.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="slide">
          <div className="testimonial">
            <h5 className="testimonial__header">
              Günün Protokol ve Nezaket Kuralı
            </h5>
            <blockquote className="testimonial__text" >
              {data.rule}
            </blockquote>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tahapaksu.com/wp-content/uploads/Opera-Background-Light-Blue.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="slide">
          <div className="testimonial">
            <h5 className="testimonial__header">Günün Sözü</h5>
            <blockquote className="testimonial__text">
              {data.word}
            </blockquote>
            <address className="testimonial__author">
              <img src={data.imageOfAuthor} alt="" class="testimonial__photo" />
              <h6 className="testimonial__name" >{data.author}</h6>
              <p className="testimonial__location" >
               {data.authorWho}
              </p>
            </address>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;