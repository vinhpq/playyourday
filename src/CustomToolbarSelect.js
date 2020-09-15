import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import BlockIcon from "@material-ui/icons/Block";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'


const defaultToolbarSelectStyles = {
    iconButton: {
    },
    iconContainer: {
      marginRight: "24px",
    },
    inverseIcon: {
      transform: "rotate(90deg)",
    },
  };

function CustomToolbarSelect({ ...props }) {
    const [{ task }, dispatch] = useStateValue();

    const handleArchiveTask = () => {
        const nextSelectedRows = props.displayData.reduce((nextSelectedRows, _, index) => {
          
          if (!props.selectedRows.data.find(selectedRow => selectedRow.index === index)) {
            nextSelectedRows.push(index);
          } else {
            console.log('Selected row index >>> ', index);
          }
    
          return nextSelectedRows;
        }, []);
    
        props.setSelectedRows(nextSelectedRows);
      };
    
    const handleDeleteTask = () => {

        const deletedRows = props.displayData.reduce((deletedRows, _, index) => {
          
          if (props.selectedRows.data.find(selectedRow => selectedRow.index === index)) {
            console.log('Selected row index >>> ', index);
            deletedRows.push(index);
          } 
    
          return deletedRows;
        }, []);
    
        if ( deletedRows ) {
          props.setSelectedRows(deletedRows);
          // props.onRowsDelete();
        }

      };
    
    return (
        <div className={props.iconContainer}>
            <Tooltip title={"Delete"}>
                <IconButton className={props.iconButton} onClick={handleDeleteTask}>
                    <DeleteIcon className={props.icon} />
                </IconButton>
            </Tooltip>
            <Tooltip title={"Complete & Archive"}>
                <IconButton className={props.iconButton} onClick={handleArchiveTask}>
                    {/* <CompareArrowsIcon className={[props.icon, props.inverseIcon].join(" ")} /> */}
                    <ArchiveIcon classname={props.icon} />
                </IconButton>
            </Tooltip>
            {/* <Tooltip title={"Block selected"}>
                <IconButton className={props.iconButton} onClick={handleClickBlockSelected}>
                    <BlockIcon className={props.icon} />
                </IconButton>
            </Tooltip> */}
      </div>
    )
}

export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);
