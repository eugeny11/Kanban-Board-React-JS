import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import css from './List.module.css'
import { LIST_TYPES } from '../../config'
import AddGoalsToBacklog from '../AddGoalsToBacklog/AddGoalsToBacklog'
import Dropdown from '../Dropdown/Dropdown'

const List = props => {

    const {type, title, goals, countOfGoals, setGoals, addNewGoal} = props

    const [isFormVisible, setFormVisible] = useState(false);

    const goalsToBacklog = countOfGoals.filter(goal => goal.status === LIST_TYPES.GOALS_BACKLOG)
    const goalsReady = countOfGoals.filter(goal => goal.status === LIST_TYPES.GOALS_READY)
    const goalsProgress = countOfGoals.filter(goal => goal.status === LIST_TYPES.GOALS_PROGRESS)

    const handleAddNewClick = () => {
        setFormVisible(!isFormVisible)
    }

    const formSubmit = (title,description) => {
        addNewGoal(title, description)
    }


    return(
        <div className={css.list}>
            <h2 className={css.listTitle}>{title}</h2>
            {
                goals.length ?
                goals.map(goal => 
                    <Link to={`/goals/${goal.id}`} key={goal.id} className={css.goalLink}>
							<div className={css.goal}>{goal.title}</div>
					</Link>) :
                    <p></p>
                
            }

            {
                type === LIST_TYPES.GOALS_BACKLOG &&
                <AddGoalsToBacklog formSubmit={formSubmit} isFormVisible={isFormVisible} setFormVisible={setFormVisible}
                handleAddNewClick={handleAddNewClick}/>
            }

            {
                type === LIST_TYPES.GOALS_READY &&
                <Dropdown isFormVisible={isFormVisible} setFormVisible={setFormVisible}
                goals={countOfGoals} listOfDropdownGoals={goalsToBacklog} setGoals={setGoals} changeStatus={LIST_TYPES.GOALS_READY}
                handleAddNewClick={handleAddNewClick}/>

            }

            {
                type === LIST_TYPES.GOALS_PROGRESS &&
                <Dropdown isFormVisible={isFormVisible} setFormVisible={setFormVisible}
                goals={countOfGoals} listOfDropdownGoals={goalsReady} setGoals={setGoals} changeStatus={LIST_TYPES.GOALS_PROGRESS}
                handleAddNewClick={handleAddNewClick}/>

            }

            {
                type === LIST_TYPES.GOALS_FINISHED &&
                <Dropdown isFormVisible={isFormVisible} setFormVisible={setFormVisible}
                goals={countOfGoals} listOfDropdownGoals={goalsProgress} setGoals={setGoals} changeStatus={LIST_TYPES.GOALS_FINISHED}
                handleAddNewClick={handleAddNewClick}/>
            }
        </div>
    )

}

export default List