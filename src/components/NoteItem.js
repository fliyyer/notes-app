import React from 'react'
import PropTypes from 'prop-types'
import swal from 'sweetalert';
import { MdDelete, MdArchive, MdEdit} from "react-icons/md";
import { showFormattedDate } from '../utils'

function NoteItem ({ id, title, body, archived, createdAt, onEdit, onArchieve, onDelete }) {

  const onEditButtonEventHandler = () => {
    if (onEdit) {
      onEdit(id)
    }
  }

  const onArchieveButtonEventHandler = () => {
    if (onArchieve) {
      onArchieve(id)
      swal("Catatan Kamu Berhasil di Arsipkan!", {
        icon: "success",
     });
    }
  }

  const onDeleteButtonEventHandler = () => {
    if (onDelete) {
      onDelete(id)
      swal("Catatan Berhasil Di Hapus!", {
        icon: "success",
     });
    }
  }

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">
          {title}
        </h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__edit-button" id='#edit' onClick={onEditButtonEventHandler}>
        <MdEdit/> Edit 
        </button>
      </div>
      <div className="note-item__action2">
        <button className="note-item__delete-button" onClick={onDeleteButtonEventHandler}>
        <MdDelete/> Hapus 
        </button>
        <button className="note-item__archive-button" onClick={onArchieveButtonEventHandler}>
        <MdArchive/>
        { archived ? 'Pindahkan' : ' Arsipkan '} 
        </button>
      </div>
    </div>
  )
}

NoteItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onArchieve: PropTypes.func,
  onDelete: PropTypes.func
}

export default NoteItem
