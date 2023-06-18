import {Component} from 'react';
import css from './css/NavBarSimple.module.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome",
            login: "Login"
        };
    }


    eventHandler() {
        this.setState((prevState, prevProps) => {
            var m1 = "";
            if (prevState.message === "Welcome") {
                m1 = "Hello";
            }
            else if (prevState.message === "Hello") {
                m1 = "Goodbye";
            }
            else {
                m1 = "Hello";
            }
            return {
                message: m1,
                login: prevState.login === "Login"? "Logout": "Login"
            };
        }, () => {
            console.log("Message State:", this.state.message)
            console.log("Login State:", this.state.login)
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
                <div>
                    <h1>My Gallery</h1>
                </div>
                <div>
                    <span id="message">{this.state.message}</span>
                    <button onClick={() => this.eventHandler()}>{this.state.login}</button>
                </div>
            </div>
        );
    }
}

export default Navbar;