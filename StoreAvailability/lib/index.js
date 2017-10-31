import {Locator} from 'location';
import withProps from 'recompose/withProps'

//Locator.default = withProps({renderLocation: props => <span>override</span>})(Locator.default);

Locator.registerLocationRenderer(props => <span>override</span>);

import * as Availability from './components/availability.jsx';

export { Availability };