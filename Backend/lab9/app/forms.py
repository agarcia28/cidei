from django import forms

from app.models import L_TYPES, C_TYPES, Category, Item

class CategoryForm(forms.Form):
	name = forms.CharField(max_length=255)
	slug = forms.SlugField(max_length=255)
	type_category = forms.ChoiceField(choices=C_TYPES, initial='u')
	description = forms.CharField(widget=forms.Textarea)
	update_category =forms.DateTimeField()
	"""
	class Meta:
		model = Category

		#fields = ('name', 'slug', 'description', 'update_category',)
	"""
	

class ItemForm(forms.Form):
	listing = forms.ChoiceField(choices=L_TYPES, initial='t')
	name = forms.CharField(max_length=255)
	category = forms.ModelChoiceField(Category.objects.all())
	department = forms.CharField(max_length=255)
	description = forms.CharField(widget=forms.Textarea)
	update_item =forms.DateTimeField()

	def clean_department(self):
		data = self.cleaned_data['department']

		if data not in ['Desarrollo', 'Herramientas', 'Test']:
			raise forms.ValidationError('El departamento puede ser "Desarrollo", "Herramientas" y/o "Test"')

		return data
