import { useState, useEffect } from 'react'
import './App.css'

const PAGE_SIZE = 6

function App() {
  const [jobs, setJobs] = useState([])
  const [jobIDs, setJobIDs] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageBatch, setPageBatch] = useState(1)
  
  const fetchJobIDs = async () => {
    try{
      const jobIDsURL = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
      const response = await fetch(jobIDsURL)
      const IDs = await response.json()
      setJobIDs(IDs)
    } catch (error) {
      setError(error)
    }
  }
  
  const fetchJobDetails = async () => {
    const start = (pageBatch - 1) * PAGE_SIZE
    const end = start + PAGE_SIZE - 1
    
    try{
      const allJobDetails = await Promise.all(
        jobIDs.slice(start, end).map(async id => {
          const jobDetailsURL =  `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          const response = await fetch(jobDetailsURL)
          const jobDetails = await response.json()
          return jobDetails
        })
      )
      
      if (pageBatch === 1) {
        setJobs(allJobDetails)
      } else {
        setJobs([...jobs, ...allJobDetails])
      }
    } catch (error) {
      setError(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobIDs()
  }, [])

  useEffect(() => {
    if(jobIDs){
      fetchJobDetails()
    }
  }, [jobIDs, pageBatch])
  
  if(loading) return <p className='loading'>Loading...</p>
  if(error) return <p>There was an error: {error.message}</p>

  const handleLoadMore = () => {
    if(pageBatch * PAGE_SIZE <= 60){
      setPageBatch(pageBatch + 1)
    }
  }

  const formattedDate = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.toLocaleDateString('en-US')}, ${date.toLocaleTimeString('en-US')}`
  }

  return (
    <>
      <div className='jobs app'>
        <h1 className='title'>Hacker News Jobs Board</h1>
        {jobs.map(job => (
          <section key={job.id} className='post'>
            <h2 className='post__title'>{job.title}</h2>
            <p className='post__metadata'>
              <span>By {job.by} </span>
              <span>{formattedDate(job.time)}</span>
            </p>
          </section>
        ))}
      </div>
      <button onClick={handleLoadMore} className='load-more-button'>Load More Jobs</button>
    </>
  )
}

export default App
