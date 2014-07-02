from django.shortcuts import render_to_response, get_object_or_404, HttpResponseRedirect
from django.template import Context, RequestContext
from app.models import Item, Category
from app.forms import ItemForm, CategoryForm
# Maodulo serializador de QuerySets para Django
from django.http import HttpResponse
from django.core.serializers import serialize
import json

def index(request):
	context = Context({'title' : 'Hola CIDEI'})
	return render_to_response('index.html', context)

def categories(request):
	categories = Category.objects.all()
	context = Context({'title' : 'Categorias', 'categories' : categories})
	return render_to_response('categories.html', context)

def category_details(request, slug):
	category = get_object_or_404(Category, slug=slug)
	context = Context({
		'title' : 'Detalle de: %s' % category.name,
		'category' : category
	})
	return render_to_response('category-details.html', context)

def add_category(request):
	if request.method == 'POST':
		form = CategoryForm(request.POST)
		if form.is_valid():
			#Crear una nueva categoria
			category = Category.objects.create(
				name = form.cleaned_data['name'],
				slug = form.cleaned_data['slug'],
			)

			#Siempre que cree el dato correctamente redireccionar
			return HttpResponseRedirect('/categories/%s/' % category.slug)
	else:
		form = CategoryForm()

	context = Context({'title' : 'Adicionar Categoria', 'form' : form, 'info_button' : 'Crear Categoria'})
	return render_to_response('add-category.html', context, context_instance=RequestContext(request))

def edit_category(request, slug):
	category = get_object_or_404(Category, slug=slug)
	if request.method == "POST":
		form = CategoryForm(request.POST)
		if form.is_valid():
			category.name = form.cleaned_data['name']
			category.slug = form.cleaned_data['slug']
			category.save()

			return HttpResponseRedirect('/categories/%s/' % category.slug)
	else:
		category_data = {
			'name' : category.name,
			'slug' : category.slug
		}

		form = CategoryForm(initial=category_data)

	context = Context({'title' : 'Editar Categoria', 'form' : form, 'info_button' : 'Actualizar Categoria'})
	return render_to_response('add-category.html', context, context_instance=RequestContext(request))

def items(request):
	items = Item.objects.all()
	context = Context({'title' : 'Items', 'items' : items})
	return render_to_response('items.html', context)

def item_details(request, item_id):
	item = get_object_or_404(Item, id=item_id)
	context = Context({
		'title' : 'Detalle de: %s' % item.name,
		'item' : item
	})
	return render_to_response('item-details.html', context)

def add_item(request):
	if request.method == 'POST':
		form = ItemForm(request.POST)
		if form.is_valid():
			#Crear un nuevo item
			item = Item.objects.create(
				listing = form.cleaned_data['listing'],
				name = form.cleaned_data['name'],
				category = form.cleaned_data['category'],
				department = form.cleaned_data['department'],
				description = form.cleaned_data['description'],
				update_item = form.cleaned_data['update_item'],
			)

			#Siempre que cree el dato correctamente redireccionar
			return HttpResponseRedirect('/items/%s/' % item.id)
	else:
		form = ItemForm()

	context = Context({'title' : 'Adicionar Item', 'form' : form, 'info_button' : 'Crear Item'})
	return render_to_response('add-item.html', context, context_instance=RequestContext(request))

def edit_item(request, item_id):
	item = get_object_or_404(Item, id=item_id)
	if request.method == "POST":
		form = ItemForm(request.POST)
		if form.is_valid():
			item.listing = form.cleaned_data['listing']
			item.name = form.cleaned_data['name']
			item.category = form.cleaned_data['category']
			item.department = form.cleaned_data['department']
			item.description = form.cleaned_data['description']
			item.update_item = form.cleaned_data['update_item']
			item.save()

			return HttpResponseRedirect('/items/%s/' % item.id)
	else:
		item_data = {
			'listing' : item.listing,
			'name' : item.name,
			'category' : item.category.id,
			'department' : item.department,
			'description' : item.description,
			'update_item' : item.update_item

		}

		form = ItemForm(initial=item_data)

	context = Context({'title' : 'Editar Item', 'form' : form, 'info_button' : 'Actualizar Item'})
	return render_to_response('add-item.html', context, context_instance=RequestContext(request))

def ajax_items(request):
	if request.is_ajax():
		items = Item.objects.all()
		print items
		items = serialize('json', items)
		print items
		items = json.dumps(items)
		print items

		return HttpResponse(items, content_type='application/json')
	else:
		return HttpResponse({'error' : 'Hubo un error'}, content_type='application/json')

def about(request):
	context = Context({'title' : 'ABOUT', 'paragraph' : 'Parrafo de about'})
	return render_to_response('about.html', context)