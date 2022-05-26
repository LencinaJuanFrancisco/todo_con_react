import React from 'react';
import './CreateTodoButton.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

 MySwal.fire({
  title: 'Bienvenido, Crea tu Primera Tarea!!!!',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Look up',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    return fetch(`//api.github.com/users/${login}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => {
        Swal.showValidationMessage(
          `Request failed: ${error}`
        )
      })
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    })
  }
})

function CreateTodoButton({ setOpenModal, openModal }) {
  const onClickButton = () =>{
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }
  return (
    <button className="CreateTodoButton"
    onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton};