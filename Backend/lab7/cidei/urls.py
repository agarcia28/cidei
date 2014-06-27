from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cidei.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'app.views.index', name='index'),
    url(r'^items/$', 'app.views.items', name='items'),
    url(r'^items/(?P<item_id>\d+)/$', 'app.views.item_details', name='item-details'),
    url(r'^items/add', 'app.views.add_item', name='add-items'),
    url(r'^categories/$', 'app.views.categories', name='categories'),
    url(r'^categories/(?P<slug>[\w-]+)/$', 'app.views.category_details', name='category-details'),
    #url(r'^category/add', 'app.views.add_category', name='add-categories'),
    url(r'^about/$', 'app.views.about', name='about'),
)
