# -*- coding: utf-8 -*-
from openerp import http

# class Realty(http.Controller):
#     @http.route('/realty/realty/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/realty/realty/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('realty.listing', {
#             'root': '/realty/realty',
#             'objects': http.request.env['realty.realty'].search([]),
#         })

#     @http.route('/realty/realty/objects/<model("realty.realty"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('realty.object', {
#             'object': obj
#         })