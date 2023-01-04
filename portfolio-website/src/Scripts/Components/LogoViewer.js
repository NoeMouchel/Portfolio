import { Component } from 'react';
import '../../Styles/LogoViewer.css';
import ToolLogo from './ToolLogo';

import ICON_Blender         from '../../Assets/ToolsLogo/ICON_Blender.png'
import ICON_Cpp             from '../../Assets/ToolsLogo/ICON_Cpp.png'
import ICON_Csharp          from '../../Assets/ToolsLogo/ICON_Csharp.png'
import ICON_Flutter         from '../../Assets/ToolsLogo/ICON_Flutter.png'
import ICON_Git             from '../../Assets/ToolsLogo/ICON_Git.png'
import ICON_Javascript      from '../../Assets/ToolsLogo/ICON_Javascript.png'
import ICON_Perforce        from '../../Assets/ToolsLogo/ICON_Perforce.png'
import ICON_Python          from '../../Assets/ToolsLogo/ICON_Python.png'
import ICON_React           from '../../Assets/ToolsLogo/ICON_React.png'
import ICON_Unity           from '../../Assets/ToolsLogo/ICON_Unity.png'
import ICON_UnrealEngine    from '../../Assets/ToolsLogo/ICON_UnrealEngine.png'

export default class LogoViewer extends Component {
    constructor(props) {
        super(props)
        this.state = { logo1 : 0, logo2 : 1, logo3 : 2, logo4 : 3}
    }

    logos = [
        ICON_UnrealEngine,
        ICON_Unity,
        ICON_React,
        ICON_Python,
        ICON_Perforce,
        ICON_Javascript,
        ICON_Git,
        ICON_Flutter,
        ICON_Csharp,
        ICON_Cpp,
        ICON_Blender
    ];

    render()
    {
        return (
            <div className = 'Logo-viewer'>
                <ToolLogo>
                    <img src={this.logos[0]} className = 'Logo' alt='Logo1' draggable='false'/>
                    <img src={this.logos[4]} className = 'Logo' alt='Logo2' draggable='false'/>
                    <img src={this.logos[8]} className = 'Logo' alt='Logo2' draggable='false'/>
                </ToolLogo>

                
                <ToolLogo>
                    <img src={this.logos[1]} className = 'Logo' alt='Logo1' draggable='false'/>
                    <img src={this.logos[5]} className = 'Logo' alt='Logo2' draggable='false'/>
                    <img src={this.logos[9]} className = 'Logo' alt='Logo2' draggable='false'/>
                </ToolLogo>

                
                <ToolLogo>
                    <img src={this.logos[2]} className = 'Logo' alt='Logo1' draggable='false'/>
                    <img src={this.logos[6]} className = 'Logo' alt='Logo2' draggable='false'/>
                    <img src={this.logos[10]} className = 'Logo' alt='Logo2' draggable='false'/>
                </ToolLogo>

                
                <ToolLogo>
                    <img src={this.logos[3]} className = 'Logo' alt='Logo1' draggable='false'/>
                    <img src={this.logos[7]} className = 'Logo' alt='Logo2' draggable='false'/>
                </ToolLogo>
            </div>
        );
    }
}
