import React from 'react';
//Vendor
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
// Custom
import { Button } from '../../styledComponents/shared/Button';

// Components
function TotalAmount(props) {
  const { register, handleSubmit, errors } = useForm();
  const { taxType, taxEnable, taxPercent } = props.invoiceMeta;
  const loadingState = useSelector((state) => state.loadingState.createBtn);

  // Total Invoice Tax Calculations
  const currency = props.invoiceMeta.currency === 'usd' ? '$' : '₹';
  const formatNum = (num) =>
    num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  const totalAmount =
    props.items && props.items.reduce((acc, curr) => curr.amount + acc, 0);

  const totalExclusiveTax = (totalAmount * taxPercent) / 100;

  const totalInclusiveTax = parseFloat(
    ((totalAmount * taxPercent) / (100 + taxPercent * 1)).toFixed(2)
  );

  const totalWithExclusiveTax = totalAmount + totalExclusiveTax;

  const invoiceObject = {
    currency: props.invoiceMeta.currency,
    totalAmount,
    totalExclusiveTax,
    totalInclusiveTax,
    totalWithExclusiveTax
  };
  const handleTaxData = () => {
    props.handleItemsData(invoiceObject);
  };

  return (
    <Grid container spacing={2} justify="flex-end">
      <Grid item xs={12} md={4} lg={4}>
        <p>
          Amount: {currency} {formatNum(totalAmount)}
        </p>
        {taxEnable === 'true' && taxType !== 'inc' && (
          <p>
            GST ({taxPercent}%) : {currency} {formatNum(totalExclusiveTax)}
          </p>
        )}
        {taxType === 'inc' || taxEnable === 'false' ? (
          <p>
            GrandTotal : {currency} {formatNum(totalAmount)}
          </p>
        ) : (
          <p>
            GrandTotal : {currency} {formatNum(totalWithExclusiveTax)}
          </p>
        )}
        {taxEnable === 'true' && taxType === 'inc' && (
          <p>
            Includes ({taxPercent}%) GST : {currency}
            {formatNum(totalInclusiveTax)}{' '}
          </p>
        )}
      </Grid>
      <Grid item xs={12}>
        {errors.submitBtn && (
          <p className="error-text">
            <i className="tio-error_outlined"></i> Please Add Items for Your
            Invoice
          </p>
        )}
        <Button
          ref={register({
            validate: () => props.items.length !== 0
          })}
          secondary
          className="submit-btn"
          onClick={handleSubmit(handleTaxData)}
          name="submitBtn"
          disabled={loadingState}
        >
          SUBMIT {loadingState && <i className="tio-sync spin-load"></i>}
        </Button>
      </Grid>
    </Grid>
  );
}

export default TotalAmount;
