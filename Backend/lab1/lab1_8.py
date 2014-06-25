# -*- coding: utf-8 -*-
"""
File: lab1_8.py

Ecuaciones cuadraticas
"""

import math

def sol_cuadratic(**kwargs):
	a = kwargs['a']
	b = kwargs['b']
	c = kwargs['c']

	raiz = lambda x,y,z : math.sqrt((y ** 2) - (4 * x * z)) 

	x_1 = (- b + raiz(a,b,c)) / (2 * a)
	x_2 = (- b - raiz(a,b,c)) / (2 * a)

	print "X1 es: %f y X2 es %f" % (x_1, x_2)

sol_cuadratic(a = -1, b = 4, c = -3)