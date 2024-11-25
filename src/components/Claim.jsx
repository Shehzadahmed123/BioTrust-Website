// import React from "react";

// const Claim = () => {
//   const claimcard = [
//     {
//       img: "https://cdn.shopify.com/s/files/1/0009/2900/5634/files/60-day-money-back-guarantee.png?33286",
//       text: "60-Day Money Back Guarantee",
//     },
//     {
//       img: "https://cdn.shopify.com/s/files/1/0009/2900/5634/files/Complete_-5-Collagen-Protein.png?33316",
//       text: "Complete, 5-Collagen Protein",
//     },
//     {
//       img: "https://cdn.shopify.com/s/files/1/0009/2900/5634/files/Hormone_-Glutena-and-Soy-Free_0cfd5c3d-c8a2-4659-ba48-bd631a05e7e5.png?347326",
//       text: "Hormone & Gluten-Free & non-GMO",
//     },
//     {
//       img: "https://cdn.shopify.com/s/files/1/0009/2900/5634/files/never-clumps_609b1d6f-1c62-4cb9-8fe5-725c0dc114bb.png?34732https://cdn.shopify.com/s/files/1/0009/2900/5634/files/60-day-money-back-guarantee.png?33286",
//       text: "Never Clumps",
//     },
//   ];
//   return (
//     <>
//       <div className="col-12 d-flex claimcard-bg-color">
//         {claimcard.map((item, index) => (
//           <div className="col-lg-3 col-md-3  claimcard">
//             <img className="img-fluid" src={item.img} />
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Claim;



import React from "react";

const Claim = () => {
  const claimcard = [
    {
      img: "https://cdn.shopify.com/s/files/1/0009/2900/5634/files/60-day-money-back-guarantee.png?33286",
      text: "60-Day Money Back Guarantee",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0009/2900/5634/files/Complete_-5-Collagen-Protein.png?33316",
      text: "Complete, 5-Collagen Protein",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0009/2900/5634/files/Hormone_-Glutena-and-Soy-Free_0cfd5c3d-c8a2-4659-ba48-bd631a05e7e5.png?347326",
      text: "Hormone & Gluten-Free & non-GMO",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0009/2900/5634/files/never-clumps_609b1d6f-1c62-4cb9-8fe5-725c0dc114bb.png?34732https://cdn.shopify.com/s/files/1/0009/2900/5634/files/60-day-money-back-guarantee.png?33286",
      text: "Never Clumps",
    },
  ];

  return (
    <div className="mt-5 claimcard-bg-color ">
      <div className="row g-0">
        {claimcard.map((item, index) => (
          <div className="col-lg-3 col-md-3 col-sm-6 " key={index}>
            <div className="claimcard text-center px-5">
              <img src={item.img} alt={item.text} className="img-fluid" />
              <p className="text-uppercase">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Claim;
