import React from 'react'
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
import TaskReport from './TaskReport';

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

function AdminTaskTable() {
    const [state, setState] = React.useState({
      columns: [
        { title: 'Avatar', field: 'avatar', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/>},
        { title: 'Member name', field: 'name', 
          cellStyle: {
            width: 320,
            maxWidth: 320
          },
          headerStyle: {
            width:320,
            maxWidth: 320
          } 
        },
        { title: 'Role', field: 'role', align: 'center' },
        { title: 'Number of tasks', field: 'taskCount', align: 'center' },
        { title: 'Tasks done', field: 'taskDone', align: 'center'},
      ],
      data: [
          { name: "Charlie Brown", role: 'Product Owner', taskCount: "3", taskDone: "2", imageUrl: 'https://ca.slack-edge.com/TN44SBSKE-UMRR4P6US-e39c5c386636-512' },
          { name: "Vincent Pham", role: 'Designer', taskCount: "3", taskDone: "2", imageUrl: 'https://ca.slack-edge.com/TN44SBSKE-UN4JQBZTJ-8ecb6bfd3519-512' },
          { name: "Thanh Nguyen", role: 'Team Lead', taskCount: "3", taskDone: "2", imageUrl: 'https://ca.slack-edge.com/TN44SBSKE-UNV07BGBT-g94efc38f3ec-512' },
          { name: "Sy Tuan", role: 'Member', taskCount: "3", taskDone: "2", imageUrl: 'https://ca.slack-edge.com/TN44SBSKE-UPMQTKJVC-ae50a2328019-512' },
          { name: "Luan Bui", role: 'Member', taskCount: "3", taskDone: "2", imageUrl: 'https://ca.slack-edge.com/TN44SBSKE-UN4JNPGS1-g4ed78948959-512' },
      ]
    });
  
    return (
        <MaterialTable
        title={"My department's tasks"}
        icons={tableIcons}
        columns={state.columns}
        data={state.data}
        options={{
            search: true,
        }}
        detailPanel={rowData => {
          return (
            <TaskReport />
          )
        }}
      />
    );
  }
  
  export default AdminTaskTable