import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/addon/edit/closetag";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/css/css";

function Editor(props) {
  let options = {
    mode: props.language,
    lint: true,
    lineWrapping: true,
    lineNumbers: true,
  };
  return (
    <div className="window">
      <div className="window-header">
        <div className="action-buttons"> </div>
        <p className="language">{props.displayLabel || props.language}</p>
      </div>
      <CodeMirror
        className=" editor"
        value={props.value}
        options={options}
        onBeforeChange={(editor, data, value) => {
          props.handleChange(value, props.language);
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
}
export default Editor;
