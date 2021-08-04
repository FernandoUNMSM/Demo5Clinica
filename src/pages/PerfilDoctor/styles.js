import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
  .ContainertablaPacientes {
    width: 100%;
    overflow: auto;
    height: fit-content;
    height: 100vh;
  }
  `
export const TablaContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  height: 100%;
  padding: 0 80px 0px 0px;
`