import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
   const jobs = useLoaderData()
   const [appliedJobs, setAppliedJobs] = useState([])
   const [displayJobs, setDisplayJobs] = useState([])

   useEffect(() => {
      const storedJobsIds = getStoredJobApplication()
      if(jobs.length > 0){
         const jobApplied = jobs.filter(job => storedJobsIds.includes(job.id))
         setAppliedJobs(jobApplied)
         }
   }, [jobs])
   

   const handleFilter = filter => {
      if(filter === 'all'){
         setDisplayJobs(appliedJobs)
      } else if(filter === 'remote'){
         const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
         setDisplayJobs(remoteJobs)
      } else if(filter === 'onsite'){
         const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
         setDisplayJobs(onsiteJobs)
      }
   }

   return (
      <div className="max-w-6xl mx-auto">
         <div className="py-20">
            <h2 className="text-4xl font-bold text-center">Applied Jobs</h2>
         </div>
         <div className="flex justify-end">
            <details className="dropdown mb-32">
               <summary className="m-1 btn">Filter</summary>
               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={() => handleFilter('all')}><a>All</a></li>
                  <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                  <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
               </ul>
            </details>
         </div>
         <div className="py-10 space-y-4">
            {
               displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
         </div>
      </div>
   );
};

export default AppliedJobs;