class Movie:
	def __init__(self, name, category, rating):        
		self.name = name
		self.category = category
		self.rating = rating
        
	def __str__(self):
		return self.name
		
	def __eq__(self, other):
		return self.name == other.name and self.category == other.category
		
	def __ne__(self, other):
		return self.name != other.name or self.category != other.category
		
	def __cmp__(self, other):
		return cmp(self.name, other.name) or cmp(self.category, other.category)
