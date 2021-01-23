requirejs.config({
    'baseUrl': 'src',
    'paths': {
        'main': 'main',
        'jq': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        'jqui': 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min',
        'mgr': '../api/data/datamgr'
    }
});

requirejs(['main']);