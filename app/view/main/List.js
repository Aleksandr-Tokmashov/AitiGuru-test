Ext.define("AitiGuru.test.view.main.List", {
    extend: "Ext.grid.Panel",
    xtype: "productlist",

    requires: [
        "AitiGuru.test.store.Products",
        "AitiGuru.test.view.main.ProductFilters",
        "AitiGuru.test.view.main.ProductCard"
    ],

    title: "Список товаров",

    store: {
        type: "products",
    },

    dockedItems: [{
        xtype: 'productfilters',
        dock: 'top'
    }],

    columns: [
        { text: "ID", dataIndex: "id", flex: 1 },
        { text: "Имя", dataIndex: "name", flex: 1 },
        { text: "Описание", dataIndex: "description", flex: 1 },
        {
            text: "Цена",
            dataIndex: "price",
            flex: 1,
        },
        {
            text: "Количество",
            dataIndex: "quantity",
            renderer: function (v, m) {
                if (v === 0) {
                    m.style = "background-color: red";
                }
                return v;
            }, 
            flex: 1
        },
    ],

    listeners: {
        cellclick: "onCellClick",
    }
});