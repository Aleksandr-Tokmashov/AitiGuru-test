Ext.define('AitiGuru.test.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'price', type: 'float'},
        {name: 'quantity', type: 'int'}
    ],
    data: [
        { id: 1, name: 'Notebook Lenovo', description: 'Ноутбук ThinkPad T460', price: 100, quantity: 2 },
        { id: 2, name: 'Keyboard OKLICK', description: 'Клавиатура OKLICK 140M', price: 50, quantity: 8 },
        { id: 3, name: 'Network adapter', description: 'Сетевой адаптер WIFI D-Link', price: 7, quantity: 0 },
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
