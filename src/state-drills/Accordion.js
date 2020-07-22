import './Accordion.css'
import React, { Component } from 'react'

export default class Accordion extends Component {
    static defaultProps = {
        sections: [
            {
                title: 'A String Containg the Title',
                content: 'A String Containing the Content'
            }]
    };

    state = { activeSelectionIndex: null }

    renderSection(section, dex, activeSelectionIndex) {
        return (
            <li className='Accordion-li'>
                <button className='AccButt' onClick={() => this.setState({ activeSelectionIndex: dex })} >
                {section.title}
                </button>

                {(activeSelectionIndex === dex) && <p className='Content-P'>{section.content}</p>}
            </li>
        )
    }


    render() {
        const { activeSelectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, dex) =>
                    this.renderSection(section, dex, activeSelectionIndex)
                )}
            </ul>
        )
    }

}
