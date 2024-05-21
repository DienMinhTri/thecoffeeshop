import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const fetchUserData = async () => {
        try {
            // Gọi API để lấy thông tin người dùng
            const response = await fetch('http://10.0.2.2:3000/api/profile');
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
            // Set dữ liệu vào state userData
            setUserData(userData);
            console.log(userData)
        } catch (error) {
            console.error(error);
            // Xử lý lỗi
        }
    };
    return (
        <UserContext.Provider value={{ userData, setUserData, fetchUserData }}>
            {children}
        </UserContext.Provider>
    );
};