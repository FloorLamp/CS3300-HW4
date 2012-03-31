from django.pimentech.network import *
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.db.models import Avg, Max, Count

from movieratings.models import Movie

service = JSONRPCService()

def index(request):
	return render_to_response('index.html')

def getMovies(request):
	try:		
		m = []
		for movie in Movie.objects.all():
			m.append([movie.name, movie.category, movie.rating])
		return m
	except Exception as e:
		return []
service.add_method('getMovies', getMovies)

def getTopRated(request):
	try:
		m = []
		for movie in Movie.objects.order_by('-rating', 'name')[:5]:
			m.append([movie.name, movie.category, movie.rating])
		return m
	except Exception as e:
		return []
service.add_method('getTopRated', getTopRated)

# returns {category: [toprated, avgrating, count]}
def getCategories(request):
	try:
		ret = {}
		# Get top rated movie in each category
		for x in Movie.objects.values('category').annotate(maxrating=Max('rating')).order_by('category'):
			m = Movie.objects.filter(category=x['category'], rating=x['maxrating'])[0]
			ret[m.category] = [m.name]
			
		# Get average rating for each category
		for c in Movie.objects.values('category').annotate(avg=Avg('rating')):
			ret[c['category']].append(c['avg'])
			
		# Get count of movies in each category
		for c in Movie.objects.values('category').annotate(count=Count('name')):
			ret[c['category']].append(c['count'])
			
		return ret
	except Exception as e:
		return []
service.add_method('getCategories', getCategories)

# movie = (name, category)
def addMovie(request, movie):
	# Don't allow duplicates
	if len(Movie.objects.filter(name=movie[0], category=movie[1])) > 0:
		return getMovies(request)
	m = Movie()
	m.name = movie[0]
	m.category = movie[1]
	m.rating = movie[2]
	m.save()
	return getMovies(request)
service.add_method('addMovie', addMovie)

# movie = (name, category)
def deleteMovie(request, movie):
	try:
		Movie.objects.get(name=movie[0], category=movie[1]).delete()
	except Movie.DoesNotExist:
		pass
	return getMovies(request)
service.add_method('deleteMovie', deleteMovie)
	
# oldmovie = (name, category), newmovie = (name, category, rating)
def editMovie(request, oldmovie, newmovie):
	try:
		m = Movie.objects.get(name=oldmovie[0], category=oldmovie[1])
		m.name = newmovie[0]
		m.category = newmovie[1]
		m.rating = newmovie[2]
		m.save()
	except Movie.DoesNotExist:
		pass
	return getMovies(request)
service.add_method('editMovie', editMovie)
