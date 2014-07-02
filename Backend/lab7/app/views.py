from django.shortcuts import render_to_response, get_object_or_404, HttpResponseRedirect
from django.template import Context, RequestContext
from app.models import Item, Category
from app.forms import ItemForm

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
				update_item = form.cleaned_data['update_item']
			)

			#Siempre que cree el dato correctamente redireccionar
			return HttpResponseRedirect('/items/%s/' % item.id)
	else:
		form = ItemForm()

	context = Context({'title' : 'Adicionar item', 'form' : form})
	return render_to_response('form.html', context, context_instance=RequestContext(request))