import React from "react";
import { Link } from "react-router-dom";

class DropClassChange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newClass: "testing-2"
        }
        this.handleClass = this.handleClass.bind(this)
    }

    handleClass(e) {
        e.preventDefault();
        if (this.state.newClass === "testing-2"){
            this.setState({
                newClass: "test-content"
            })
        } else {
            this.setState({
              newClass: "testing-2"
            });
        }
    }

    render () {
        return (
          <>
            <div className={`${this.state.newClass}`}>
              <div className="drop-menu-profile">
                <Link to="#">My Profile</Link>
                <Link to="#">Favorites</Link>
                <Link to="#">Event History</Link>
              </div>
              <div className="drop-menu-languages">
                <h1>Languages</h1>
                <Link to="#">Deutch</Link>
                <Link to="#">English</Link>
                <Link to="#">Español</Link>
                <Link to="#">Français</Link>
                <Link to="#">Italiano</Link>
                <Link to="#">Nederlands</Link>
                <Link to="#">Japanese</Link>
              </div>
              <Link>iOS App</Link>
              <Link>Android App</Link>
              <Link>Help</Link>
            </div>
            <button className="new-btn" onClick={this.handleClass}>
              Change Class
            </button>
          </>
        );
    }
  
  
};

export default DropClassChange;
