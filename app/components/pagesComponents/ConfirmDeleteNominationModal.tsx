import React from "react"
import ConfirmModal from "./ConfirmModal"


export default function ConfirmDeleteNominationModal({ isOpen, onClose, nomination_id }: React.PropsWithChildren<{ isOpen: boolean, onClose: () => void, nomination_id: string }>) {

    const onConfirm = async () => {
        const res = await fetch(`/api/nominations/${nomination_id}`, {
            method: 'DELETE'
        })

        if (!res.ok) {
            return
        }

        onClose();


    }

    return <ConfirmModal isOpen={isOpen} onClose={onClose} heading="Are you sure?" description="If you delete this nomination, the nominee will no longer be put forward by you?" confirmText="Yes, Delete" onConfirm={onConfirm} />

}
