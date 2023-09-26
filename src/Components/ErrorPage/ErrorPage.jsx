import { Link } from "react-router-dom";


const ErrorPage = () => {
   return (
      <div className="p-20 text-center">
         <h2 className="text-4xl mb-5 font-semibold">OPPS</h2>       
         <Link to="/">
            <button className="btn btn-primary btn-sm">Back to home</button>
         </Link>  
      </div>
   );
};

export default ErrorPage;