'use client';

import React, { useState, useTransition } from "react"
import ConfirmModal from "./ConfirmModal"
import { useRouter } from "next/navigation";


export default function ConfirmDeleteNominationModal({ isOpen, onClose, nomination_id }: React.PropsWithChildren<{ isOpen: boolean, onClose: () => void, nomination_id: string }>) {

    const [isPending, startTransition] = useTransition();
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();



    const onConfirm = async () => {
        setIsDeleting(true);

        try {
            const res = await fetch(`/api/nominations/${nomination_id}`, {
                method: 'DELETE'
            })

            if (!res.ok) {
                return setIsDeleting(false);
            }

            startTransition(() => {
                onClose();
                router.refresh();
            })
        }
        catch (error) {
            console.log(error);
            setIsDeleting(false);
        }


    }

    return <ConfirmModal isOpen={isOpen} onClose={onClose} heading="Are you sure?" description="If you delete this nomination, the nominee will no longer be put forward by you?" confirmText={isPending || isDeleting ? "Deleting..." : "Yes, Delete"} onConfirm={onConfirm} />

}
