import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
    id="standard-textarea"
    label="Добавить задание"
    placeholder="Введите задание"
    multiline
    fullWidth
  />
</div>);

export default InputItem;