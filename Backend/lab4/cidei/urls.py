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
    url(r'^categories/$', 'app.views.categories', name='categories'),
    url(r'^items/(?P<item_id>\d+)/$', 'app.views.item_details', name='item-details'),
    url(r'^categories/(?P<category_id>\d+)/$', 'app.views.category_details', name='category-details'),
    url(r'^about/$', 'app.views.about', name='about'),
)
