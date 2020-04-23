import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

InvoicePDF.defaultProps = {
  invoices: [
    {
      companame: 'Silk Shree Khadi',
      gstNumber: '',
      companyAddress:
        'Quarter No. 28, Road No. 01, Kazipur, Nalaroad, Near ASG Eye Hospital Dinkar Chowk',
      customerName: 'Rahul Raj',
      customerAddress: 'Nala Road',
      email: 'rahulthepunksta@gmail.com',
      invoiceDate: '02/27/2020',
      dueDate: '02/27/2020',
      invoiceNumber: 'INV1221',
      billableType: 'product',
      currency: 'inr',
      note: 'Notes for Customer',
      taxEnable: 'true',
      taxType: 'inc',
      taxPercent: '18',
      items: [
        {
          id: 1,
          itemName: 'Web Dev Mug XXL IBR23',
          rate: 345.5,
          qty: 2,
          disc: 10,
          amount: 691
        },
        {
          id: 4,
          itemName: 'Web Dev Mug XXL IBR23',
          rate: 345.5,
          qty: 2,
          disc: 10,
          amount: 691
        },
        {
          id: 4,
          itemName: 'Web Dev Mug XXL IBR23',
          rate: 345.5,
          qty: 2,
          disc: 10,
          amount: 691
        }
      ],
      totalAmount: 2764,
      totalExclusiveTax: 497.52,
      totalInclusiveTax: 421.63,
      totalWithExclusiveTax: 3261.52
    }
  ]
};
const BillDocument = styled.div`
  max-width: 100%;
  overflow: auto;
`;
const BillPage = styled.div`
  max-width: 900px;
  width: 900px;
  overflow: auto;
  margin: 2rem auto;
  padding: 6rem 4rem;
  box-shadow: 4px 4px 28px 10px rgba(240, 240, 240, 0.9);
`;
const BillDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
`;
const BillColumn = styled.div`
  width: 40%;
  border: red 2px solidcolor;
`;
const InvoiceHeading = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const InvoiceNumber = styled.p`
  color: #444;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 2rem;
`;
const Date = styled.div`
  margin-top: 4rem;
`;
const BillRow = styled.div`
  display: grid;
  padding: 8px 0;

  grid-template-columns: 1fr 10fr 3fr 2fr 2fr 3fr;
`;
const BillHead = styled(BillRow)`
  background: #444;
  border-radius: 3px;
  color: white;
`;
const BillDataNum = styled.p`
  text-align: right;
  padding: 0 5px;
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
    totalWithExclusiveTax,
    paidStatus
  } = props.invoice;
  const currencySign = currency === 'usd' ? '$' : '₹';
  const itemList = items.map(({ itemName, rate, qty, disc, amount, id }, i) => (
    <BillRow key={id}>
      <BillDataNum>{i + 1}</BillDataNum>
      <p>{itemName}</p>
      <BillDataNum>{rate.toFixed(2)}</BillDataNum>
      <BillDataNum>{disc}%</BillDataNum>
      <BillDataNum>{qty}</BillDataNum>
      <BillDataNum>{amount.toFixed(2)}</BillDataNum>
    </BillRow>
  ));
  return (
    <BillDocument>
      <BillPage>
        <BillDetails>
          <BillColumn>
            <h2>{companyName}</h2>
            <p>{companyAddress}</p>
            <InvoiceNumber>{gstNumber && `GSTIN: ${gstNumber}`}</InvoiceNumber>
            <Date>
              <p>
                Invoice Date :{' '}
                {moment(invoiceDate.toDate()).format('DD-MM-YYYY')}
              </p>
              <p>Due Date : {moment(dueDate.toDate()).format('DD-MM-YYYY')}</p>
              <p>
                Status :{' '}
                {paidStatus ? (
                  <span style={{ color: '#219735' }}>Fulfilled</span>
                ) : (
                  <span style={{ color: '#FD5665' }}>Pending</span>
                )}
              </p>
            </Date>
          </BillColumn>

          <BillColumn style={{ textAlign: 'right' }}>
            <InvoiceHeading>INVOICE</InvoiceHeading>
            <InvoiceNumber># Inv/{invoiceNumber}</InvoiceNumber>
            <p>Bill To</p>
            <h2>{customerName}</h2>
            <p>{customerAddress}</p>
            <p>Email : {email}</p>
          </BillColumn>
        </BillDetails>
        <BillHead>
          <BillDataNum>#</BillDataNum>
          <p>Product Details</p>
          <BillDataNum>Rate</BillDataNum>
          <BillDataNum>Disc</BillDataNum>
          <BillDataNum>Qty</BillDataNum>
          <BillDataNum>Amount</BillDataNum>
        </BillHead>
        {itemList}
        <BillDetails>
          <BillColumn>{note && <Date>Note: {note}</Date>}</BillColumn>
          <BillColumn>
            <BillDetails>
              <BillColumn style={{ textAlign: 'right' }}>
                <p>Sub Total: </p>
                {taxType === 'exc' && <p> GST {taxPercent}% : </p>}

                <p>Total: </p>

                {taxEnable === 'true' && taxType === 'inc' && (
                  <p style={{ marginLeft: '-50%' }}>
                    Includes GST {taxPercent}%:{' '}
                  </p>
                )}
              </BillColumn>
              <BillColumn style={{ textAlign: 'right' }}>
                <p>
                  {currencySign}{' '}
                  {totalAmount.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </p>
                {taxEnable === 'true' && taxType === 'exc' && (
                  <>
                    <p>
                      {totalExclusiveTax.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </p>
                    <p>
                      {currencySign}{' '}
                      {totalWithExclusiveTax.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </p>
                  </>
                )}
                {taxEnable === 'true' && taxType === 'inc' && (
                  <>
                    <p>
                      {currencySign}{' '}
                      {totalAmount.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </p>

                    <p>
                      {currencySign}{' '}
                      {totalInclusiveTax.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </p>
                  </>
                )}
                {taxEnable === 'false' && (
                  <p>
                    {currencySign}{' '}
                    {totalAmount.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </p>
                )}
              </BillColumn>
            </BillDetails>
          </BillColumn>
        </BillDetails>
      </BillPage>
    </BillDocument>
  );
}

export default InvoicePDF;
