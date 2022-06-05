import { useState } from 'react';

const useModal = (titl) => {
    const [openModal, setOpenModal] = useState(false);
    const [title] = useState(titl);
    const closeModal = () => (
        setTimeout(() => {
            setOpenModal(false)
        }, 2000)
    )

    const openM = () => (setOpenModal(true))
    return { closeModal, openM, openModal, title }
};

export default useModal;