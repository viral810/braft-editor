import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor, { EditorState } from '../src'

class Demo extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      editorState: null
    }
    this.editorInstance = null
    this.extendControls = [
      'separator',
      {
        key: 'button',
        text: 'Media',
      }
    ]

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
    console.log(editorState.toHTML())
  }

  render() {

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            extendControls={this.extendControls}
            onChange={this.handleChange}
            value={this.state.editorState}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))