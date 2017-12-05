import React, { Component } from 'react';
import { connect } from 'react-redux';

const Root = (props) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
