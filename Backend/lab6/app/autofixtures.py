from app.models import Category, Item
from autofixture import generators, register, AutoFixture

import random

nouns = ("Hardware", "Software", "Test-Software", "Text-Hardware", "Apps", "BigData",)

class CategoryFixture(AutoFixture):
	field_values = {
		'name' : generators.random.choice(nouns),
		'slug' : generators.SlugGenerator('cidei'),
	}

class ItemFixture(AutoFixture):
	field_values = {
		'update_item' : generators.DateTimeGenerator(),
	}

register(Category, CategoryFixture)
register(Item, ItemFixture)