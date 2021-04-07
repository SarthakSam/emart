import { createContext, useContext, useState } from "react";

const NotificationsContext = createContext({});

export function useNotifications() {
    return useContext(NotificationsContext);
}

export function NotificationsProvider({children}) {
    const [notifications, setNotifications] = useState([]);

    const showNotification = ({message, type}) => {
        setNotifications(notifications => [...notifications, {
            id: (new Date()).toISOString(),
            message,
            type
        }])
    }

    const showSuccessMessage = (message) => {
        showNotification({message, type: 'SUCCESS'});
    }

    const showWarningMessage = (message) => {
        showNotification({message, type: 'WARNING'});
    }

    const showErrorMessage = (message) => {
        showNotification({message, type: 'ERROR'});
    }


    const deleteNotification = (id) => {
        setNotifications(notifications => notifications.filter( notification => id !== notification.id ));
    }

    return (
    <NotificationsContext.Provider value = {{ notifications, showSuccessMessage, showErrorMessage, showWarningMessage, deleteNotification }}>
        {children}
    </NotificationsContext.Provider>
    );
}