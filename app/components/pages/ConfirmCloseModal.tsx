'use client'

import { anonymousPro } from "@/app/fonts"
import Modal from "../shared/Modal"
import Button from "../shared/Button"
import React from "react"

const ConfirmCloseModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {


    return <Modal isOpen={isOpen} onClose={onClose}>

        <h2 className="text-2xl font-bold uppercase">Delete this nomination?</h2>
        <p className={anonymousPro.className + " mt-4"}>If you delete this nomination, the nominee will no longer be put forward by you?</p>

        <div className="flex flex-col gap-3 mt-16">
            <Button variant="secondary" onClick={onClose}>yes, delete</Button>
            <Button variant="secondary" onClick={onClose}>cancel</Button>
        </div>
    </Modal>
}

export default ConfirmCloseModal