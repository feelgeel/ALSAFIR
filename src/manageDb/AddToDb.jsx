import React from 'react'

export default function AddToDb() {
  return (
    <div>
      <button disabled>add</button>
      <button><a href="/manageDb/update">update</a></button>
      <button><a href="/manageDb/delete">delete</a></button>
    </div>
  )
}
