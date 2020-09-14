import React from 'react'
import { Button } from '@material-ui/core'
import AppsIcon from '@material-ui/icons/Apps';
import EventIcon from '@material-ui/icons/Event';
import "./Dashboard.css"

function Dashboard() {
    return (
        <div className="dashboard">
            {/* <p className="dashboard__datetime">Today, 16/09/2020</p> */}
            <div className="dashboard__taskInfo">
                <h2>You have no task today</h2>
                <EventIcon />
                <AppsIcon />
                <div className="dashboard__control">
                    <Button>New task</Button>
                    <Button>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
