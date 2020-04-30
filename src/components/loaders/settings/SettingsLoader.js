import React from 'react';
//Vendor
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
// Custom
import { SettingsLayout } from '../../styledComponents/settings/Settings';

const DisplayLoader = styled.div`
  div,
  p {
    margin: 1rem auto;
    border-radius: 150px;
  }
  div {
    padding: 2rem;
    width: 100px;
    height: 100px;
  }

  p {
    padding: 1rem;
    width: 150px;
  }

  .load {
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
    animation: placeHolderShimmer 10s linear infinite forwards;
    @keyframes placeHolderShimmer {
      0% {
        background-position: -490px 0;
      }
      100% {
        background-position: 490px 0;
      }
    }
  }
  padding: 2rem;
`;
const Loader = styled.div`
  div {
    background-color: red;
    padding: 1rem;
    margin: 2rem 0;
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
    animation: placeHolderShimmer 10s linear infinite forwards;
    @keyframes placeHolderShimmer {
      0% {
        background-position: -490px 0;
      }
      100% {
        background-position: 490px 0;
      }
    }
  }
`;

// Component
function SettingsLoader() {
  return (
    <div>
      <SettingsLayout>
        <div className="default-settings">
          <DisplayLoader>
            <div className="load"></div>
            <p className="load"></p>
          </DisplayLoader>
          <Grid
            container
            justify="center"
            alignItems="center"
            className="invoice-details"
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Loader>
                <div></div>
                <div></div>
                <div></div>
              </Loader>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Loader>
                <div></div>
                <div></div>
                <div></div>
              </Loader>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Loader>
                <div></div>
                <div></div>
                <div></div>
              </Loader>
            </Grid>
          </Grid>
        </div>
      </SettingsLayout>
    </div>
  );
}

export default SettingsLoader;
