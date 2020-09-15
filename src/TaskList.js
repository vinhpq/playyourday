import React, { useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import CustomToolbar from "./CustomToolbar"
import CustomToolbarSelect from "./CustomToolbarSelect"
import Chip from '@material-ui/core/Chip';
import { useStateValue } from "./StateProvider"
import { getTotalTasks } from "./Reducer"


function TaskList() {
    const [{ task }, dispatch] = useStateValue();

    const columns = 
        [
             {
                name: "What I will do today",
                options: {
                    filter: true,
                }
             },
             {
                name: "Category",
                options: {
                    filter: true,
                    filterType: 'multiselect',
                    customBodyRenderLite: (dataIndex) => {
                        const value = data[dataIndex][1];
                        return value.map( (val, key) => {
                            return <Chip label={val} key={key} />;
                        });
                    },
                }
             },
             {
                name: "Repeat",
                options: {
                    filter: true,
                }
             },
             {
                name: "Priority",
                options: {
                    filter: true,
                }
             },
             {
                name: "Collaborator",
                options: {
                    filter: true,
                }
             },
             {
                name: "Share to",
                options: {
                    filter: true,
                }
             },
             {
                name: "Est. time",
                options: {
                    filter: true,
                }
             },

        ];

    const data = [
        ["Complete this week's report", ["Company Project"], "Every Wed.", "Important", "None", "vinh@gmail.com", "1 hour"],
        ["Send email to boss regarding new sale plan", ["Company Project", "KPI"], "Every Wed.", "Important", "None", "vinh@gmail.com", "1 hour"],
        ["Work on new programming course", ["Company Project", "KPI"], "Every Wed.", "Important", "None", "vinh@gmail.com", "1 hour"],
        ["Complete yesterday's proposal for marketing", ["Company Project", "KPI"], "Every Wed.", "Important", "None", "vinh@gmail.com", "1 hour"],
    ];

    useEffect(() => {data.map((task, index) => {
            dispatch({
                type: "ADD_TASK",
                item: {
                    id: index,
                    name: task[0],
                }
            })
            // console.log('TASK >>>>>>>', task[0], index)
        })
    }, [])

    // console.log("TOTAL TASK >>>>", getTotalTasks(task))

    // const state = {
    //     selectableRowsHideCheckboxes: false,
    //     data: data,
    //   };

    const options = {
        filterType: 'checkbox',
        customToolbar: () => {
            return (
              <CustomToolbar />
            );
        },
        customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
            <CustomToolbarSelect selectedRows={selectedRows} displayData={displayData} setSelectedRows={setSelectedRows} />
        ),
        // rowsSelected: this.state.rowsSelected,
        // onRowSelectionChange: (rowsSelectedData, allRows, rowsSelected) => {
        //     console.log(rowsSelectedData, allRows, rowsSelected);
        //     this.setState({ rowsSelected: rowsSelected });
        // },
        // onRowsDelete: (rowsDeleted, newData) => {
        //     console.log('rowsDeleted');
        //     console.dir(rowsDeleted);
        //     console.dir(newData);
        //     if (rowsDeleted && rowsDeleted.data && rowsDeleted.data[0] && rowsDeleted.data[0].dataIndex === 0) {
        //       window.alert('Can\'t delete this!');
        //       return false;
        //     };
        //     this.setState({ 
        //       data: newData,
        //       rowsSelected: [] 
        //     });
        //     console.log(rowsDeleted, "were deleted!");
        //   }
    };

    return (
        <div>
            <MUIDataTable className='dashboard__todolist'
                title={"List of all my tasks"}
                data={data}
                columns={columns}
                options={options}
                />
        </div>
    )
}

export default TaskList
