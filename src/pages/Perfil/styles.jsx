import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
`
export const TablesContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;

  .programadas, .recientes {
    /* width: 100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    /* height: 40vh; */
    overflow: auto;
    width: 80%;
    max-height: 100vh;
  }
  .scrollbar-container {
    width: 100%;
  }
  .table {
    width: 100%;
    /* height: 100%; */
    /* overflow: auto; */
    /* position: relative; */
  }
  h1 {
    padding-left: 20px;
    font-size: 1.5em;
    text-align: left;
    width: 100%;
    color: ${props=> props.theme.colors.primary};
    font-family: 'Roboto Mono', monospace;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    /* height: 40vh; */
  }
  th {
    color: ${props=> props.theme.colors.primary}
  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
    /* width: 230px;
    max-width: 230px; */
  }
  td:first-child, th:first-child {
    padding-left: 20px;
    padding-right: 20px;
    width: 230px;
    max-width: 230px;
  }
  thead {
    position: sticky;
    top: 0;
    background-color: #fff;
  }
`