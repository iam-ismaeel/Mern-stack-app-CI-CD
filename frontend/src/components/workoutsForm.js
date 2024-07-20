import { useState } from "react"

const WorkoutsForm = () => {

    const [title,setTitle] = useState('')
    const [reps,setReps] = useState('')
    const [loads,setLoads] = useState('')
    const [error,setError] = useState(null)

const HandleSubmit = async () => {
const workouts= {title,reps,loads}

const response = await fetch('/fetch',{
    method:'POST',
    body: JSON.stringify(workouts),
    headers:{
        'Content-Type':'application/json'
    }
    
})
const json = await response.json()
if(!response.ok) {
    setError(json.error)
}
if(response.ok) {
    setTitle('')
    setReps('')
    setLoads('')
    setError(null)
    console.log('A new Workout is added',json)
}
}

    return(
      <form className="form"  onSubmit={HandleSubmit}>
    <h3>Add workout Exercise</h3>
    <label>Add title</label>
    <input
    type = "text"
    onChange={(e) => setTitle(e.target.value)}
    value = {title}
    />
    <label>Add Reps</label>
    <input
    type = "number"
    onChange={(e) => setReps(e.target.value)}
    value = {reps}
    />
    <label>Add Loads in Kg</label>
    <input
    type = "number"
    onChange={(e) => setLoads(e.target.value)}
    value = {loads}
    />
<button>Add Workout</button>
{error && <div className="error">{error}</div>}
</form>
    )
}

export default WorkoutsForm