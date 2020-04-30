import React from 'react';
//Vendor
import moment from 'moment';
import styled from '@react-pdf/styled-components';
import { Page, Text, View, Document, Font } from '@react-pdf/renderer';
import Noto from '../../../fonts/NotoSans-Regular.ttf';

Font.register({
  family: 'Noto Sans',
  format: 'truetype',
  src: Noto
});

const BillPage = styled.Page`
  padding: 80px 40px;
  font-family: 'Noto Sans';
`;

const BillDetails = styled.View`
  display: table;
  width: auto;
  margin: 0 auto;
  flex-direction: row;
`;

const BillColumnLeft = styled.View`
  width: 50%;
  padding-right: 50px;
  padding-left: 0px;

  text-align: left;
`;
const BillColumnRight = styled(BillColumnLeft)`
  padding-left: 50px;
  padding-right: 0px;
  text-align: right;
`;

const InvoiceHeading = styled.Text`
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: right;
  width: 100%;
`;
const InvoiceNumber = styled.Text`
  color: #444;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bolder;
`;

const Details = styled.Text`
  font-size: 12;
  padding: 5px 0;
  line-height: 1.2;
`;

const Textt = styled.Text`
  padding: 5px 0;
`;

const BillTable = styled.View`
  display: table;
  width: 100%;
`;
const BillRow = styled.View`
  margin: 0 auto;
  flex-direction: row;
  padding: 8px 0;
`;
const BillRowHead = styled(BillRow)`
  background-color: #333;
  font-size: 15px;
  border-radius: 2px;
  color: white;
`;
const BillDataText = styled.Text`
  width: 50%;
  padding: 0 5px;
  font-size: 12px;
`;
const BillDataNum = styled.Text`
  width: 15%;
  text-align: right;
  padding: 0 5px;
  font-size: 12px;
`;
const BillDataSerial = styled(BillDataNum)`
  width: 5%;
`;
const BillTotal = styled(BillColumnRight)`
  padding: 0;
`;

function InvoicePDF(props) {
  const {
    companyName,
    gstNumber,
    companyAddress,
    customerName,
    customerAddress,
    email,
    invoiceDate,
    dueDate,
    invoiceNumber,
    billableType,
    currency,
    note,
    taxEnable,
    taxType,
    taxPercent,
    items,
    totalAmount,
    totalExclusiveTax,
    totalInclusiveTax,
    totalWithExclusiveTax
  } = props.invoice;
  const currencySign = currency === 'usd' ? '$' : '₹';
  const itemList = items.map(({ itemName, rate, qty, disc, amount, id }, i) => (
    <BillRow key={id}>
      <BillDataSerial>{i + 1}</BillDataSerial>
      <BillDataText>{itemName}</BillDataText>
      <BillDataNum>{rate.toFixed(2)}</BillDataNum>
      <BillDataNum style={{ width: '9%' }}>{disc}%</BillDataNum>
      <BillDataNum style={{ width: '6%' }}>{qty}</BillDataNum>
      <BillDataNum>{amount.toFixed(2)}</BillDataNum>
    </BillRow>
  ));

  return (
    <Document>
      <BillPage>
        <BillDetails>
          <BillColumnLeft>
            <Textt>{companyName}</Textt>
            <Details>{companyAddress}</Details>
            <InvoiceNumber>{gstNumber && `GSTIN: ${gstNumber}`}</InvoiceNumber>
            <Details style={{ marginTop: '40px' }}>
              Invoice Date : {moment(invoiceDate.toDate()).format('DD-MM-YYYY')}
            </Details>
            <Details>
              Due Date : {moment(dueDate.toDate()).format('DD-MM-YYYY')}
            </Details>

            <Textt></Textt>
          </BillColumnLeft>
          <BillColumnRight>
            <InvoiceHeading>INVOICE</InvoiceHeading>
            <InvoiceNumber># Inv/{invoiceNumber}</InvoiceNumber>
            <Details style={{ marginTop: '20px' }}>Bill To</Details>
            <Textt>{customerName}</Textt>
            <Details>{customerAddress}</Details>
            <Details>Email: {email}</Details>
          </BillColumnRight>
        </BillDetails>
        <BillTable>
          <BillRowHead>
            <BillDataSerial>#</BillDataSerial>
            <BillDataText>
              {billableType === 'service' ? `Service` : 'Product'} Details
            </BillDataText>
            <BillDataNum>Rate</BillDataNum>
            <BillDataNum style={{ width: '9%' }}>Disc</BillDataNum>
            <BillDataNum style={{ width: '6%' }}>Qty</BillDataNum>
            <BillDataNum>Amount</BillDataNum>
          </BillRowHead>
        </BillTable>
        {itemList}
        <BillDetails style={{ padding: '0 5px' }}>
          <BillColumnLeft>
            {note && (
              <Details style={{ marginTop: '50px' }}>Note : {note}</Details>
            )}
          </BillColumnLeft>
          <BillColumnRight>
            <BillDetails>
              <BillTotal>
                <Details>Sub Total:</Details>
                {taxType === 'exc' && <Details> GST {taxPercent}% : </Details>}

                <Details>Total: </Details>

                {taxEnable === 'true' && taxType === 'inc' && (
                  <Details style={{ marginLeft: '-50%' }}>
                    Includes GST {taxPercent}%:{' '}
                  </Details>
                )}
              </BillTotal>
              <BillTotal>
                <Details>
                  {currencySign}{' '}
                  {totalAmount.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </Details>
                {taxType === 'exc' && (
                  <>
                    <Details>
                      {totalExclusiveTax.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </Details>
                    <Details>
                      {currencySign}{' '}
                      {totalWithExclusiveTax.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </Details>
                  </>
                )}

                {taxEnable === 'true' && taxType === 'inc' && (
                  <>
                    <Details>
                      {currencySign}{' '}
                      {totalAmount.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </Details>

                    <Details>
                      {currencySign}{' '}
                      {totalInclusiveTax.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </Details>
                  </>
                )}
                {taxEnable === 'false' && (
                  <Details>
                    {currencySign}{' '}
                    {totalAmount.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </Details>
                )}
              </BillTotal>
            </BillDetails>
          </BillColumnRight>
        </BillDetails>
      </BillPage>
    </Document>
  );
}

export default InvoicePDF;
