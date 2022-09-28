import React from 'react'
import PropTypes from 'prop-types'
import NoteItem from './NoteItem'

function NotesList ({ notes, onEditNote, onArchieveNote, onDeleteNote }) {
  return (
    <div className="notes-list">
      {
        notes.map(note => (
          <NoteItem
            key={note.id}
            {...note}
            onEdit={onEditNote}
            onArchieve={onArchieveNote}
            onDelete={onDeleteNote}
            />
        ))
      }
    </div>
  )
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired
    })
  ).isRequired,
  onEditNote: PropTypes.func,
  onArchieveNote: PropTypes.func,
  onDeleteNote: PropTypes.func
}

export default NotesList
