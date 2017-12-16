/**
 * Copyright (c) 2017 Yuhogyun - portfolio
 * All rights reserved
 *
 * @flow
 * @author Yuhogyun
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});