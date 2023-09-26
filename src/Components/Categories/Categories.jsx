import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
   const [categories, setCategories] = useState([])

   useEffect(() => {
      fetch('categories.json')
         .then(res => res.json())
         .then(data => setCategories(data))
   }, [])

   return (
      <div className="py-10 max-w-6xl mx-auto">
         <div className="text-center">
            <h2 className="text-[#1A1919] font-bold text-4xl">Job Category List</h2>
            <p className="text-[#757575] font-normal">Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
         <div className="grid grid-cols-4 gap-8 py-4">
            {
               categories.map(category => <Category key={category.id} category={category}></Category>)
            }
         </div>
      </div>
   );
};

export default Categories;