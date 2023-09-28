import React, { useContext, useState } from "react";

const MGMContext = React.createContext();

export const useMGMtContext = () => {
    return useContext(MGMContext);
};


export function MGMProvider({ children }) {

    // State that controls if modal should open/close
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <MGMContext.Provider
            value={{
                modalOpen,
                setModalOpen
            }}
        >
            {children}
        </MGMContext.Provider>

    );
}
