import React, { Component } from 'react';
import css from './css/NavBarForm.module.css';
import NavBarLogin from './NavBarLogin.js';

export class NavBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false
    };
  }

  clickHandler = () => {
    this.setState((prevState, prevProps) => { 
        return {
            isLoggedIn: prevState.isLoggedIn ? false: true
        }
    })
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
              <NavBarLogin clickHandler={this.clickHandler} />
            ):
            (
                <div>
                    <button onClick={this.clickHandler}>Login</button>
                </div>
            )
        }
      </div>
    )
  }
}

export default NavBarForm;