import React from 'react'
import PropTypes from 'prop-types'

NoteSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

function NoteSearch ({ value, onChange }) {
  return (
    <div className="note-search">
      <input value={value} onChange={onChange} placeholder="Cari Judul Catatan.."/>
    </div>
  )
}

export default NoteSearch
