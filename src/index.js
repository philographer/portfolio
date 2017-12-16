/**
 * Copyright (c) 2017 Yuhogyun - portfolio
 * All rights reserved
 *
 * @flow
 * @author Yuhogyun
 */

// External Dependency
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

// Internal Dependency
import Pages from './pages'

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import i18n from "./common/langs/i18n"




// append app to dom
ReactDOM.render(<I18nextProvider i18n={ i18n }><Pages /></I18nextProvider>, document.getElementById('root'));
registerServiceWorker();