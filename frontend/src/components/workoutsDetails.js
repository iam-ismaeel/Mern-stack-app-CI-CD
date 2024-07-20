const WorkoutsDetails = ({workout}) => {
    return(
        <div className="Details">
            <h4>{workout.title}</h4>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p><strong>Loads in Kg:</strong> {workout.loads}</p>
        </div>
    )
}

export default WorkoutsDetails;
