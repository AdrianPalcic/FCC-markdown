

import { marked } from "marked";



marked.setOptions({
   breaks: true,
   highlight: function (code) {
     return Prism.highlight(code, Prism.languages,javascript, "javascript")
   }
 });
 
 const renderer = new marked.Renderer();
 renderer.link = function (href, title, text) {
   return `<a href="${href}" target="_blank">${text}</a>`;
 }
 

function Paper2({value}) {

    return ( 
        <div className="paper paper2">
        <h5>Marked</h5>
           <div className="output" id="preview" dangerouslySetInnerHTML={
           { __html: marked(value, { renderer : renderer }) }
           }>
           
           </div>
      </div>
    )
 }

 export default Paper2;
