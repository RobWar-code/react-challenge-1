import React, { Component } from 'react';
import css from './css/NavBarForm.module.css';

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
                <div>
                    <form>
                        <label>Username:
                            <input type="text" name="username" />
                        </label>
                        <label>Password:
                            <input type="password" name="password" />
                        </label>
                        <button onClick={this.clickHandler}>SUBMIT</button>
                    </form>
                </div>
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