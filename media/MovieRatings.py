import pyjd
import pygwt

from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.ListBox import ListBox
from pyjamas.ui.KeyboardListener import KeyboardHandler, KEY_ENTER
from pyjamas.Timer import Timer
from pyjamas import Window

from pyjamas.JSONService import JSONProxy

from Movie import Movie

import re

class MovieRatings:
	def onModuleLoad(self):
        # Setup JSON RPC
		self.remote = DataService()

### Initialize member variables
		self.mainPanel = HorizontalPanel()
		self.rightPanel = VerticalPanel()
		self.moviesPanel = VerticalPanel()
		self.topRatedPanel = VerticalPanel()
		self.categoriesPanel = VerticalPanel()
        
		self.moviesFlexTable = FlexTable()
		self.topRatedMoviesFlexTable = FlexTable()
		self.topCategoryMoviesFlexTable = FlexTable()
        
		self.lessThanFiveLabel = Label('There are less than 5 movies. Add more movies!')
		self.moviesListLabel = Label('Movies List')
        
		self.addPanel = VerticalPanel()
		self.newMovieCategoryTextBox = TextBox()
		self.newMovieNameTextBox = TextBox()
		self.newMovieRatingListBox = ListBox(False)
		self.addMovieButton = Button('Add', self.addMovieButton_Click)
        
		self.movies = []
		self.topRatedMovies = []
		self.categories = {}
		
		self.MAX_RATING = 10
		
###	Add Movie Panel
		# Add ratings to list box
		for i in range(self.MAX_RATING + 1):
			self.newMovieRatingListBox.addItem(str(i))
		
		# Add label and textbox to horizontal panel
		self.labelPanel = HorizontalPanel()
		self.labelPanel.add(Label("Add a movie:"))
		self.categoryPanel = HorizontalPanel()
		self.categoryPanel.add(Label("Category: "))
		self.categoryPanel.add(self.newMovieCategoryTextBox)
		self.namePanel = HorizontalPanel()
		self.namePanel.add(Label("Movie Name: "))
		self.namePanel.add(self.newMovieNameTextBox)
		self.ratingPanel = HorizontalPanel()
		self.ratingPanel.add(Label("Movie Rating: "))
		self.ratingPanel.add(self.newMovieRatingListBox)

		self.labelPanel.addStyleName("addLabel")
		self.labelPanel.setSpacing(5)
		self.categoryPanel.addStyleName("addPanel")
		self.categoryPanel.setSpacing(5)
		self.namePanel.addStyleName("addPanel")
		self.namePanel.setSpacing(5)
		self.ratingPanel.addStyleName("addPanel")
		self.ratingPanel.setSpacing(5)
		self.newMovieCategoryTextBox.addStyleName("addPanel-input")
		self.newMovieNameTextBox.addStyleName("addPanel-input")
		self.newMovieRatingListBox.addStyleName("addPanel-input")
		
		self.addPanel.add(self.labelPanel)
		self.addPanel.add(self.categoryPanel)
		self.addPanel.add(self.namePanel)
		self.addPanel.add(self.ratingPanel)
		self.addPanel.add(self.addMovieButton)
		self.addPanel.addStyleName("addPanel")
		
		self.addMovieButton.addStyleName('addButton')
		self.addPanel.add(self.addMovieButton)
		self.addPanel.addStyleName('addPanel')
		
###	Movies table
		self.moviesFlexTable.setText(0, 1, "Category")
		self.moviesFlexTable.setText(0, 2, "Title")
		self.moviesFlexTable.setText(0, 3, "Rating")

		self.moviesFlexTable.addStyleName("movieList")
		self.moviesFlexTable.getRowFormatter().addStyleName(0, "listHeader")
		self.moviesFlexTable.setCellPadding(6)
		self.moviesFlexTable.getCellFormatter().setStyleName(0, 1, "listHeaderColumn")
		self.moviesFlexTable.getCellFormatter().setStyleName(0, 2, "listHeaderColumn")
		self.moviesListLabel.addStyleName("listLabel")

		self.moviesPanel.add(self.moviesListLabel)
		self.moviesPanel.add(self.moviesFlexTable)
		self.moviesPanel.setStyleName("moviesPanel")
		
###	Top rated movies table
		self.topRatedMoviesFlexTable.setText(0, 0, "Category")
		self.topRatedMoviesFlexTable.setText(0, 1, "Title")
		self.topRatedMoviesFlexTable.setText(0, 2, "Rating")

		self.topRatedMoviesFlexTable.addStyleName("topMoviesList")
		self.topRatedMoviesFlexTable.getRowFormatter().addStyleName(0, "listHeader")
		self.topRatedMoviesFlexTable.setCellPadding(6)
		self.topRatedMoviesFlexTable.getCellFormatter().setStyleName(0, 0, "listHeaderColumn")
		self.topRatedMoviesFlexTable.getCellFormatter().setStyleName(0, 1, "listHeaderColumn")

		self.topRatedLabel = Label("Top 5 Rated Movies")
		self.topRatedLabel.addStyleName("listLabel")
		self.lessThanFiveLabel.addStyleName("noticeLabel")

		self.topRatedPanel.add(self.topRatedLabel)
		self.topRatedPanel.add(self.topRatedMoviesFlexTable)
		self.topRatedPanel.add(self.lessThanFiveLabel)
		self.topRatedPanel.setStyleName("topRatedPanel")
		
###	Categories table
		self.topCategoryMoviesFlexTable.setText(0, 0, "Category")
		self.topCategoryMoviesFlexTable.setText(0, 1, "Top Movie")
		self.topCategoryMoviesFlexTable.setText(0, 2, "Average Rating")

		self.topCategoryMoviesFlexTable.addStyleName("topCategoryMoviesList")
		self.topCategoryMoviesFlexTable.getRowFormatter().addStyleName(0, "listHeader")
		self.topCategoryMoviesFlexTable.setCellPadding(6)
		self.topCategoryMoviesFlexTable.getCellFormatter().setStyleName(0, 0, "listHeaderColumn")
		self.topCategoryMoviesFlexTable.getCellFormatter().setStyleName(0, 1, "listHeaderColumn")

		self.categoriesLabel = Label("Movie Categories")
		self.categoriesLabel.addStyleName("listLabel")

		self.categoriesPanel.add(self.categoriesLabel)
		self.categoriesPanel.add(self.topCategoryMoviesFlexTable)
		self.categoriesPanel.setStyleName("categoriesPanel")
		
###	Assemble Main panel
		self.rightPanel.add(self.topRatedPanel)
		self.rightPanel.add(self.categoriesPanel)
		self.mainPanel.add(self.moviesPanel)
		self.mainPanel.add(self.rightPanel)

		self.mainPanel.setStyleName("mainPanel")
		self.mainPanel.setSpacing(25)
		
        # Associate panels with the HTML host page
		RootPanel('addPanel').add(self.addPanel)
		RootPanel('main').add(self.mainPanel)

        # Move cursor focus to the input box
		self.newMovieNameTextBox.setFocus(True)

        # Load the movies
		self.remote.getMovies(self)
	
	def verifyInputs(self, name, category):
		if len(name) == 0:
			Window.alert("Movie name cannot be empty.")
			return False
		if len(name) > 100:
			Window.alert("Movie name is too long. Maximum length is 100 characters.")
			return False
		if len(category) == 0:
			Window.alert("Category cannot be empty.")
			return False
		p = re.compile('^[0-9A-Za-z\\.\\-\\(\\) ]{1,100}$')
		if p.match(category) == None:
			Window.alert('"%s" is not a valid category.' % category)
			return False
		return True
	
	def addMovieButton_Click(self, event):		
		name = self.newMovieNameTextBox.getText().trim()
		cat = self.newMovieCategoryTextBox.getText().trim().lower()
		category = cat[0].upper() + cat[1:]
		rating = self.newMovieRatingListBox.getSelectedIndex()
		
		if not self.verifyInputs(name, category):
			return
			
		movie = Movie(name, category, rating)
			
		if movie in self.movies:
			Window.alert("'" + name + "' is already in table.")
			self.newMovieNameTextBox.selectAll()
			return
			
		self.remote.addMovie((name, category, rating), self)
		self.newMovieNameTextBox.setText('')
		
	def addMovie(self, sender, movie):						
		self.movies.append(movie)
		row = self.moviesFlexTable.getRowCount()
		
		self.moviesFlexTable.setText(row, 1, movie.category)
		self.moviesFlexTable.setText(row, 2, movie.name)
		self.moviesFlexTable.setText(row, 3, movie.rating)
					
		# Adds buttons for remove, edit, save and cancel
		removeMovieButton = Button("x")
		editMovieButton = Button("Edit")
		saveButton = Button("Save")
		cancelButton = Button("Cancel")	
			
		# Save and cancel are hidden by default
		saveButton.setVisible(False)
		cancelButton.setVisible(False)
		
		# Add buttons to row
		buttons = HorizontalPanel()
		buttons.add(removeMovieButton)
		buttons.add(editMovieButton)
		buttons.add(cancelButton)
		buttons.add(saveButton)
		self.moviesFlexTable.setWidget(row, 0, buttons)
		
		def removeMovieButton_Click(sender):
			self.remote.deleteMovie((movie.name, movie.category), self)
		removeMovieButton.addClickListener(removeMovieButton_Click)
		
		def editMovieButton_Click(sender):   		
    	    # Add textboxes and listbox
			editMovieButton.setVisible(False)
			cancelButton.setVisible(True)
			saveButton.setVisible(True)
			editCategory = TextBox()
			editName = TextBox()
			editRating = ListBox(False)
			for i in range(self.MAX_RATING + 1):
				editRating.addItem(str(i))
    		
    		# Variable width textboxes
			catlen = len(movie.category)
			namelen = len(movie.name)    		
			if (catlen > 8):
				editCategory.setWidth(str(catlen*10) + "px")
			else:
				editCategory.setWidth("80px")
			if (namelen > 8):
				editName.setWidth(str(namelen*10) + "px")
			else:
				editName.setWidth("80px")
    		
			self.moviesFlexTable.setWidget(row, 1, editCategory)
			self.moviesFlexTable.setWidget(row, 2, editName)
			self.moviesFlexTable.setWidget(row, 3, editRating)
			editCategory.setText(movie.category)
			editName.setText(movie.name)
			editRating.setSelectedIndex(movie.rating)			
		editMovieButton.addClickListener(editMovieButton_Click)
		
		def saveButton_Click(sender):
			catText = self.moviesFlexTable.getWidget(row, 1)
			nameText = self.moviesFlexTable.getWidget(row, 2)
			ratingList = self.moviesFlexTable.getWidget(row, 3)
			
			newCategory = catText.getText().trim().lower()
			newCategory = newCategory[0].upper() + newCategory[1:]
			newName = nameText.getText().trim()
			newRating = ratingList.getSelectedIndex()

			if not self.verifyInputs(newName, newCategory):
				return
			
			# Removes temporarily to check for duplicates
			self.movies.remove(movie)
			
			newMovie = Movie(newName, newCategory, newRating)			
			if newMovie in self.movies:
				Window.alert("'" + newName + "' is already in table.")
				nameText.selectAll()
				return
    		
			self.remote.editMovie((movie.name, movie.category), (newMovie.name, newMovie.category, newMovie.rating), self)
		saveButton.addClickListener(saveButton_Click)
		
		def cancelButton_Click(sender):			
			self.moviesFlexTable.remove(self.moviesFlexTable.getWidget(row, 1))
			self.moviesFlexTable.remove(self.moviesFlexTable.getWidget(row, 2))
			self.moviesFlexTable.remove(self.moviesFlexTable.getWidget(row, 3))

			# Reverts fields to old movie info
			self.moviesFlexTable.setText(row, 1, movie.category)
			self.moviesFlexTable.setText(row, 2, movie.name)
			self.moviesFlexTable.setText(row, 3, movie.rating)

			cancelButton.setVisible(False)
			saveButton.setVisible(False)
			editMovieButton.setVisible(True)
		cancelButton.addClickListener(cancelButton_Click)
		
	def updateTopRatedMovies(self):
		numTopRated = len(self.topRatedMovies)
				
		self.clearTable(self.topRatedMoviesFlexTable)
			
		for row in range(numTopRated):
			self.topRatedMoviesFlexTable.setText(row+1, 0, self.topRatedMovies[row].category)
			self.topRatedMoviesFlexTable.setText(row+1, 1, self.topRatedMovies[row].name)
			self.topRatedMoviesFlexTable.setText(row+1, 2, self.topRatedMovies[row].rating)
			
		# Label should only be visible if less than 5 movies
		self.lessThanFiveLabel.setVisible(numTopRated < 5)
		
	def updateCategories(self):
		self.clearTable(self.topCategoryMoviesFlexTable)
		
		for row, cat in enumerate(self.categories):
			self.topCategoryMoviesFlexTable.setText(row+1, 0, cat + " (" + str(self.categories[cat][2]) + ")")
			self.topCategoryMoviesFlexTable.setText(row+1, 1, self.categories[cat][0])
			self.topCategoryMoviesFlexTable.setText(row+1, 2, "%.1f" % float(self.categories[cat][1]))
			
	def clearTable(self, table):
		try:
			for i in range(table.getRowCount()):
				table.removeRow(1)
		except:
			pass

	# Called when a response is received from a RPC.
	def onRemoteResponse(self, response, request_info):
		if request_info.method in ['getMovies', 'addMovie', 'deleteMovie', 'editMovie']:
		    # Clear current and add all
			self.movies = []
			self.clearTable(self.moviesFlexTable)
			for m in response:
				movie = Movie(m[0], m[1], m[2])
				self.addMovie(None, movie)
			self.moviesListLabel.setText("Movies List (" + str(len(self.movies)) + ")")
			self.remote.getTopRated(self)
			self.remote.getCategories(self)
			
		if request_info.method == 'getTopRated':
		    # Update top rated
			self.topRatedMovies = []
			for m in response:
				movie = Movie(m[0], m[1], m[2])
				self.topRatedMovies.append(movie)
			self.updateTopRatedMovies()
			
		if request_info.method == 'getCategories':
		    # Update categories
			self.categories = response
			self.updateCategories()

class DataService(JSONProxy):
	methods = ['getMovies', 'getTopRated', 'getCategories', 'addMovie', 'deleteMovie', 'editMovie']

	def __init__(self):
		JSONProxy.__init__(self, 'services/', DataService.methods)

if __name__ == '__main__':
	pyjd.setup('public/index.html')
	app = MovieRatings()
	app.onModuleLoad()
	pyjd.run()
