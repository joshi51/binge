import React from 'react';
import './Feature.scss';
class Feature extends React.Component {
    public render() {
        return (
            <div className="feature-container">
                <h1>Today's Feature</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
            </div>
        )
    }
}

export default Feature;