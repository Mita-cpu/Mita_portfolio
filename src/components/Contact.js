import React, {Component} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import "../styles/Contact.css"


class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            message:'',
            email:'',
            subject:''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSubjectChange = (event) => {
        this.setState({
            subject: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log(`${this.state.name} ${this.state.message} ${this.state.email} ${this.state.subject}`)
    }
    
        render() { return (
        <div className="contact section" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Please feel feel to contact me for further details about myself and my aspirations</p>
                    <div className="icons">
                        <div class="row">
                            <PersonIcon className="fas fa-user" />
                            <div class="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Mita Raboya</div>
                            </div>
                        </div>
                        <div className="row">
                           <HomeIcon  className="fas fa-map-marker-alt"/>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Albeton, Johannesburg</div>
                            </div>
                        </div>
                        <div className="row">
                            <EmailIcon />
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">mitaraboya@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form onSubmit= {this.handleSubmit}>
                        <div className="fields">
                            <div className="field name">
                                <input type="text" value={this.state.name} onChange ={this.handleUsernameChange} placeholder="Name" required />
                            </div>
                            <div className="field email">
                                <input type="email" value={this.state.email} onChange ={this.handleEmailChange} placeholder="Email" required />
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" value={this.state.subject} onChange ={this.handleSubjectChange} placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" value = {this.state.message} onChange ={this.handleMessageChange} placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
    }
}

export default Contact;
