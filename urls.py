from django.conf.urls.defaults import *
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'MovieRatings.views.home', name='home'),
    # url(r'^MovieRatings/', include('MovieRatings.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
	url(r'^admin/', include(admin.site.urls)),
	url(r'^$', 'movieratings.views.index'),
	url(r'^services/$', 'movieratings.views.service'),
	url(r'^(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_DIR}),
)
