import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import PropTypes from 'prop-types';


class Item extends React.Component {

  render() {
    const {value, isDone, onClickDone, id, onClickDelete} = this.props;

    return (
      <div className={styles.wrap}>
        <Checkbox
          checked={isDone}
          edge='start'
          disableRipple
          onClick={() => onClickDone(id)}
        />
        <span className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })
        }>
        {value}
        </span>
        <IconButton
          className={styles.btn} 
          disableRipple
          onClick={() => onClickDelete(id)}>
          <DeleteOutlinedIcon />
        </IconButton>
      </div>  
    );
  }
}

Item.defaultProps = {
  isDone: false,
  value: 'Дел нет'
};

Item.propTypes = {
  isDone: PropTypes.bool,
  value: PropTypes.string
};

export default Item;