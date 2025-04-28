Ext.define('AitiGuru-test.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        var view = this.getView();
        var form = view.down('form');
        var values = form.getValues();

        if (values.login === 'admin' && values.password === 'padmin') {
            localStorage.setItem("LoggedIn", true);

            this.getView().destroy();

            Ext.create({
                xtype: 'app-main'
            });
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль', Ext.emptyFn);
        }

    }
});