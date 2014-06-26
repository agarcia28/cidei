class Person(object):
	""" Representacion de una persona """

	def __init__(self, name, id_per, age):
		self.name = name
		self.id_per = id_per
		self.age = age

	def getName(self):
		""" Retornando el nombre """
		return self.name

	def getIdPer(self):
		""" Retornando el id de la persona """
		return self.id_per

	def getAge(self):
		""" Retornando la edad de la persona """
		return self.id_per

	def __str__(self):
		""" Retornando los string de la clase persona """
		return "%s - %d - %d" % (self.name, self.id_per, self.age)

class Teacher(Person):
	""" Representacion de un profesor """

	def __init__(self, name, id_per, age, profession, number_id):
		self._profession = profession
		self._number_id = number_id

		""" Uso de super para llamar el constructor de Person """
		super(Teacher, self).__init__(name, id_per, age)

	def getProfession(self):
		""" Retornando la profesion """
		return self._profession

	def getNumberId(self):
		""" Retornando la tarjeta profesional """
		return self._number_id

class Student(Person):
	""" Representacion de un estudiante """

	def __init__(self, name, id_per, age, number):	
		self._assigments =[]
		for count in xrange(number):
			self._assigments.append("None")
		self._scores = []
		for count in xrange(number):
			self._scores.append(0)

		""" Forma sencilla de llamar al constructor de Person """
		Person.__init__(self, name, id_per, age)

	def setAssigments(self, i, assigement):
		""" Asigna nombre a la materia """
		self._assigments[i - 1] = assigement

	def getAssigments(self, i):
		""" Retorna el valor del la materia """
		return self._assigments[i - 1]

	def setScore(self, i, score):
		""" Reset el score, continua des 1. """
		self._scores[i - 1] = score

	def getScore(self, i):
		""" Retorna el valor del score """
		return self._scores[i - 1]