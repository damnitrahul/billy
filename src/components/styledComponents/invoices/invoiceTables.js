import styled from 'styled-components';

const InvoiceTable = styled.div`
  overflow: hidden;
  box-shadow: 4px 4px 16px 4px #3a3a3a0c;
  border-radius: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 1450px;
  margin: 3rem 1rem 1rem;
  a {
    text-decoration: none;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    color: #3a3a3a;
    &:last-child {
      border-bottom: none;
    }
  }
`;
const TableHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  .invoice-heading {
    display: inline-block;
  }
  .heading-cta {
    display: inline-block;
    margin-left: auto;
    a {
      color: '#6772e5';
    }
  }
`;
const InvoiceListItem = styled.div`
  display: grid;
  grid-template-areas: 'number date name name name amount status option';
  grid-template-columns: repeat(7, 1fr) 0.4fr;
  width: 100%;
  gap: 1rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.02);
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    grid-template-areas:
      'name name name amount option'
      'date date date status option';
    grid-template-columns: repeat(3, 1fr) 1.5fr 0.3fr;
    gap: 0.5rem;
  }
  .number {
    grid-area: number;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .date {
    grid-area: date;
    @media screen and (max-width: 768px) {
      &.listHead {
        display: none;
      }
    }
  }
  .name {
    grid-area: name;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status {
    grid-area: status;
    @media screen and (max-width: 768px) {
      &.listHead {
        display: none;
      }
    }
  }
  .amount {
    grid-area: amount;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .option {
    grid-area: option;
    color: #000;
  }
`;
const InvoiceListHead = styled(InvoiceListItem)`
  background-color: #f6f9fc;
  &:hover {
    cursor: default;
    background-color: #f6f9fc;
  }
`;
export { InvoiceTable, InvoiceListItem, InvoiceListHead, TableHeading };
