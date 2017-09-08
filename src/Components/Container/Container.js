import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue:'all',
            btnClicked: false
        }
    }

    btnValue(event) {
        event.preventDefault();
        this.setState({
            filterValue : event.target.innerHTML.toLowerCase(),
            btnClicked: true
        })
    }
    render() {
        let reactVideos = this.props.videos;
        let btnClass = this.state.btnClicked ? 'btn btn-primary' : 'btn btn-primary';
        return(
            <div className="container-fluid">
                <div className="row Filter-section">
                    <div className="col-lg-12 col-md-12 col-xs-12">
                        <div className="btn-group pull-left" role="group">
                            <button type="button" className={btnClass} onClick={this.btnValue.bind(this)}>All</button>
                            <button type="button" className={btnClass} onClick={this.btnValue.bind(this)}>React</button>
                            <button type="button" className={btnClass} onClick={this.btnValue.bind(this)}>Angular</button>
                        </div>
                    </div>
                </div>
                <div className="row text-center text-lg-left">
                    {
                        reactVideos.filter((video) => {
                            return (this.state.filterValue !== 'all') ? video.tag === this.state.filterValue : video ;
                        }).map((video) => {
                            return (
                                <div key={video.url} className="col-lg-4 col-md-6 col-xs-12">
                                    <iframe src={video.url} frameBorder="0" allowFullScreen title={video.url}></iframe>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Container;

