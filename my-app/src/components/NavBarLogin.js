import React from 'react'

function NavBarLogin(props) {
  return (
    <div>
        <form>
            <label>Username:
                <input type="text" name="username" />
            </label>
            <label>Password:
                <input type="password" name="password" />
            </label>
            <button onClick={props.clickHandler}>SUBMIT</button>
        </form>
    </div>
  )
}

export default NavBarLogin