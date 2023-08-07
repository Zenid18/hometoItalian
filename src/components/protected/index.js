import React, { useEffect, useState } from 'react'
import { getData, storageKey } from '../../constants/storage';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from '../login';
const Protected = (props) => {
    const [showLogin, setShowLogin] = useState(false)
    const navigate = useNavigate()
    let Cmp = props?.Cmp
    useEffect(() => {
        const auth = getData(storageKey?.AUTH_TOKEN);
        if (!auth || auth == "undefined") {
            navigate('/')
        }
        else {
            navigate(window?.location?.pathname)
        }
    }, [])



    return (
        <>
            <div>
                <Cmp />

            </div>
            {showLogin ? <Login /> : ""}
        </>
    )
}
export default Protected;