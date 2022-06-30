import React from 'react'

export default function Card(props) {
  return (
    <div>
        <p>{props.id}</p>
        <p>{props.name}</p>
    </div>
  )
}
