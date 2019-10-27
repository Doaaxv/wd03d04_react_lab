import React, { Component } from 'react'

export default class Fave extends Component {
    constructor (props){
        super(props)
        this.state={
            isFave:false
        }
    }
    /**className on the div is add_to_queue. However, if the film is already favorited, then the film is already 
     * in the queue. Therefore, when isFave: true, the className should instead be remove_from_queue */


    /**When isFave: true, you want to give the div the class remove_from_queue. When isFave: false you want
     * to give the div the class add_to_queue */

     /**You also want to change the text that's rendered in the p to be
      *  the same text as the class - remove_from_queue or add_to_queue */
    handleClick = (e) => {
        console.log("handling Fave click!")
        this.setState({isFave: !this.state.isFave})
        e.stopPropagation()
    }

    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={"film-row-fave "+isFave} onClick={this.handleClick}>
                <p className="material-icons">{isFave}</p>
            </div>
        )
    }
}
