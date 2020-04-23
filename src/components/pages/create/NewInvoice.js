import React, { useState, useEffect } from 'react';
//Styled Component
import Header from '../../header/Header';
import { InvoiceContainer } from '../../styledComponents/newInvoice/NewInvoiceContainer';
//Imported Components
import ProductList from './ProductList';
// React Hook Form
import { useForm } from 'react-hook-form';

//Material UI
import TextField from '@material-ui/core/TextField';
import { RadioInput } from '../../styledComponents/shared/RadioButton';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { isLoaded } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { createInvoice } from '../../../redux/actions/invoiceActions';
import { useLayoutEffect } from 'react';

/* ****************************************************** */
/*                        Component                       */
/* ****************************************************** */

// Component
function NewInvoice(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const settings = useSelector(
    (state) => state.firebase.profile && state.firebase.profile.settings
  );
  const [invoiceMeta, setInvoiceMeta] = useState({
    invoiceDate: new Date(),
    dueDate: new Date(),
    billableType: 'product',
    taxType: 'exc',
    taxPercent: '18',
    taxEnable: 'true',
    currency: 'inr',
    companyAddress: '',
    companyName: '',
    gstNumber: ''
  });
  useEffect(() => {
    if (isLoaded(settings))
      setInvoiceMeta({
        ...invoiceMeta,
        currency: settings.currency,
        billableType: settings.billableType,
        taxType: settings.taxType,
        taxPercent: settings.taxPercent,
        taxEnable: settings.taxEnable,
        companyAddress: settings.companyAddress,
        companyName: settings.companyName,
        gstNumber: settings.gstNumber
      });
  }, []);
  if (!isLoaded(settings)) return <h1>Loading...</h1>;

  // Set Default Form State

  // Controlling Some Inputs
  const handleInvoiceMeta = (e) => {
    setInvoiceMeta({ ...invoiceMeta, [e.target.name]: e.target.value });
  };
  const handleDueDateChange = (e) => {
    setInvoiceMeta({ ...invoiceMeta, dueDate: e._d });
  };
  const handleInvoiceDateChange = (e) => {
    setInvoiceMeta({ ...invoiceMeta, invoiceDate: e._d });
  };

  // Submiting Invoice Details
  const handleInvoiceSubmit = (metaData) => {
    const handleDataSubmit = (data) => {
      const finalObj = {
        ...data,
        ...metaData,
        dueDate: invoiceMeta.dueDate,
        invoiceDate: invoiceMeta.invoiceDate,
        paidStatus: false,
        remindedAt: new Date()
      };
      dispatch(createInvoice(finalObj));
    };

    handleSubmit(handleDataSubmit)();
  };
  // Render Component
  return (
    <div>
      <Header title={'Add New Invoice'} />
      <InvoiceContainer>
        <h3>INVOICE</h3>
        <Grid
          container
          justify="center"
          alignItems="center"
          className="invoice-details"
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div className="textfield-container">
              <p className="invoice-title">Your Details</p>
              <TextField
                label="Company Name"
                name="companyName"
                inputRef={register({ required: true, minLength: 2 })}
                error={errors.companyName && true}
                helperText={errors.companyName && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                defaultValue={settings.companyName}
              />
              <TextField
                label="GST Number"
                name="gstNumber"
                inputRef={register({
                  pattern:
                    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/ ||
                    /^$/
                })}
                error={errors.gstNumber && true}
                helperText={errors.gstNumber && 'Invalid GST Number'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                defaultValue={settings.gstNumber}
              />
              <TextField
                label="Address"
                name="companyAddress"
                inputRef={register({ required: true, minLength: 2 })}
                error={errors.companyAddress && true}
                helperText={errors.companyAddress && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                defaultValue={settings.companyAddress}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div className="textfield-container">
              <p className="invoice-title">Customer Details</p>

              <TextField
                label="Customer Name"
                name="customerName"
                inputRef={register({ required: true, minLength: 2 })}
                error={errors.customerName && true}
                helperText={errors.customerName && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
              />
              <TextField
                label="Address"
                name="customerAddress"
                inputRef={register({ required: true, minLength: 2 })}
                error={errors.customerAddress && true}
                helperText={errors.customerAddress && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
              />
              <TextField
                label="Email"
                name="email"
                inputRef={register({
                  required: true,
                  minLength: 2,
                  pattern: /\S+@\S+\.\S+/
                })}
                error={errors.email && true}
                helperText={errors.email && 'Invalid Input'}
                size="small"
                type="email"
                required
                fullWidth
                variant="outlined"
                margin="dense"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div className="textfield-container">
              <p className="invoice-title">Invoice Details</p>

              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  margin="dense"
                  id="date-picker-dialog"
                  label="Date"
                  name="Date"
                  inputRef={register}
                  error={errors.itemName && true}
                  helperText={errors.itemName && 'Invalid Input'}
                  size="small"
                  fullWidth
                  inputVariant="outlined"
                  format="DD/MM/YYYY"
                  value={invoiceMeta.invoiceDate}
                  onChange={handleInvoiceDateChange}
                  name="invoiceDate"
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
                <KeyboardDatePicker
                  margin="dense"
                  id="due-date-picker-dialog"
                  label="Due Date"
                  name="Due Date"
                  inputRef={register}
                  size="small"
                  fullWidth
                  inputVariant="outlined"
                  format="DD/MM/YYYY"
                  value={invoiceMeta.dueDate}
                  onChange={handleDueDateChange}
                  name="dueDate"
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
              </MuiPickersUtilsProvider>
              <TextField
                label="# Invoice Number"
                name="invoiceNumber"
                inputRef={register({
                  required: true,
                  minLength: 2
                })}
                error={errors.invoiceNumber && true}
                helperText={errors.invoiceNumber && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className="invoice-details"
            >
              <Grid item xs={12} md={12} lg={4}>
                <div className="textfield-container">
                  <p className="invoice-title">What Are You Selling?</p>
                  <div id="group1" className="radio-group">
                    <RadioInput>
                      <input
                        type="radio"
                        value="product"
                        id="product"
                        name="billableType"
                        ref={register({
                          required: true
                        })}
                        checked={invoiceMeta.billableType === 'product'}
                        onChange={handleInvoiceMeta}
                      />
                      <label htmlFor="product">Product</label>
                    </RadioInput>
                    <RadioInput>
                      <input
                        type="radio"
                        value="service"
                        id="service"
                        name="billableType"
                        ref={register({
                          required: true
                        })}
                        checked={invoiceMeta.billableType === 'service'}
                        onChange={handleInvoiceMeta}
                      />
                      <label htmlFor="service">Service</label>
                    </RadioInput>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={4}>
                <div className="textfield-container">
                  <p className="invoice-title">Currency</p>
                  <div id="group2" className="radio-group">
                    <RadioInput>
                      <input
                        type="radio"
                        value="inr"
                        id="inr"
                        name="currency"
                        ref={register}
                        checked={invoiceMeta.currency === 'inr'}
                        onChange={handleInvoiceMeta}
                      />
                      <label htmlFor="inr">INR</label>
                    </RadioInput>
                    <RadioInput>
                      <input
                        type="radio"
                        value="usd"
                        id="usd"
                        name="currency"
                        ref={register}
                        checked={invoiceMeta.currency === 'usd'}
                        onChange={handleInvoiceMeta}
                      />
                      <label htmlFor="usd">USD</label>
                    </RadioInput>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={4}>
                <div className="textfield-container">
                  <p className="invoice-title">Notes for Customer</p>

                  <TextField
                    label="Note"
                    name="note"
                    inputRef={register}
                    size="small"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    defaultValue={settings.note}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className="invoice-details"
            >
              <Grid item xs={12} md={12} lg={4}>
                <div className="textfield-container">
                  <p className="invoice-title">Enable Tax?</p>
                  <div id="group1" className="radio-group">
                    <RadioInput>
                      <input
                        type="radio"
                        value={true}
                        id="taxTrue"
                        name="taxEnable"
                        ref={register({
                          required: true
                        })}
                        checked={invoiceMeta.taxEnable === 'true'}
                        onChange={handleInvoiceMeta}
                      />
                      <label htmlFor="taxTrue">Yes</label>
                    </RadioInput>
                    <RadioInput>
                      <input
                        type="radio"
                        value={false}
                        id="taxFalse"
                        name="taxEnable"
                        ref={register({
                          required: true
                        })}
                        checked={invoiceMeta.taxEnable === 'false'}
                        onChange={handleInvoiceMeta}
                      />
                      <label htmlFor="taxFalse">No</label>
                    </RadioInput>
                  </div>
                </div>
              </Grid>
              {invoiceMeta.taxEnable === 'true' && (
                <>
                  <Grid item xs={12} md={12} lg={4}>
                    <div className="textfield-container">
                      <p className="invoice-title">Tax Type</p>
                      <div id="group2" className="radio-group">
                        <RadioInput>
                          <input
                            type="radio"
                            value="exc"
                            id="taxTypeExc"
                            name="taxType"
                            ref={register({
                              required: true
                            })}
                            checked={invoiceMeta.taxType === 'exc'}
                            onChange={handleInvoiceMeta}
                          />
                          <label htmlFor="taxTypeExc">Exclusive</label>
                        </RadioInput>
                        <RadioInput>
                          <input
                            type="radio"
                            value="inc"
                            id="taxTypeInc"
                            name="taxType"
                            ref={register({
                              required: true
                            })}
                            checked={invoiceMeta.taxType === 'inc'}
                            onChange={handleInvoiceMeta}
                          />
                          <label htmlFor="taxTypeInc">Inclusive</label>
                        </RadioInput>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12} lg={4}>
                    <div className="textfield-container">
                      <p className="invoice-title">Tax Percent</p>

                      <TextField
                        label="Tax %"
                        name="taxPercent"
                        inputRef={register({ required: true, min: 0, max: 50 })}
                        error={errors.taxPercent && true}
                        helperText={errors.taxPercent && 'Invalid Input'}
                        size="small"
                        type="number"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        onChange={handleInvoiceMeta}
                        value={invoiceMeta.taxPercent}
                      />
                    </div>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
        {/* Product List */}
        <ProductList
          invoiceMeta={invoiceMeta}
          handleInvoiceSubmit={handleInvoiceSubmit}
        />
      </InvoiceContainer>
    </div>
  );
}

export default NewInvoice;
