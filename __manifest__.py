# -*- coding: utf-8 -*-
{
    'name': "Base Realty Module",

    'summary': """
        Base module of realty ERP.
        Developed by jinz """,

    'description': """
        Plan import.
        Notification.
        Complete on mobile phone.
        Etc.
    """,

    'author': "Jin Zan",
    'website': "http://www.coolcollar.cn",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','website'],

    # always loaded
    'data': [
        # 'security/security.xml',
        # 'security/ir.model.access.csv',
        'views/building_views.xml',
        # 'views/product_templates.xml',
        # 'views/product_reports.xml',
        'views/menus.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        # 'demo/demo.xml',
    ],
    'installable': True,
    'application': True,
}
