"""
File: lab1_6.py
Para que no se les olvide, esto es un comentario tipo
Docstring
"""

dstring = raw_input("Ingrese el string de enteros: ")

binary = ""

div = int(dstring)

while div > 0:
	mol = div % 2
	binary += str(mol)
	print "%5d%8d%12s" % (div, mol, binary[::-1])
	div = div / 2
print "El valor en bits es:", binary[::-1]