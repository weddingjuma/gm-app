Ext.define('GM.view.spents.New', {
    extend: 'Ext.form.Panel',
    xtype: 'newspent',
    title: 'Spent',
    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Number',
        'Ext.field.DatePicker', 'Ext.field.Select'],

    config: {
        title: 'spent',
        iconCls: 'compose',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Goodbye Money'
            },
            {
                xtype: 'fieldset',
                title: 'Set spent',
                items: [
                    {
                        xtype: 'numberfield',
                        label: 'Amount',
                        name: 'amount'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Category',
                        name: 'category_id',
                        valueField: 'value',
                        displayField: 'name',
                        /* store: 'Categories',*/
                        listeners: {
                            /* Hack to set an empty category on select field.
                               Sencha touch should provide a default way to do
                               this with store option. It should be painted
                               event to update when a category is added. */
                            painted: function() {
                                var opts = [{ name: '', value: undefined }];
                                Ext.getStore('Categories').each(function(record) {
                                    opts.push({ name: record.data.name, value: record.data.id });
                                });
                                this.setOptions(opts);
                            }
                        }
                    },
                    {
                        xtype: 'textfield',
                        label: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Date',
                        name: 'date',
                        value: new Date()
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Say Goodbye!',
                ui: 'confirm',
                action: 'createSpent',
                margin: '0 0 10 0'
            },
            {
                xtype: 'button',
                text: 'Say Goodbye! +1',
                ui: 'action',
                action: 'createOtherSpent'
            }
        ]
    }
});