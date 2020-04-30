import React, { useState } from 'react';
// Vendor
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
// Custom
import { Button } from '../../styledComponents/shared/Button';
import useToggle from '../../../hooks/useToggle';

// Component
function ProductListItem(props) {
  const { disc, id, itemName, qty, rate } = props.item;
  const [isEditing, setEditing] = useToggle(false);
  const { register, handleSubmit, errors, clearError } = useForm();

  const currency = props.currency === 'usd' ? '$' : '₹';

  const [form, setForm] = useState({
    itemName: itemName,
    rate: rate,
    disc: disc,
    qty: qty
  });

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (data) => {
    setEditing();
    props.handleEdit(data, id);
  };

  const handleItemDelete = () => {
    props.handleDelete(id);
  };

  const handleCancel = () => {
    setForm({
      itemName: itemName,
      rate: rate,
      disc: disc,
      qty: qty
    });
    clearError();
    setEditing();
  };

  // Render
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={4}>
        <TextField
          size="small"
          fullWidth
          label="Item Name"
          variant="outlined"
          margin="dense"
          value={form.itemName}
          onChange={updateForm}
          name="itemName"
          error={errors.itemName && true}
          helperText={errors.itemName && 'Invalid Input'}
          inputRef={register({ required: true, minLength: 2 })}
          disabled={!isEditing}
        />
      </Grid>
      <Grid item xs={6} md={2} lg={2}>
        <TextField
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          label="Rate"
          fullWidth
          name="rate"
          onChange={updateForm}
          inputRef={register({ required: true, min: 0 })}
          value={form.rate}
          disabled={!isEditing}
          error={errors.rate && true}
          helperText={errors.rate && 'Invalid Input'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <b>{currency}</b>
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={6} md={1} lg={1}>
        <TextField
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          label="Disc"
          fullWidth
          name="disc"
          onChange={updateForm}
          inputRef={register({ required: true, min: 0, max: 100 })}
          value={form.disc}
          disabled={!isEditing}
          error={errors.disc && true}
          helperText={errors.disc && 'Invalid'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <b>%</b>
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={6} md={1} lg={1}>
        <TextField
          size="small"
          type="number"
          label="Qty"
          variant="outlined"
          margin="dense"
          fullWidth
          name="qty"
          onChange={updateForm}
          inputRef={register({ required: true, min: 0, max: 999 })}
          value={form.qty}
          disabled={!isEditing}
          error={errors.qty && true}
          helperText={errors.qty && 'Invalid'}
        />
      </Grid>
      <Grid item xs={6} md={2} lg={2}>
        <TextField
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          label="Amount"
          fullWidth
          name="amount"
          value={(form.rate * form.qty * (1 - form.disc / 100)).toFixed(2)}
          inputRef={register({ required: true, min: 0 })}
          disabled={!isEditing}
          error={errors.amount && true}
          helperText={errors.amount && 'Something Wrong'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <b>{currency}</b>
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={2} lg={2}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ height: '100%' }}
        >
          {isEditing ? (
            <>
              <Button secondary onClick={handleSubmit(handleEdit)}>
                SAVE
              </Button>
              <Button color="#FDA734" onClick={handleCancel}>
                CANCEL
              </Button>
            </>
          ) : (
            <>
              <Button secondary onClick={setEditing}>
                EDIT
              </Button>
              <Button color="#FD5665" onClick={handleItemDelete}>
                DELETE
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductListItem;
