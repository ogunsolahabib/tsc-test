'use client'

import { anonymousPro } from "@/app/fonts"
import Modal from "../shared/Modal"
import Button from "../shared/Button"
import React from "react"
import ConfirmModal from "./ConfirmModal"

const ConfirmCloseModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {


    return <ConfirmModal isOpen={isOpen} onClose={onClose} heading="Are you sure?" description="If you delete this nomination, the nominee will no longer be put forward by you?" confirmText="Yes, leave page" onConfirm={onClose} />


}

export default ConfirmCloseModal