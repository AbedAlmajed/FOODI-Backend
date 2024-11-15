// import React from 'react';
// import Slider from 'react-slick';
// import { FaStar } from 'react-icons/fa';

// // Slick slider settings
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 768, // Tablets and larger devices
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480, // Mobile devices
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     feedback: "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable.",
//     rating: 4.9,
//     reviews: "18.6k"
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     feedback: "The ambiance and the quality of food at Foodi were beyond expectations. Truly a delightful dining experience!",
//     rating: 4.8,
//     reviews: "15k"
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     feedback: "Foodi offers a remarkable blend of taste and service. Every dish was a masterpiece, and the service was top-notch.",
//     rating: 4.7,
//     reviews: "20k"
//   },
//   // Add more testimonials as needed
// ];

// const Testimonials = () => {
//   return (
//     <div className="section-container">
//       <h2 className="title">What Our Customers Say About Us</h2>
//       <Slider {...sliderSettings} className="testimonial-slider">
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="p-4 md:p-6">
//             <blockquote className="my-4 md:my-5 text-secondary leading-relaxed">
//               {testimonial.feedback}
//             </blockquote>
//             <div className="space-y-2">
//               <h5 className="text-lg font-semibold">{testimonial.name}</h5>
//               <div className="flex items-center gap-1 md:gap-2 justify-center">
//                 {[...Array(5)].map((_, index) => (
//                   <FaStar
//                     key={index}
//                     className={`w-4 h-4 md:w-5 md:h-5 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                   />
//                 ))}
//                 <span className="font-medium">{testimonial.rating}</span>
//                 <span className="text-gray">({testimonial.reviews} Reviews)</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;















import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

// Slick slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768, // Tablets and larger devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/feedback');
        const approvedFeedback = response.data.filter(feedback => feedback.isApproved);
        setTestimonials(approvedFeedback);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="section-container">
      <h2 className="title">What Our Customers Say About Us</h2>
      <Slider {...sliderSettings} className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="p-4 md:p-6">
            <blockquote className="my-4 md:my-5 text-secondary leading-relaxed">
              {testimonial.feedback}
            </blockquote>
            <div className="space-y-2">
              {/* <h5 className="text-lg font-semibold">{testimonial.userId.name}</h5> */}
              <h5 className="text-lg font-semibold">
  {testimonial.userId?.name ? testimonial.userId.name : null}
</h5>

              <div className="flex items-center gap-1 md:gap-2 justify-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      index < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="font-medium">{testimonial.rating.toFixed(1)}</span>
                <span className="text-gray">({testimonial.createdAt.split('T')[0]})</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;