import { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../Variables.css';
import './NavigationHeader.css';

export default class NavigationHeader extends Component {

    
    render()
    {
        return (
            <header className="Navigation-header">
                <nav>
                    <ul>
                        {this.props.links?.map((element,i) => {
                            return (<li key={i.toString()}><a href={'#' + element}> {element}</a></li>);
                        })}
                    </ul>
                    
                    <NavLink to="/" className="Test"> hi </NavLink>
                </nav>
                
            </header>
        );
    }
}
