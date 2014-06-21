# -*- coding: utf-8 -*-
"""
Program: lab1_1.py
Author: Ana María García Peláez

Calcular la tasa de impuestos de un alimento

1. Declaración de variables
	tax tasa de impuestos
	tax_one tasa de impuesto adicional
2. Entradas
	Valor del alimento
	Número de alimentos
3. Computaciones:
	Tasa de entrada = suma de número de alimentos + tax + tax_one
4. Salida:
	El calvulo de los elementos comprados

"""

# Declaración de Constantes
TAX = 0.16
TAX_ONE = 0.03

# Entradas de teclado

food = input('Ingrese el valor de Alimento ')
amount_food = input('Ingrese la cantidad de Alimentos ')

# Computaciones

total = (food * amount_food) * (TAX + TAX_ONE)

# Salidas
print "El total de los alimentos es:", total