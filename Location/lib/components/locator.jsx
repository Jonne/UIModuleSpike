import React from 'react';
import withProps from 'recompose/withProps'

class Location extends React.Component {
    render() {
        return <span>Location: {this.props.name}</span>;
    }
}

export { Location };

class Locator extends React.Component {
    render() {

        var location = this.props.renderLocation ?
            this.props.renderLocation() :
            <Location name='test' />;

        return <div>
            <span>Locator</span>
            { location }
        </div>;
    }
}

Locator.propTypes = {
    renderLocation: React.PropTypes.func
}

var defaultComponent = Locator;

function registerLocationRenderer(renderer) {
    defaultComponent = withProps({renderLocation: renderer})(defaultComponent);
}

export { registerLocationRenderer };


export default () => defaultComponent;