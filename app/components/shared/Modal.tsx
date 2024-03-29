import classNames from "classnames"

interface ModalProps {
    children: React.ReactNode,
    onClose: () => void,
    isOpen: boolean
}

export default function Modal({ children, onClose, isOpen }: React.PropsWithChildren<ModalProps & React.HTMLProps<HTMLDivElement>>) {

    const classes = classNames({
        'block': isOpen,
        'hidden': !isOpen
    },
        'fixed inset-0 z-50 w-full md:p-6 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-black bg-opacity-70'
    )
    return <div id="default-modal" tabIndex={-1} aria-hidden="true" className={classes}>
        <div className="relative w-full max-w-2xl h-full m-auto">
            <div className="absolute bottom-0 md:inset-0 bg-white shadow p-6 h-fit my:auto md:m-auto w-full md:w-[500px]">
                {children}
            </div>
        </div>
        <style global jsx>
            {`
               body {
                 overflow-y: ${isOpen ? 'hidden' : 'auto'};  
               }
            `}
        </style>
    </div>

}

