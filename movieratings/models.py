from django.db import models

class Movie(models.Model):
	class Meta:
		unique_together = ("name", "category")
		
	RATINGS_CHOICES = []
	for i in range(11):
		RATINGS_CHOICES.append([i, i])
	
	name = models.CharField(max_length=100)
	category = models.CharField(max_length=100)
	rating = models.IntegerField(choices=RATINGS_CHOICES)
	
	def __unicode__(self):
		return self.name
