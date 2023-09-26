import User from '../../assets/images/user.png'

const Banner = () => {
   return (
      <div className='max-w-6xl mx-auto py-10'>
         <div className="flex gap-5 items-center">
            <div className='w-5/12 space-y-4'>
               <h1 className='text-6xl font-bold text-[#1A1919] leading-tight'>One Step<br /> Closer To Your<br /> <span className='text-[#7F8FFE]'>Dream Job</span></h1>
               <p className='font-normal text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-2 px-5 font-medium rounded-md'>Get Started</button>
            </div>
            <div className='w-7/12'>
               <img src={User} className='w-[90%] mx-auto'/>
            </div>
         </div>
      </div>
   );
};

export default Banner;