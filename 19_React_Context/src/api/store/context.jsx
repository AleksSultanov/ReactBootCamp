import { createContext, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const UsersContext = createContext();

export function UsersProvider({children}) {
    const { users, isLoading, getUsersRequest } = useUsers();
    const [selectedUserId, setSelectedUserIs] = useState(null);
    function onSelectUserId(id) {
        setSelectedUserIs(id);
    }
            
    return (
        <UsersContext.Provider value={{
            users, 
            isLoading,
            getUsersRequest,
            selectedUserId,
            onSelectUserId
        }}
        >
            {children}
        </UsersContext.Provider>

    )

}