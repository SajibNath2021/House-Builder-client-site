import React from 'react';
import './Testimonials.css'

import wilson from '../../../img/review1.jpeg';
import review2 from '../../../img/review2.jpeg';
import review3 from '../../../img/review3.jpeg';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            quote:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Wilson Harry',
            from: 'California',
            img: wilson,
        },
        {
            quote:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Ema Gomez',
            from: 'California',
            img: review2,
        },
        {
            quote:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Aliza Farari',
            from: 'California',
            img: review3,
        },
    ];
    return (
        <section className="testimonials my-5 py-5">
            <div className="container ImgQuato">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Clients Feedback</h5>
                    <h1>
                        What Our Customer Say’s
                        <br />About Our Product{' '}
                    </h1>
                </div>
                <div className="row mt-5">
                    {testimonialData.map((testimonial) => (
                        <Testimonial testimonial={testimonial} key={testimonial.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;