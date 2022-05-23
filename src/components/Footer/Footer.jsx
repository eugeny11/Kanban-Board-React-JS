import React from 'react'
import { LIST_TYPES } from '../../config'
import css from './Footer.module.css'

const Footer = props => {
    const {goals} = props
    const countOfActiveGoals = goals.filter(goal => goal.status === LIST_TYPES.GOALS_BACKLOG)
    const countOfFinishedGoals = goals.filter(goal => goal.status === LIST_TYPES.GOALS_FINISHED)

    return(
        <footer className={css.footer}>
            <div className={css.footerContent}>
                <section className={css.footerGoals}>
                    <p className={css.footerGoal}>Active goals: {countOfActiveGoals.length}</p>
                    <p className={css.footerGoal}>Finished goals: {countOfFinishedGoals.length}</p>
                </section>
                <section className={css.credits}>
                    Eugeny Yakovlev
                </section>
            </div>
        </footer>
    )
}

export default Footer