import {Component} from 'react';
import {useRef} from 'react';
import css from './css/NavBarSimple.module.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessageState: true
        };
        this.eventHandler = this.eventHandler.bind(this);
    }

    getMessage() {
        var message = "";
        this.state.welcomeMessage === true ?  message = "Welcome to my site" : message = "Thankyou for checking in";
        return message;
    }

    eventHandler = event => {
        const ref = useRef(null);
        this.setState(prevstate => ({welcomeMessageState: !prevstate.welcomeMessageState}));
        var elem = event.target.getAttribute("data-message_id");
        ref.setAttribute(elem, this.getMessage());
    }

    render() {
        return (
            <div className={css.navbarSimple}>
                <span id="message">{this.getMessage()}</span>
                <button onClick={this.eventHandler} data-message-id="message">login</button>
            </div>
        );
    }
}

export default Navbar;