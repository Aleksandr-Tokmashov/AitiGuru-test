Ext.define('AitiGuru.test.view.main.ProductCard', {
    extend: 'Ext.window.Window',
    xtype: 'productcard',
    
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Number'
    ],
    
    title: 'Карточка товара: {0}',
    width: 400,
    modal: true,
    layout: 'fit',
    
    items: [{
        xtype: 'form',
        bodyPadding: 10,
        defaults: {
            xtype: 'displayfield',
            labelWidth: 100,
            anchor: '100%'
        },
        items: [{
            fieldLabel: 'ID',
            name: 'id'
        }, {
            fieldLabel: 'Наименование',
            name: 'name'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Цена',
            name: 'price',
            minValue: 0,
            decimalPrecision: 2,
            allowBlank: false
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Количество',
            name: 'quantity',
            minValue: 0,
            allowDecimals: false,
            allowBlank: false
        }]
    }],
    
    buttons: [{
        text: 'Сохранить',
        handler: 'onSaveClick'
    }, {
        text: 'Отмена',
        handler: 'onCancelClick'
    }]
});