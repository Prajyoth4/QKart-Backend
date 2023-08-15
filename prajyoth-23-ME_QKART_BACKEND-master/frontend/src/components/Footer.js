import { Layout } from "antd";
import React from "react";

import "./Footer.css";

const { Footer: AntdFooter } = Layout

export default class Footer extends React.Component {
  render() {
    return (
      <Layout>
        <AntdFooter className="footer">
          <img src="icon-white.png" alt="QKart"></img>
        </AntdFooter>
      </Layout>
    );
  }
}
