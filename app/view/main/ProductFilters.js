Ext.define('AitiGuru.test.view.main.ProductFilters', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'productfilters',
    
    requires: [
        'AitiGuru.test.view.main.MainController'
    ],
    
    controller: 'main',
    layout: {
        type: 'vbox',
        align: 'left'
    },
    
    
    items: [{
        xtype: 'textfield',
        reference: 'idFilter',
        fieldLabel: 'ID',
        emptyText: 'Введите фильтр...',
        listeners: {
            specialkey: 'onIdFilterEnter'
        }
    }, {
        xtype: 'textfield',
        reference: 'descFilter',
        fieldLabel: 'Описание',
        emptyText: 'Введите фильтр...',
        listeners: {
            specialkey: 'onDescFilterEnter'
        }
    }]
});