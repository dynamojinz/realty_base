# -*- coding: utf-8 -*-

from openerp import models, fields, api

class RealtyProject(models.Model):
    _name = 'realty.project'

    name = fields.Char()
    code = fields.Char()
    value = fields.Integer()
#   value2 = fields.Float(compute="_value_pc", store=True)
    description = fields.Text()
    # 占地面积
    floor_area = fields.Float(digits=(32,4))
    # 容积率
    plot_ratio = fields.Float(digits=(32,4))

#
#     @api.depends('value')
#     def _value_pc(self):
#         self.value2 = float(self.value) / 100


# 产品类型，如联排别墅，高层住宅，办公楼等
# 与楼栋为多对多关系
class RealtyProduct(models.Model):
    _name = 'realty.product'

    name = fields.Char()
    code = fields.Char()
    description = fields.Text()

# 楼栋，与项目是n对1的关系，投模系统中最小测算单元
class RealtyBuilding(models.Model):
    _name = 'realty.building'

    name = fields.Char()
    code = fields.Char()
    description = fields.Text()

# 科目
class RealtyAccount(models.Model):
    _name = 'realty.account'
    
    # 科目名称
    name = fields.Char()
    # 科目代码
    code = fields.Char()
    # 科目描述
    description = fields.Text()
    
