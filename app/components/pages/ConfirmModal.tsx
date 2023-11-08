'use client'

import { anonymousPro } from "@/app/fonts"
import Modal from "../shared/Modal"
import Button from "../shared/Button"
import React from "react"

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    heading: React.ReactNode;
    description: React.ReactNode;
    confirmText: React.ReactNode;
    cancelText?: React.ReactNode;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, heading, description, confirmText, cancelText }) => {


    return <Modal isOpen={isOpen} onClose={onClose}>

        <h2 className="text-2xl font-bold uppercase">{heading}</h2>
        <p className={anonymousPro.className + " mt-4"}>{
            description}</p>

        <div className="flex flex-col gap-3 mt-16">
            <Button variant="secondary" onClick={onClose}>{confirmText}</Button>
            <Button variant="secondary" onClick={onClose}>{cancelText || 'Cancel'}</Button>
        </div>
    </Modal>
}

export default ConfirmModal