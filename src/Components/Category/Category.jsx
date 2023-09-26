
const Category = ({category}) => {
   let {logo, category_name, availability} = category || {}

   return (
      <div className="bg-[#F9F9FF] px-5 py-8 rounded">
         <img src={logo} className="w-12 bg-[#EDEEFF] p-2.5 rounded" />
         <div className="mt-3">
            <h2 className="text-lg font-semibold">{category_name}</h2>
            <p className="text-[15px] text-[#A3A3A3]">{availability}</p>
         </div>
      </div>
   );
};

export default Category;