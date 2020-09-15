import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = {
    iconButton: {
    },
};

function CustomToolbar({ ...props }) {

    const handleClick = () => {
        console.log("clicked on icon!");
    }

    // const { classes } = this.props;

    return (
        <React.Fragment>
            <Tooltip title={"Add a new task"}>
            <IconButton className={props.iconButton} onClick={handleClick}>
                <AddIcon className={props.deleteIcon} />
            </IconButton>
            </Tooltip>
      </React.Fragment>
    )
}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar);
