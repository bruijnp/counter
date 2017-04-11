import React from 'react';
import {render} from 'react-dom';
//import Translation from 'i18n-react';
import {App} from './app';

//import './styles/styles.scss';

//const langFile = require('json!yaml!./lang-nl.yml');

//Translation.setTexts(langFile);
render(<App />, document.getElementById('app'));
