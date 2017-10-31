import React from 'react';
import {LocationService, Locator} from 'location';
const {Location} = Locator;

class Availability extends React.Component {
    render () {
        return <span><Location name='othermodule'/></span>;
    }
}

export default Availability;