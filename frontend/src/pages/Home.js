import { useEffect, useState } from "react"
import WorkoutsDetails from "../components/workoutsDetails"
import WorkoutsForm from "../components/workoutsForm"

const Home = () => {
const[workouts,setWorkouts] = useState('')
useEffect(()=> {
    const fetchWorkouts = async () => {
     const response = await fetch('/hello')
     const json = response.json()


     if(response.ok) {
        setWorkouts(json)
     }
    }

    fetchWorkouts()
},[])

    return(
        <div  className="home">
{workouts && workouts.map((workout) => (
   <WorkoutsDetails  key = {workout._id} workout = {workout}/>
))}
  <WorkoutsForm/>
        </div>
    )
} 
export default Home