import React from 'react'
import { ModalForm } from './ModalForm'

export const Modal = ({ data , prank}) => {
  return (
    <>
        <div>This is a modal slide</div>
        <ModalForm data={data} prank={prank}/>
    </>
  )
}
