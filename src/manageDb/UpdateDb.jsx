import React from 'react'

export default function UpdateDb() {
  return (
    <div>
     <button><a href="/manageDb/add">add</a></button>
     <button disabled>update</button>
      <button><a href="/manageDb/delete">delete</a></button>
    </div>
  )
}
