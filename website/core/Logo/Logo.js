import { ReactComponent} from 'react';
import {ReactComponent as img} from './logo.svg';

class Logo extends ReactComponent {
    render () {
        <img
                src={img}
                alt={this.props.title}
                width="66"
                height="58"
        />
    } 
}