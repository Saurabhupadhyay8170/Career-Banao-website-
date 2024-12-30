import FormSubmission from "./FormSubmission";

const Thanku = () => {
  return (
    <>
     <div className="flex items-center justify-center m-10 h-[300px] bg-[#EDEDE9]">
      <div className="w-full">
       <h1 className="text-4xl font-bold text-gray-800 mb-6 pt-[100px] text-center">Become a Brand Ambassador of Your Campus!</h1>
       <FormSubmission showHeader={false} showCourse={false} showState ={false}/>
      </div>
     </div>
    </>
  );
};

export default Thanku;
