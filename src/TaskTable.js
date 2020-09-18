import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
// import { IconButton }
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

function TaskTable() {
    const [state, setState] = React.useState({
      columns: [
        { title: 'What I will do', field: 'taskName', 
          validate: rowData => { 
            // console.log("Taskname is EMPTY >>>>", rowData.taskName)
            return (!rowData.taskName || rowData.taskName === '') ? 'Task cannot be empty' : ''
          },
          cellStyle: {
            width: 320,
            minWidth: 320
          },
          headerStyle: {
            width:320,
            minWidth: 320
          } 
        },
        { title: 'Repeat', field: 'repeat', lookup: {1: 'Daily', 2: 'Weekly', 3: 'Twice a week', 4: 'Custom'}},
        { title: 'Collaborator', field: 'collaborator', lookup: {1: 'Charlie Brown', 2: 'Vincent Pham', 3: 'Thanh Nguyen', 4: 'Sy Tuan', 5: 'Luan Bui'}},
        { title: 'Est. time', field: 'estimateTime', lookup: {1: '30 min', 2: '1 hour', 3: '2 hour', 4: 'Custom'}},
        { title: 'Share', field: 'share', lookup: {1: 'Team Leader', 2: 'Department Head', 3: 'CEO', 4: 'All'}},
      ],
      data: [],
    });

    // Add a new task
    const handleRowAdd = (newData) =>
      new Promise((resolve, reject) => {
        // console.log('handleRowAdd >>>>>>>', newData)
        setTimeout(() => {
          resolve();
            setState((prevState) => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
        }, 600);
    })

    // Edit a task
    const handleRowUpdate = (newData, oldData) =>
      new Promise((resolve, reject) => {
        // console.log('handleRowUpdate >>>>>>>', newData, oldData)
        setTimeout(() => {
          resolve();
          if (oldData) {
            setState((prevState) => {
              const data = [...prevState.data];
              data[data.indexOf(oldData)] = newData;
              return { ...prevState, data };
            });
          }
        }, 600);
    })

    // Delete a task
    const handleRowDelete = (oldData) =>
      new Promise((resolve, reject) => {
        // console.log('handleRowDelete >>>>>>>', oldData)

        setTimeout(() => {
          resolve();
          setState((prevState) => {
            const data = [...prevState.data];
            data.splice(data.indexOf(oldData), 1);
            return { ...prevState, data };
          });
        }, 600);
    })
  
    return (
      <MaterialTable
        title={"You have " + state.data.length + " task today"}
        icons={tableIcons}
        columns={state.columns}
        data={state.data}
        options={{
          exportButton: true,
          search: true,
          selection: true,
          actionsColumnIndex: -1
        }}
        style={{ width: 1200 }}
        detailPanel={rowData => {
          return (
            <div
                style={{
                  height: 80,
                  fontSize: 15,
                  textAlign: 'center',
                  color: 'black',
                  backgroundColor: '#f5f5f5',
                }}
              >
                Mô tả chi tiết về task, có thể chèn ảnh, attach thêm tài liệu, and more...
            </div>
          )
        }}
        editable={{
          onRowAdd: handleRowAdd,
          onRowUpdate: handleRowUpdate,
          onRowDelete: handleRowDelete,
        }}
      />
    );
  }
  
  export default TaskTable