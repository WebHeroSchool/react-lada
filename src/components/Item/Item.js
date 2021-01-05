import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = ({value, isDone, onClickDone}) => (
  <div className={styles.wrap}>
    <Checkbox
      checked={isDone}
      edge="start"
      disableRipple
      onClick={() => onClickDone(isDone)}
    />
    <span className={
      classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
    }>
    {value}
    </span>
    <IconButton className={styles.btn} edge="end" disableRipple>
      <DeleteOutlinedIcon />
    </IconButton>
  </div>);

export default Item;