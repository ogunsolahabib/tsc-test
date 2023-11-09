import React from "react"
import ConfirmModal from "./ConfirmModal"


const ConfirmDeleteNominationModal: React.FC<{ isOpen: boolean, onClose: () => void, nomination_id: string }> = ({ isOpen, onClose, nomination_id }) => {

    const onConfirm = async () => {
        const res = await fetch(`/api/nominations/${nomination_id}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            onClose();
        }

    }

    return <ConfirmModal isOpen={isOpen} onClose={onClose} heading="Are you sure?" description="If you delete this nomination, the nominee will no longer be put forward by you?" confirmText="Yes, Delete" onConfirm={onConfirm} />

}

export default ConfirmDeleteNominationModal