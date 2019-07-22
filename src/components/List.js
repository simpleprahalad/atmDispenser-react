import React from 'react'

function List(props) {

    return(
        <div>
            <li> {props.count[1]} notes of Rs 1 </li>
            <li> {props.count[2]} notes of Rs 2 </li>
            <li> {props.count[5]} notes of Rs 5 </li>
            <li> {props.count[10]} notes of Rs 10 </li>
            <li> {props.count[20]} notes of Rs 20 </li>
            <li> {props.count[50]} notes of Rs 50 </li>
            <li> {props.count[100]} notes of Rs 100 </li>
            <li> {props.count[200]} notes of Rs 200 </li>
            <li> {props.count[500]} notes of Rs 500 </li>
            <li> {props.count[2000]} notes of Rs 2000 </li>
        </div>
    )
}

export default List;