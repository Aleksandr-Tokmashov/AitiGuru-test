Ext.define("AitiGuru.test.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onIdFilterEnter: function (field, e) {
    if (e.getKey() === e.ENTER) {
      var value = field.getValue();
      var grid = field.up("grid");
      var store = grid.getStore();

      store.clearFilter();

      if (value) {
        store.addFilter({
          id: "idFilter",
          filterFn: function (item) {
            return item.get("id") == value;
          },
        });
      }
    }
  },

  onDescFilterEnter: function (field, e) {
    if (e.getKey() === e.ENTER) {
      var value = field.getValue().toLowerCase();
      var grid = field.up("grid");
      var store = grid.getStore();

      store.clearFilter();

      if (value) {
        store.addFilter({
          id: "descFilter",
          filterFn: function (item) {
            var desc = item.get("description") || "";
            return desc.toLowerCase().indexOf(value) !== -1;
          },
        });
      }
    }
  },

  onCellClick: function (view, cell, cellIndex, record, row, rowIndex, e) {
    const fieldName = view.getGridColumns()[cellIndex].dataIndex;

    if (fieldName === "name") {
      this.showProductCard(record);
    }
  },

  showProductCard: function (record) {
    var card = Ext.create("AitiGuru.test.view.main.ProductCard", {
      title: Ext.String.format("Карточка товара: {0}", record.get("name")),
    });

    card.down("form").loadRecord(record);
    this.originalRecordData = Ext.clone(record.getData());
    this.currentRecord = record;
    this.productCard = card;

    card.show();
  },

  onSaveClick: function () {
    var card = this.productCard;
    var form = card.down("form");
    var record = this.currentRecord;
    var newValues = form.getValues();

    var isChanged = false;
    Ext.Object.each(this.originalRecordData, function (key, value) {
      if (newValues[key] != value) {
        isChanged = true;
        return false;
      }
    });

    if (isChanged) {
      Ext.Msg.show({
        title: "Сохранение",
        message: "Имеются измененные данные. Сохранить изменения?",
        buttons: Ext.Msg.YESNO,
        buttonText: {
          yes: "Да",
          no: "Нет",
        },
        icon: Ext.Msg.QUESTION,
        fn: function (btn) {
          if (btn === "yes") {
            record.set(newValues);
            card.close();
          }
        },
      });
    } else {
      Ext.Msg.alert("Информация", "Нет изменений для сохранения");
    }
  },

  onCancelClick: function () {
    this.productCard.close();
  },

  onLogoutClick: function () {
    localStorage.removeItem("LoggedIn");

    this.getView().destroy();

    Ext.create({
      xtype: "login",
    });
  },

  addNewTab: function () {
    var tabs = this.getView();
    var tab = tabs.add({
      title: "Товары",
      items: [
        {
          xtype: "productlist",
        },
      ],
    });

    tabs.setActiveTab(tab);
  },
});
