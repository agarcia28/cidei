from django.shortcuts import render_to_response, get_object_or_404
from django.template import Context
from app.models import Item, Category

def index(request):
	context = Context({'title' : 'Hola CIDEI'})
	return render_to_response('index.html', context)

def categories(request):
	categories = Category.objects.all()
	context = Context({'title' : 'Categorias', 'categories' : categories})
	return render_to_response('categories.html', context)

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

def category_details(request, slug):
	category = get_object_or_404(Category, slug=slug)
	context = Context({
		'title' : 'Detalle de: %s' % category.name,
		'category' : category
	})
	return render_to_response('category-details.html', context)

def about(request):
	context = Context({'title' : 'ABOUT', 'paragraph' : 'Parrafo de about'})
	return render_to_response('about.html', context)