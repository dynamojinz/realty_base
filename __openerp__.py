# -*- coding: utf-8 -*-
{
    'name': "Realty",

    'summary': """Chinese real estate module. """,

    'description': """
        Build a module for chinese real estate field.
        First function is for TouMo.
    """,

    'author': "Jin Zan",
    'website': "https://github.com/dynamojinz",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/openerp/addons/base/module/module_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
       'demo/demo.xml',
    ],
    'installable' : True,
    'application' : True,
}
