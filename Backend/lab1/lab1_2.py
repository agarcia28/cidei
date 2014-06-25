# -*- coding: utf-8 -*-
"""
Program: lab1_2.py
Author: Ana María García Peláez

Calcular la tasa de impuestos de un alimento

1. Ingresar los valores oara saber el rango
	a través de la linea de comandos ingresamos el valor de la calificación
2. Mostrar tipo de calificación
	Se muestra en linea de comandos de la valoración para el rango de la calificación

"""

number = input('Ingrese el número de su calificación: ')

if number > 89:
	letter = 'S'
elif number > 79:
	letter = 'B'
elif number > 69:
	letter = 'A'
else:
	letter = 'Un caso perdido'

print "Su calificación este dentro del rango:", letter 