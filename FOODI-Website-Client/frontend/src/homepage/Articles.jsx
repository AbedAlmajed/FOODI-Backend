// import React from 'react';

// // Sample articles array
// const articles = [
//   {
//     id: 1,
//     title: "The Benefits of Eating Fresh Vegetables",
//     image: "/Articles/vegetables.mp4",
//     description: "Discover how incorporating fresh vegetables into your diet can improve your overall health and well-being.",
//   },
//   {
//     id: 2,
//     title: "Superfoods to Boost Your Immune System",
//     image: "/Articles/superfoods.mp4",
//     description: "Learn about the top superfoods that can help strengthen your immune system and keep you healthy.",
//   },
//   {
//     id: 3,
//     title: "Healthy Recipes for a Balanced Diet",
//     image: "/Articles/recipes.mp4",
//     description: "Explore delicious and nutritious recipes that can help you maintain a balanced diet while enjoying your meals.",
//   },
// ];

// const Articles = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-6 text-center">Health Food Articles</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <div className="relative w-full" style={{ paddingTop: '120%' }}>
//               <video
//                 src={article.image}
//                 alt={article.title}
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 loop
//                 muted
//                 playsInline
//                 autoPlay // Auto-play the video
//               >
//                 <source src={article.image} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2 hover:text-green">{article.title}</h3>
//               <p className="text-gray-700 mb-4">{article.description}</p>
//               <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                 Read More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Articles;






import React from 'react';

const articles = [
  {
    id: 1,
    title: "The Benefits of Eating Fresh Vegetables",
    image: "/Articles/vegetables.mp4",
    description: "Discover how incorporating fresh vegetables into your diet can improve your overall health and well-being.",
  },
  {
    id: 2,
    title: "Superfoods to Boost Your Immune System",
    image: "/Articles/superfoods.mp4",
    description: "Learn about the top superfoods that can help strengthen your immune system and keep you healthy.",
  },
  {
    id: 3,
    title: "Healthy Recipes for a Balanced Diet",
    image: "/Articles/recipes.mp4",
    description: "Explore delicious and nutritious recipes that can help you maintain a balanced diet while enjoying your meals.",
  },
];

const Articles = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Health Food Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative w-full" style={{ paddingTop: '120%' }}>
                <video
                  src={article.image}
                  alt={article.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src={article.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 hover:text-green">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;