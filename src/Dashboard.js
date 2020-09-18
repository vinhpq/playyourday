import React from 'react'
import { Button } from '@material-ui/core'
import AppsIcon from '@material-ui/icons/Apps';
import EventIcon from '@material-ui/icons/Event';
import "./Dashboard.css"
import { useStateValue } from "./StateProvider"
import { getTotalTasks } from './Reducer'
import TaskTable from "./TaskTable"
import AdminTaskTable from "./AdminTaskTable"

function Dashboard({ userType }) {

    const [{ task, user }, dispatch] = useStateValue();
    

    return (
        <div className="dashboard">
            {/* <p className="dashboard__datetime">Today, 16/09/2020</p> */}
            <div className="dashboard__taskInfo">
                {/* <h2>You have {getTotalTasks(task)} tasks today</h2>
                <EventIcon />
                <AppsIcon /> */}
                {/* <div className="dashboard__control">
                    <Button>New task</Button>
                    <Button>Remove</Button>
                </div> */}
            </div>

            <div className="dashboard__tasks">
                {/* <TaskList /> */}
                {userType === "user" ? <TaskTable /> : <AdminTaskTable />}
            </div>
        </div>
    )
}

export default Dashboard
