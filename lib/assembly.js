"use strict";

requirejs.config({
  'baseUrl': 'src',
  'paths': {
    'main': 'main',
    'jq': '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
    'jqui': '//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min',
    'mgr': '../api/datamgr'
  }
});
requirejs(['main']);