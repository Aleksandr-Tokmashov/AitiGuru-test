Ext.define("AitiGuru.test.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "AitiGuru.test.view.main.MainController",
    "AitiGuru.test.view.main.MainModel",
    "AitiGuru.test.view.main.List",
  ],

  controller: "main",
  viewModel: "main",
  plugins: "viewport",

  ui: "navigation",

  titleRotation: 0,
  tabRotation: 0,
  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "Учет товаров",
      },
      flex: 1,
    },
    items: [
      {
        xtype: "button",
        text: "Товары",
        margin: "10 10",
        handler: "addNewTab",
      },
      {
        xtype: "button",
        text: "Выход",
        margin: "10 10",
        handler: "onLogoutClick",
      },
      {
        xtype: "tbfill",
        flex: 8,
      },
    ],
  },

  tabBar: {
    flex: 2,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          textAlign: "left",
        },
        tall: {
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Товары",
      items: [
        {
          xtype: "productlist",
        },
      ],
    },
    
  ],
});
