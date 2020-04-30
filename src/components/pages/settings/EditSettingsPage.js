import React from 'react';
//Vendor
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
// Custom
import { SettingsLayout } from '../../styledComponents/settings/Settings';
import { RadioInput } from '../../styledComponents/shared/RadioButton';
import { FlatButton, Button } from '../../styledComponents/shared/Button';
import { updateSetting } from '../../../redux/actions/authActions';
import { confirmSettingSaveAction } from '../../../redux/actions/alertDialogActions';

// Component
function EditSettingsPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const settings = useSelector((state) => state.firebase.profile.settings);
  const loadingState = useSelector((state) => state.loadingState.settingBtn);

  const handleUpdateSetting = (newSetting) => {
    dispatch(confirmSettingSaveAction(updateSetting(newSetting)));
  };

  if (!isLoaded(settings)) return <h1>Loading...</h1>;

  const {
    companyName,
    gstNumber,
    taxPercent,
    taxEnable,
    billableType,
    taxType,
    companyAddress,
    note,
    currency
  } = settings;

  return (
    <SettingsLayout>
      <div className="default-settings">
        <h2>Default Invoice Settings</h2>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <div className="textfield-container">
              <TextField
                label="Company Name"
                name="companyName"
                inputRef={register}
                error={errors.companyName && true}
                helperText={errors.companyName && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                defaultValue={companyName}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="textfield-container">
              <TextField
                label="GST Number"
                name="gstNumber"
                inputRef={register({
                  pattern:
                    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/ ||
                    /^$/
                })}
                error={errors.gstNumber && true}
                helperText={errors.gstNumber && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                defaultValue={gstNumber}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="textfield-container">
              <TextField
                label="Company Address"
                name="companyAddress"
                inputRef={register}
                error={errors.companyAddress && true}
                helperText={errors.companyAddress && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                defaultValue={companyAddress}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
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
                    defaultChecked={currency === 'inr'}
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
                    defaultChecked={currency === 'usd'}
                  />
                  <label htmlFor="usd">USD</label>
                </RadioInput>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
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
                    defaultChecked={billableType === 'product'}
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
                    defaultChecked={billableType === 'service'}
                  />
                  <label htmlFor="service">Service</label>
                </RadioInput>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <div className="textfield-container">
              <p className="invoice-title">Default Invoice Note</p>
              <TextField
                label="Note for Customer"
                name="note"
                inputRef={register}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                defaultValue={note}
              />
            </div>
          </Grid>

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
                    defaultChecked={taxEnable === 'true'}
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
                    defaultChecked={taxEnable === 'false'}
                  />
                  <label htmlFor="taxFalse">No</label>
                </RadioInput>
              </div>
            </div>
          </Grid>
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
                    defaultChecked={taxType === 'exc'}
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
                    defaultChecked={taxType === 'inc'}
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
                inputRef={register({ max: 100, min: 0 })}
                error={errors.taxPercent && true}
                helperText={errors.taxPercent && 'Invalid Input'}
                size="small"
                type="number"
                fullWidth
                variant="outlined"
                margin="dense"
                defaultValue={taxPercent}
              />
            </div>
          </Grid>
        </Grid>
        <FlatButton as={Link} to={'/settings'} style={{ margin: '0 1rem' }}>
          Go Back
        </FlatButton>
        <Button
          secondary
          onClick={handleSubmit(handleUpdateSetting)}
          disabled={loadingState}
        >
          Save {loadingState && <i className="tio-sync spin-load"></i>}
        </Button>
      </div>
    </SettingsLayout>
  );
}

export default EditSettingsPage;
