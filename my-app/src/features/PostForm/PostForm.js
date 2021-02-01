import React from 'react'
import useAxios from 'axios-hooks'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function PostForm() {
    const [{ data, loading }] = useAxios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    })

    let text = ''
    if(loading) {
        text = 'loading...'
    } else if(data) {
        text = data.map(item => {
            return (
                <tbody className="p-x-5">
                    <tr>
                        <th scope="row">{ item.id }</th>
                        <td>{ item.title }</td>
                        <td>{ item.body }</td>
                    </tr>
                </tbody>
            )
        })
    }

    return (
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            { text }
        </table>
    )
}