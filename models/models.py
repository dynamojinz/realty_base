# -*- coding: utf-8 -*-

from openerp import models, fields, api

# 产品类型，如联排别墅，高层住宅，办公楼等
# 与楼栋为多对多关系
class RealtyProduct(models.Model):
    _name = 'realty_base.product'

    name = fields.Char()
    code = fields.Char()

    # Constaints
    _sql_constraints = [
            ('name_uniq', 'unique (name)', "Building name already exists!"),
            ('code_uniq', 'unique (code)', "Building code already exists!"),
            ]

# 楼栋，与项目是n对1的关系，投模系统中最小测算单元
class RealtyBuilding(models.Model):
    _name = 'realty_base.building'

    name = fields.Char()
    code = fields.Char()
    product_id = fields.Many2one('realty_base.product')

    # Constaints
    _sql_constraints = [
            ('name_uniq', 'unique (name)', "Building name already exists!"),
            ('code_uniq', 'unique (code)', "Building code already exists!"),
            ]

