import React from 'react';
// Vendor
import styled from 'styled-components';
import Header from '../../header/Header';
import Grid from '@material-ui/core/Grid';

// Custom
import { InvoiceContainer } from '../../styledComponents/newInvoice/NewInvoiceContainer';

const Loader = styled.div`
  background: #f6f7f8;
  background-image: -webkit-gradient(
    linear,
    left center,
    right center,
    from(#f6f7f8),
    color-stop(0.2, #edeef1),
    color-stop(0.4, #f6f7f8),
    to(#f6f7f8)
  );
  background-image: -webkit-linear-gradient(
    left,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 200%;
  border-radius: 5px;
  animation: placeHolderShimmer 10s linear infinite forwards;
  @keyframes placeHolderShimmer {
    0% {
      background-position: -490px 0;
    }
    100% {
      background-position: 490px 0;
    }
  }
  padding: 1.3rem;
  margin: 1.5rem 1rem;
`;
const LoaderLong = styled(Loader)`
  width: 100%;
`;

//Component
function CreatePageLoader() {
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
            <Loader />
            <Loader />
            <Loader />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Loader />
            <Loader />
            <Loader />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Loader />
            <Loader />
            <Loader />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Loader />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Loader />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Loader />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Loader />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Loader />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Loader />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          className="invoice-details"
          spacing={2}
        >
          <LoaderLong />
          <LoaderLong />
          <LoaderLong />
        </Grid>
      </InvoiceContainer>
    </div>
  );
}

export default CreatePageLoader;
