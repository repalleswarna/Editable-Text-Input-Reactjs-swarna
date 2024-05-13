import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  background-size: cover;
  height: 100vh;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  min-width: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  padding-left: 50px;
  padding-right: 50px;
`
export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const TextInput = styled.input`
  font-family: Roboto;
  font-size: 14px;
  border: 1px solid #cbd2d9;
  color: #323f4b;
  padding: 10px;
  width: 250px;
  height: 40px;
`
export const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  margin-right: 15px;
  border: 1px solid #cbd2d9;
  color: #323f4b;
  padding: 10px;
  margin: 0px;
  width: 250px;
  height: 40px;
`
export const EditableButton = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: #d946ef;
  border-radius: 5px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 15px;
`
