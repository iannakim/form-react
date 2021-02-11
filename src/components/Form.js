import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import '../index.css';

class Form extends Component {
    
    state = {
        name: "",
        email: "",
        phone: "",
        url: "",
        error: "",
        errorMsg: false
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
        // console.log(evt.target)
    }

    handleSubmit = (evt) => {
        // console.log(this.state.error)
        let errorMsg = errorText ? 'yellowColor' : 'redColor'

        let errorText = "";

        if (this.state.name.length < 1 & this.state.name == "") {
            errorText += ("• Please enter your full name\n")
        }
        if (!this.state.email.includes("@") & this.state.email.length > 0) {
            errorText += ("• Not a valid email address\n")
        }
        if (this.state.phone.length !== 10 & this.state.phone.length > 0) {
            errorText += ("• Phone number not 10 digits\n")
        }
        if (!this.state.url.includes(".com") & this.state.url.length > 0) {
            errorText += ("• Not a valid URL")
            //next step: read documentation on npm validator for emails and urls
        }
        console.log(errorText);

        this.setState({error: errorText})
    }


    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>

            <form className="form" onSubmit={this.handleSubmit}>
                <p>
                    <label className="form-label" for="name">Name</label>
                    <input type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                        placeholder="Enter your name"
                    /></p>
                  <p>
                  <label className="form-label" for="email">Email</label>
                  <input type="text"
                      id="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"
                      placeholder="Enter your email address"
                  /></p>
                  <label className="form-label" for="email">Phone</label>
                  <p><input type="text"
                      id="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      name="phone"
                      placeholder="Enter your phone number"
                  /></p>
                  <label className="form-label" for="email">Blog URL</label>
                <p><input type="text"
                      id="url"
                      value={this.state.url}
                      onChange={this.handleChange}
                      name="url"
                      placeholder="Enter your blog URL"
                  /></p>
                <div className="form-label" className="small-6 small-centered text-center columns">
                    <a type="submit" onClick={this.handleSubmit} href="#" className="button success expand round text-center">Verify</a>
                </div>
                <p className="error">{this.state.error}</p>
            </form>
        </div>);
    }
}

export default Form;
