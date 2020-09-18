import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Avatar, IconButton } from "@material-ui/core";

import "./TaskReport.css"

function TaskReport() {
    return (
        <div className='taskReport'>
            <div className="taskReport__header">
                <h2 className='taskReport__colOne'>Task</h2>
                <h2 className='taskReport__colTwo'>Status</h2>
                <h2 className='taskReport__colThree'>Report</h2>
            </div>

            <div className="taskReport__section">
                <p className='taskReport__colOne'>Complete the weekly report</p>
                <p className='taskReport__colTwo'>Done</p>
                <div className='taskReport__colThree'>
                    <IconButton>
                        <CloudDownloadIcon />
                    </IconButton>
                </div>
            </div>

            <div className="taskReport__section">
                <p className='taskReport__colOne'>Submit new sale plan to CEO</p>
                <p className='taskReport__colTwo'>Done</p>
                <div className='taskReport__colThree'>
                    <IconButton>
                        <CloudDownloadIcon />
                    </IconButton>
                </div>
            </div>

            <div className="taskReport__section">
                <p className='taskReport__colOne'>Write the proposal for new idea and online meeting with technical team for feasibility PoC</p>
                <p className='taskReport__colTwo'>In progress</p>
                
            </div>
            
        </div>
    )
}

export default TaskReport
