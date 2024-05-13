import {Component} from 'react'
import {
  AppContainer,
  CardContainer,
  InputContainer,
  TextInput,
  Text,
  Heading,
  EditableButton,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {textValue: '', editValue: true}

  handleChange = event => {
    this.setState({textValue: event.target.value})
  }

  handleEdit = () => {
    this.setState(prevState => ({
      editValue: !prevState.editValue,
    }))
  }

  render() {
    const {textValue, editValue} = this.state
    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {editValue ? (
              <TextInput
                type="text"
                value={textValue}
                onChange={this.handleChange}
              />
            ) : (
              <Text>{textValue}</Text>
            )}
            <EditableButton type="button" onClick={this.handleEdit}>
              {editValue ? 'Save' : 'Edit'}
            </EditableButton>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default EditableTextInput
