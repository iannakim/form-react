import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
    
    state = {
        name: "",
        email: "",
        phone: "",
        url: ""
    }

    handleChange = (evt) => {
        this.setState({
          [evt.target.name] : evt.target.value
        })
      }
    

    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>

            <form className="form" onSubmit={this.handleSubmit}>
                <p>
                    <label for="name">Name</label>
                    <input type="text"
                        id="name"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="name"
                        placeholder="Enter your name"
                    /></p>
                  <p><input type="text"
                      id="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"
                      placeholder="Enter your email address"
                  /></p>
                  <p><input type="text"
                      id="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      name="phone"
                      placeholder="Enter your phone number"
                  /></p>
                <p><input type="text"
                      id="url"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      name="url"
                      placeholder="Enter your blog URL"
                  /></p>
                <div className="small-6 small-centered text-center columns">
                    <a type="submit" href="#" className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
