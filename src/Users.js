import React, { useState, useEffect } from 'react'
// import { Table } from 'react-bootstrap'
export default function Users() {
    const [data, setData] = useState([])
    const [mode, setMode] = useState('online');
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users"
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                setData(result)
                localStorage.setItem("users", JSON.stringify(result))
            })
        }).catch(err => {
            setMode('offline')
            let collection = localStorage.getItem('users');
            setData(JSON.parse(collection))
        })
    }, [])
    return (
        <div>
            <div>
                {
                    mode === 'offline' ?
                        <div class="alert alert-warning" role="alert">
                            you are in offline mode or some issue with connection
</div>
                        : null

                }
            </div>
           
        </div>
    )
}