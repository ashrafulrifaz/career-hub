const getStoredJobApplication = () => {
   const storedApplications = localStorage.getItem('job')
   if(storedApplications){
      return JSON.parse(storedApplications)
   } else {
      return []
   }
}

const saveJobApplication = id => {
   const storedApplications = getStoredJobApplication()
   const exist = storedApplications.find(jobID => jobID === id)
   if(!exist){
      storedApplications.push(id)
      localStorage.setItem('job', JSON.stringify(storedApplications))
   }
}

export {saveJobApplication, getStoredJobApplication}