import React, {useRef} from 'react'

const Dropdown = props => {

    const {goals, listOfDropdownGoals, isFormVisible, setFormVisible, changeStatus, setGoals, handleAddNewClick} = props

    const chosenGoal = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        setFormVisible(!isFormVisible)
    }

    const handleClick = (e) => {
        const chosenGoalId = chosenGoal.current.value
        const editedGoals = goals.map(goal => {
        
            if (goal.id === chosenGoalId){
                return {...goal, status: changeStatus}
            } return goal
        })

        

        const chosenFoundGoal = editedGoals.find(goal => goal.id === chosenGoalId)
        const filterTheGoals = goals.filter(goal => goal.id !== chosenGoalId)
        const reEditedGoals = [...filterTheGoals, chosenFoundGoal]

        setGoals(reEditedGoals)
        setFormVisible(!isFormVisible)
    }


    if(isFormVisible){
        return(
            <form onSubmit={onSubmit}>
                <select className='select'
                ref={chosenGoal}>
                    {listOfDropdownGoals.map(goal => {
                        return <option key={goal.id} value={goal.id}>{goal.title}</option>
                    })}
                </select>
                <button onClick={handleClick} type='submit' className='button submit'>Submit</button>
            </form>
        )
    }
    return(
        <button disabled={!listOfDropdownGoals ? true : false} onClick={handleAddNewClick} className='button'>Add goal</button>
    )
}

export default Dropdown