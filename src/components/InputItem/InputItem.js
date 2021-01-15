import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    errorAdd: false
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });

    if (this.state.inputValue !== '') {
      this.props.onClickAdd(this.state.inputValue);
      this.state.errorAdd = false;
    } else {
      this.state.errorAdd = true;
    }
  }

  render() {
    return (
      <div className={styles.inputItem}>
        <TextField
          className={styles.textField}
          id='standard-textarea'
          label='Добавить задание'
          placeholder='Введите задание'
          error={this.state.errorAdd}
          multiline
          value={this.state.inputValue}
          onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
        />
        <Fab
          color='secondary'
          aria-label='add'
          onClick={this.onButtonClick}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default InputItem;