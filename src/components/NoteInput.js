import React from 'react'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

class NoteInput extends React.Component {
  #titleLimit = 50
  #initialState = {
    title: '',
    body: ''
  }

  constructor (props) {
    super(props)
    this.state = { ...this.#initialState }
    this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this)
    this.onChangeBodyEventHandler = this.onChangeBodyEventHandler.bind(this)
    this.onSubmitFormEventHandler = this.onSubmitFormEventHandler.bind(this)
  }

  onChangeTitleEventHandler (event) {
    if (event.target.value.length <= this.#titleLimit) {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value
        }
      })
    }
  }

  onChangeBodyEventHandler (event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value
      }
    })
  }

  onSubmitFormEventHandler (event) {
    event.preventDefault()
    if (this.props.onAddNote) {
      this.props.onAddNote({ ...this.state })
      this.setState({ ...this.#initialState })
      swal("Catatan Kamu Berhasil di Buat!", {
        icon: "success",
     });
    }
  }

  render () {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitFormEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.#titleLimit - this.state.title.length}
          </p>
          <input
            className="note-input__title"
            required
            value={this.state.title}
            type="text"
            onChange={this.onChangeTitleEventHandler}
            placeholder="Judul.."/>
          <textarea
            required
            className="note-input__body"
            value={this.state.body}
            type="text"
            onChange={this.onChangeBodyEventHandler}
            placeholder="Tulis catatan disini.."></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

NoteInput.propTypes = {
  onAddNote: PropTypes.func
}

export default NoteInput
