import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
   let [jobs, setJobs] = useState([])
   let [jobsLength, setJobsLength] = useState(4)

   useEffect(() => {
      fetch('jobs.json')
         .then(res => res.json())
         .then(data => setJobs(data))
   }, [])

   return (
      <div className="py-10 max-w-6xl mx-auto">
         <div className="text-center space-y-4">
            <h2 className="text-[#1A1919] font-bold text-4xl">Featured Jobs</h2>
            <p className="text-[#757575] font-normal">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
               {
                  jobs.map((job, idx) => <Job key={idx} job={job}></Job>).slice(0, jobsLength)
               }
            </div>            
            <div className="py-4 text-center">
               {jobsLength !== 6 && <button onClick={() => setJobsLength(jobs.length)} className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 font-medium rounded-md'>See All Jobs</button>}
            </div>
         </div>
         <div>

         </div>
      </div>
   );
};

export default FeaturedJobs;