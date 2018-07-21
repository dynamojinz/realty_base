odoo.define('sce_designlib.percent_field', function (require) {
'use strict';

//var AbstractField = require('web.AbstractField');
var basicFields = require('web.basic_fields');
var fieldRegistry = require('web.field_registry');
//var field_utils = require('web.field_utils');

var FieldPercent = basicFields.FieldFloat.extend({
    supportedFieldTypes: ['float'],

    /**
     * @override
     * @private
     */
    _renderReadonly: function () {
        this.$el.text(this._formatValue(this.value*100.0)+"%");
    },
});

fieldRegistry.add('percent', FieldPercent);

return {
    FieldPercent: FieldPercent,
};

});
