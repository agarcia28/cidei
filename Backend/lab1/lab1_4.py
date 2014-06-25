# Importar modulo completo "random" en python
import random

smaller = input("Ingrese el numero pequeno: ")
large = input("Ingrese el numero grande o mayor: ")

my_random_number = random.randint(smaller, large)

count = 0

while True:
	count += 1
	user_number = input("Ingrese un numero para comparar: ")
	if user_number < my_random_number:
		print "Es numero pequeno"
	elif user_number > my_random_number:
		print "Es numero grande"
	else:
		print "Lo tienes en:", count, "Vuelve a intentarlo!"
		break