import React from "react"
import ConfirmModal from "./ConfirmModal"

export default function ConfirmCloseModal({ isOpen, onClose }: React.PropsWithChildren<{ isOpen: boolean, onClose: () => void }>) {
    return <ConfirmModal isOpen={isOpen} onClose={onClose} heading="Are you sure?" description="If you delete this nomination, the nominee will no longer be put forward by you?" confirmText="Yes, leave page" onConfirm={onClose} />


}

