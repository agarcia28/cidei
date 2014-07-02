from django.test import TestCase
from app.models import Category, Item
from datetime import datetime

class TestCidei(TestCase):
	def setUp(self):
		self.cat_one = Category.objects.create(name="Hardware", slug="hardware")
		self.item_one = Item.objects.create(listing='t', name='Computers', category=self.cat_one, department='Electronics', description='lalalala', update_item=datetime.now())
		self.item_two = Item.objects.create(listing='P', name='Servers', category=self.cat_one, department='Electronics', description='lolololol', update_item=datetime.now())

	def test_cat_one(self):
		response = self.client.get('/categories/%s/' % self.cat_one.id)
		self.assertEqual(response.status_code, 200)
		self.assertContains(response, 'Hardware')

	def test_item_one(self):
		response = self.client.get('/items/%s/' % self.item_one.id)
		self.assertEqual(response.status_code, 200)
		self.assertContains(response, 'Computers')