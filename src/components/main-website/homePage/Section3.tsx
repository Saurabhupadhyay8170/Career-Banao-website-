// import MyCol from "ui/MyCol";
// import "./home.css";
// import MyRow from "ui/MyRow";
// import MyText from "ui/MyText";
// import MyFlex from "ui/MyFlex";

// const Section3 = () => {
//   return (
//     <MyRow
//       justify="center"
//       gutter={24}
//       className="section-3-gradient"
//       align="middle"
//       style={{ padding: 50 }}
//     >
//       {items.map((item, index) => (
//         <MyCol key={index}>
//           <MyFlex gap={10} vertical>
//             <img style={{ height: 70 }} src={`/icons/home/${item.icon}.svg`} />
//             <MyText
//               style={{ width: "95%", textAlign: "center" }}
//               variant="title"
//               level={5}
//             >
//               {item.text}
//             </MyText>
//           </MyFlex>
//         </MyCol>
//       ))}
//     </MyRow>
//   );
// };

// export default Section3;

// const items = [
//   {
//     text: "Safe and Secure",
//     icon: "safeIcon",
//   },
//   {
//     text: "24X7 Counselling Support",
//     icon: "supportIcon",
//   },
//   {
//     text: "Conducted 1 Lakh+ Sessions",
//     icon: "laptopIcon",
//   },
// ];

const Section3 = () => {
  return (
    <div className="rounded-lg p-12 shadow-lg">
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all w-64"
          >
            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-tr from-blue-200 to-blue-400 rounded-full mb-4">
              <img
                className="h-12"
                src={`/icons/home/${item.icon}.svg`}
                alt={item.text}
              />
            </div>
            <h5 className="text-center text-lg font-semibold text-gray-800">
              {item.text}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;

const items = [
  {
    text: "Safe and Secure",
    icon: "safeIcon",
  },
  {
    text: "24X7 Counselling Support",
    icon: "supportIcon",
  },
  {
    text: "Conducted 1 Lakh+ Sessions",
    icon: "laptopIcon",
  },
];

