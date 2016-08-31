var React = require('react');
var ReactDOM = require('react-dom');
var Marked = require('marked');

var Markdown = React.createClass({

	  getMarkdownText(value) {
    var rawMarkup = marked(value, {sanitize: true});
    return { __html: rawMarkup };
  },
  render() {
    return (
            <div className="col-sm-6">
             <div dangerouslySetInnerHTML={this.getMarkdownText(this.props.value)}>
             </div>
          </div>
    	) 
            
  }
})

var App = React.createClass({
  getInitialState: function() {
    return {
      value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }
  },
  change: function(event) {
     this.setState ({
      value: event.target.value
     })
  },
  render: function(){
  	return(
           <div>
               <div className="col-sm-6">
                <div className="form-group textbox">
                   <textarea className="form-control" rows="25" id="comment" value={this.state.value} onChange={this.change}></textarea>
               </div>
             </div>
              <Markdown value={this.state.value}/>
           </div>
  		)
  }
});

module.exports = App;