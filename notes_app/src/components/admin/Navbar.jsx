import React from 'react'

function Navbar() {
  return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Admin</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Upgrade Plan</a></li>
      <li>
        <details>
          <summary>Information</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>All users</a></li>
            <li><a>All Notes</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
