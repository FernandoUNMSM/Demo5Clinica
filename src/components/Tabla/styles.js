import styled from 'styled-components'

export const TableContainer = styled.div`
  height: 100%;
  .scrollbar-container {
    width: 100%;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    min-width: 1000px;
    max-height: 100vh;
  }
  th {
    font-size: 1.5em;
    color: ${props=> props.theme.colors.primary};
    /* &.selecc {
      width: 200px;
    } */
  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
    /* pointer-events: none; */
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;

    button {
      background: ${props=> props.theme.colors.primary};
      border: none;
      outline: none;
      color: #fff;
      padding: 10px 15px;
      font-size: 1em;
      cursor: pointer;
      width: 150px;
    }
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
  }
  td:first-child, th:first-child {
    padding-left: 20px;
  }
  thead {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 10;
  }
  .on {
    background-color: rgba(130, 223, 230, 0.802);
  }
`