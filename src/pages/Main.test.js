/**
 * Copyright (c) 2017 Yuhogyun - portfolio
 * All rights reserved
 *
 * @flow
 * @author Yuhogyun
 */

import React from 'react';
import ReactDOM from 'react-dom';
import i18n from "./../common/langs/i18n"

import { I18nextProvider } from 'react-i18next';
import Index from './index';


it('renders index page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<I18nextProvider i18n={ i18n }><Index /></I18nextProvider>, div);
});
