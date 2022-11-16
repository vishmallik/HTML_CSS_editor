import React from "react";

class Preview extends React.Component {
  constructor() {
    super();
    this.preview = React.createRef();
  }
  componentDidMount() {
    this.showPreview();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.css !== this.props.css || prevProps.xml !== this.props.xml) {
      this.showPreview();
    }
  }

  showPreview = () => {
    if (this.preview.current) {
      let { xml, css } = this.props;
      let document = this.preview.current.contentWindow.document;
      let style = document.createElement("style");
      style.innerText = css;
      document.head.append(style);
      document.body.innerHTML = xml;
    }
  };
  render() {
    return (
      <div className="window">
        <div className="window-header preview-header">
          <div className="action-buttons"></div>
          <p className="language">{this.props.text}</p>
        </div>
        <iframe
          title="HTML/CSS Preview"
          ref={this.preview}
          id="code_result"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    );
  }
}

export default Preview;
