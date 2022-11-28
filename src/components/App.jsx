import React from "react";
import Editor from "./Editor";
import Footer from "./Footer";

import Header from "./Header";
import Preview from "./Preview";

export default class App extends React.Component {
  state = {
    xml: '<center>\n  <img src="https://cutt.ly/JbMvJKT" />\n  <h1>Hello World!</h1>\n</center>',
    css: "h1 {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nimg {\n  width: 200px;\n  height: auto;\n  border-radius: 20px;\n}",
  };
  handleChange = (value, language) => {
    this.setState({ [language]: value });
  };
  render() {
    let { xml, css } = this.state;
    return (
      <>
        <div className="container">
          <Header />
          <div className="flex align-start">
            <div>
              <Editor
                language="xml"
                displayLabel="HTML"
                value={xml}
                handleChange={this.handleChange}
              />
              <Editor
                language="css"
                value={css}
                displayLabel="CSS"
                handleChange={this.handleChange}
              />
            </div>
            <Preview text="OUTPUT" xml={xml} css={css} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
