/* start module: MovieRatings */
var MovieRatings;
$pyjs.loaded_modules['MovieRatings'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MovieRatings'].__was_initialized__) return $pyjs.loaded_modules['MovieRatings'];
	MovieRatings = $pyjs.loaded_modules["MovieRatings"];
	MovieRatings.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MovieRatings';
	var __name__ = MovieRatings.__name__ = __mod_name__;


	MovieRatings['pyjd'] = pyjslib['___import___']('pyjd', null);
	MovieRatings['pygwt'] = pyjslib['___import___']('pygwt', null);
	MovieRatings['RootPanel'] = pyjslib['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	MovieRatings['HorizontalPanel'] = pyjslib['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	MovieRatings['VerticalPanel'] = pyjslib['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	MovieRatings['Label'] = pyjslib['___import___']('pyjamas.ui.Label.Label', null, null, false);
	MovieRatings['Button'] = pyjslib['___import___']('pyjamas.ui.Button.Button', null, null, false);
	MovieRatings['FlexTable'] = pyjslib['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	MovieRatings['TextBox'] = pyjslib['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	MovieRatings['ListBox'] = pyjslib['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	MovieRatings['KeyboardHandler'] = pyjslib['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	MovieRatings['KEY_ENTER'] = pyjslib['___import___']('pyjamas.ui.KeyboardListener.KEY_ENTER', null, null, false);
	MovieRatings['Timer'] = pyjslib['___import___']('pyjamas.Timer.Timer', null, null, false);
	MovieRatings['Window'] = pyjslib['___import___']('pyjamas.Window', null, null, false);
	MovieRatings['JSONProxy'] = pyjslib['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	MovieRatings['Movie'] = pyjslib['___import___']('Movie.Movie', null, null, false);
	MovieRatings['re'] = pyjslib['___import___']('re', null);
	MovieRatings['MovieRatings'] = (function(){
		var $cls_instance = $pyjs__class_instance('MovieRatings');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '886a8bd5d0cc165970fa86d3c2ae8bf7';
		$method = $pyjs__bind_method($cls_instance, 'onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr41,$iter1_iter,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$attr39,$attr48,$attr38,$attr45,$iter1_array,$attr9,$attr8,$iter1_nextval,$attr42,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr33,$attr32,$attr31,$attr30,$attr19,$attr18,$attr35,$attr34,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$attr46,$attr43,$iter1_type,$attr47,i,$attr44,$add2,$add1,$iter1_idx,$attr37,$attr36;
			self.remote = MovieRatings.DataService();
			self.mainPanel = MovieRatings['HorizontalPanel']();
			self.rightPanel = MovieRatings['VerticalPanel']();
			self.moviesPanel = MovieRatings['VerticalPanel']();
			self.topRatedPanel = MovieRatings['VerticalPanel']();
			self.categoriesPanel = MovieRatings['VerticalPanel']();
			self.moviesFlexTable = MovieRatings['FlexTable']();
			self.topRatedMoviesFlexTable = MovieRatings['FlexTable']();
			self.topCategoryMoviesFlexTable = MovieRatings['FlexTable']();
			self.lessThanFiveLabel = MovieRatings['Label'](String('There are less than 5 movies. Add more movies!'));
			self.moviesListLabel = MovieRatings['Label'](String('Movies List'));
			self.addPanel = MovieRatings['VerticalPanel']();
			self.newMovieCategoryTextBox = MovieRatings['TextBox']();
			self.newMovieNameTextBox = MovieRatings['TextBox']();
			self.newMovieRatingListBox = MovieRatings['ListBox'](false);
			self.addMovieButton = MovieRatings['Button'](String('Add'), ((($attr1=self['addMovieButton_Click']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'addMovieButton_Click'):
						self['addMovieButton_Click']));
			self.movies = pyjslib['list']([]);
			self.topRatedMovies = pyjslib['list']([]);
			self.categories = pyjslib['dict']([]);
			self.MAX_RATING = 10;
			$iter1_iter = pyjslib['range']((typeof ($add1=((($attr3=self['MAX_RATING']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'MAX_RATING'):
						self['MAX_RATING']))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['newMovieRatingListBox']['addItem'](pyjslib['str'](i));
			}
			self.labelPanel = MovieRatings['HorizontalPanel']();
			self['labelPanel']['add'](MovieRatings['Label'](String('Add a movie:')));
			self.categoryPanel = MovieRatings['HorizontalPanel']();
			self['categoryPanel']['add'](MovieRatings['Label'](String('Category: ')));
			self['categoryPanel']['add'](((($attr5=self['newMovieCategoryTextBox']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'newMovieCategoryTextBox'):
						self['newMovieCategoryTextBox']));
			self.namePanel = MovieRatings['HorizontalPanel']();
			self['namePanel']['add'](MovieRatings['Label'](String('Movie Name: ')));
			self['namePanel']['add'](((($attr7=self['newMovieNameTextBox']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'newMovieNameTextBox'):
						self['newMovieNameTextBox']));
			self.ratingPanel = MovieRatings['HorizontalPanel']();
			self['ratingPanel']['add'](MovieRatings['Label'](String('Movie Rating: ')));
			self['ratingPanel']['add'](((($attr9=self['newMovieRatingListBox']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'newMovieRatingListBox'):
						self['newMovieRatingListBox']));
			self['labelPanel']['addStyleName'](String('addLabel'));
			self['labelPanel']['setSpacing'](5);
			self['categoryPanel']['addStyleName'](String('addPanel'));
			self['categoryPanel']['setSpacing'](5);
			self['namePanel']['addStyleName'](String('addPanel'));
			self['namePanel']['setSpacing'](5);
			self['ratingPanel']['addStyleName'](String('addPanel'));
			self['ratingPanel']['setSpacing'](5);
			self['newMovieCategoryTextBox']['addStyleName'](String('addPanel-input'));
			self['newMovieNameTextBox']['addStyleName'](String('addPanel-input'));
			self['newMovieRatingListBox']['addStyleName'](String('addPanel-input'));
			self['addPanel']['add'](((($attr11=self['labelPanel']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'labelPanel'):
						self['labelPanel']));
			self['addPanel']['add'](((($attr13=self['categoryPanel']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'categoryPanel'):
						self['categoryPanel']));
			self['addPanel']['add'](((($attr15=self['namePanel']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'namePanel'):
						self['namePanel']));
			self['addPanel']['add'](((($attr17=self['ratingPanel']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'ratingPanel'):
						self['ratingPanel']));
			self['addPanel']['add'](((($attr19=self['addMovieButton']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'addMovieButton'):
						self['addMovieButton']));
			self['addPanel']['addStyleName'](String('addPanel'));
			self['addMovieButton']['addStyleName'](String('addButton'));
			self['addPanel']['add'](((($attr21=self['addMovieButton']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'addMovieButton'):
						self['addMovieButton']));
			self['addPanel']['addStyleName'](String('addPanel'));
			self['moviesFlexTable']['setText'](0, 1, String('Category'));
			self['moviesFlexTable']['setText'](0, 2, String('Title'));
			self['moviesFlexTable']['setText'](0, 3, String('Rating'));
			self['moviesFlexTable']['addStyleName'](String('movieList'));
			self['moviesFlexTable']['getRowFormatter']()['addStyleName'](0, String('listHeader'));
			self['moviesFlexTable']['setCellPadding'](6);
			self['moviesFlexTable']['getCellFormatter']()['setStyleName'](0, 1, String('listHeaderColumn'));
			self['moviesFlexTable']['getCellFormatter']()['setStyleName'](0, 2, String('listHeaderColumn'));
			self['moviesListLabel']['addStyleName'](String('listLabel'));
			self['moviesPanel']['add'](((($attr23=self['moviesListLabel']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'moviesListLabel'):
						self['moviesListLabel']));
			self['moviesPanel']['add'](((($attr25=self['moviesFlexTable']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'moviesFlexTable'):
						self['moviesFlexTable']));
			self['moviesPanel']['setStyleName'](String('moviesPanel'));
			self['topRatedMoviesFlexTable']['setText'](0, 0, String('Category'));
			self['topRatedMoviesFlexTable']['setText'](0, 1, String('Title'));
			self['topRatedMoviesFlexTable']['setText'](0, 2, String('Rating'));
			self['topRatedMoviesFlexTable']['addStyleName'](String('topMoviesList'));
			self['topRatedMoviesFlexTable']['getRowFormatter']()['addStyleName'](0, String('listHeader'));
			self['topRatedMoviesFlexTable']['setCellPadding'](6);
			self['topRatedMoviesFlexTable']['getCellFormatter']()['setStyleName'](0, 0, String('listHeaderColumn'));
			self['topRatedMoviesFlexTable']['getCellFormatter']()['setStyleName'](0, 1, String('listHeaderColumn'));
			self.topRatedLabel = MovieRatings['Label'](String('Top 5 Rated Movies'));
			self['topRatedLabel']['addStyleName'](String('listLabel'));
			self['lessThanFiveLabel']['addStyleName'](String('noticeLabel'));
			self['topRatedPanel']['add'](((($attr27=self['topRatedLabel']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'topRatedLabel'):
						self['topRatedLabel']));
			self['topRatedPanel']['add'](((($attr29=self['topRatedMoviesFlexTable']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'topRatedMoviesFlexTable'):
						self['topRatedMoviesFlexTable']));
			self['topRatedPanel']['add'](((($attr31=self['lessThanFiveLabel']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, 'lessThanFiveLabel'):
						self['lessThanFiveLabel']));
			self['topRatedPanel']['setStyleName'](String('topRatedPanel'));
			self['topCategoryMoviesFlexTable']['setText'](0, 0, String('Category'));
			self['topCategoryMoviesFlexTable']['setText'](0, 1, String('Top Movie'));
			self['topCategoryMoviesFlexTable']['setText'](0, 2, String('Average Rating'));
			self['topCategoryMoviesFlexTable']['addStyleName'](String('topCategoryMoviesList'));
			self['topCategoryMoviesFlexTable']['getRowFormatter']()['addStyleName'](0, String('listHeader'));
			self['topCategoryMoviesFlexTable']['setCellPadding'](6);
			self['topCategoryMoviesFlexTable']['getCellFormatter']()['setStyleName'](0, 0, String('listHeaderColumn'));
			self['topCategoryMoviesFlexTable']['getCellFormatter']()['setStyleName'](0, 1, String('listHeaderColumn'));
			self.categoriesLabel = MovieRatings['Label'](String('Movie Categories'));
			self['categoriesLabel']['addStyleName'](String('listLabel'));
			self['categoriesPanel']['add'](((($attr33=self['categoriesLabel']) !== null & ($attr34=self).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'categoriesLabel'):
						self['categoriesLabel']));
			self['categoriesPanel']['add'](((($attr35=self['topCategoryMoviesFlexTable']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'topCategoryMoviesFlexTable'):
						self['topCategoryMoviesFlexTable']));
			self['categoriesPanel']['setStyleName'](String('categoriesPanel'));
			self['rightPanel']['add'](((($attr37=self['topRatedPanel']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'topRatedPanel'):
						self['topRatedPanel']));
			self['rightPanel']['add'](((($attr39=self['categoriesPanel']) !== null & ($attr40=self).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'categoriesPanel'):
						self['categoriesPanel']));
			self['mainPanel']['add'](((($attr41=self['moviesPanel']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'moviesPanel'):
						self['moviesPanel']));
			self['mainPanel']['add'](((($attr43=self['rightPanel']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, 'rightPanel'):
						self['rightPanel']));
			self['mainPanel']['setStyleName'](String('mainPanel'));
			self['mainPanel']['setSpacing'](25);
			MovieRatings['RootPanel'](String('addPanel'))['add'](((($attr45=self['addPanel']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'addPanel'):
						self['addPanel']));
			MovieRatings['RootPanel'](String('main'))['add'](((($attr47=self['mainPanel']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'mainPanel'):
						self['mainPanel']));
			self['newMovieNameTextBox']['setFocus'](true);
			self['remote']['getMovies'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'verifyInputs', function(name, category) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				category = arguments[2];
			}
			var p;
			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['len'](name), 0))) {
				MovieRatings['Window']['alert'](String('Movie name cannot be empty.'));
				return false;
			}
			if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](name), 100) == 1))) {
				MovieRatings['Window']['alert'](String('Movie name is too long. Maximum length is 100 characters.'));
				return false;
			}
			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['len'](category), 0))) {
				MovieRatings['Window']['alert'](String('Category cannot be empty.'));
				return false;
			}
			p = MovieRatings['re']['compile'](String('^[0-9A-Za-z\x5C.\x5C-\x5C(\x5C) ]{1,100}$'));
			if (pyjslib['bool'](pyjslib['op_eq'](p['match'](category), null))) {
				MovieRatings['Window']['alert'](pyjslib['sprintf'](String('\x22%s\x22 is not a valid category.'), category));
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['name'],['category']]);
		$cls_definition['verifyInputs'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addMovieButton_Click', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var category,rating,name,movie,$add5,cat,$add3,$add6,$add7,$add4,$attr50,$add8,$attr49;
			name = self['newMovieNameTextBox']['getText']()['trim']();
			cat = self['newMovieCategoryTextBox']['getText']()['trim']()['lower']();
			category = (typeof ($add3=cat.__getitem__(0)['upper']())==typeof ($add4=pyjslib['slice'](cat, 1, null)) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4));
			rating = self['newMovieRatingListBox']['getSelectedIndex']();
			if (pyjslib['bool'](!pyjslib['bool'](self['verifyInputs'](name, category)))) {
				return null;
			}
			movie = MovieRatings['Movie'](name, category, rating);
			if (pyjslib['bool'](((($attr49=self['movies']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'movies'):
						self['movies']).__contains__(movie))) {
				MovieRatings['Window']['alert']((typeof ($add7=(typeof ($add5=String('\x27'))==typeof ($add6=name) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					pyjslib['op_add']($add5,$add6)))==typeof ($add8=String('\x27 is already in table.')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					pyjslib['op_add']($add7,$add8)));
				self['newMovieNameTextBox']['selectAll']();
				return null;
			}
			self['remote']['addMovie'](pyjslib['tuple']([name, category, rating]), self);
			self['newMovieNameTextBox']['setText'](String(''));
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['addMovieButton_Click'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addMovie', function(sender, movie) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				movie = arguments[2];
			}
			var editMovieButton,saveButton_Click,$attr51,$attr52,$attr55,$attr54,cancelButton,$attr56,buttons,cancelButton_Click,removeMovieButton_Click,removeMovieButton,saveButton,editMovieButton_Click,$attr53,row;
			self['movies']['append'](movie);
			row = self['moviesFlexTable']['getRowCount']();
			self['moviesFlexTable']['setText'](row, 1, ((($attr51=movie['category']) !== null & ($attr52=movie).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'category'):
						movie['category']));
			self['moviesFlexTable']['setText'](row, 2, ((($attr53=movie['$$name']) !== null & ($attr54=movie).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, '$$name'):
						movie['$$name']));
			self['moviesFlexTable']['setText'](row, 3, ((($attr55=movie['rating']) !== null & ($attr56=movie).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, 'rating'):
						movie['rating']));
			removeMovieButton = MovieRatings['Button'](String('x'));
			editMovieButton = MovieRatings['Button'](String('Edit'));
			saveButton = MovieRatings['Button'](String('Save'));
			cancelButton = MovieRatings['Button'](String('Cancel'));
			saveButton['setVisible'](false);
			cancelButton['setVisible'](false);
			buttons = MovieRatings['HorizontalPanel']();
			buttons['add'](removeMovieButton);
			buttons['add'](editMovieButton);
			buttons['add'](cancelButton);
			buttons['add'](saveButton);
			self['moviesFlexTable']['setWidget'](row, 0, buttons);
			removeMovieButton_Click = function(sender) {
				var $attr59,$attr58,$attr60,$attr57;
				self['remote']['deleteMovie'](pyjslib['tuple']([((($attr57=movie['$$name']) !== null & ($attr58=movie).__is_instance__) && typeof $attr57 == 'function'?
							pyjslib['getattr']($attr58, '$$name'):
							movie['$$name']), ((($attr59=movie['category']) !== null & ($attr60=movie).__is_instance__) && typeof $attr59 == 'function'?
							pyjslib['getattr']($attr60, 'category'):
							movie['category'])]), self);
				return null;
			};
			removeMovieButton_Click.__name__ = 'removeMovieButton_Click';

			removeMovieButton_Click.__bind_type__ = 0;
			removeMovieButton_Click.__args__ = [null,null,['sender']];
			removeMovieButton['addClickListener'](removeMovieButton_Click);
			editMovieButton_Click = function(sender) {
				var editRating,editName,$attr68,$attr69,$iter2_iter,$attr64,$attr65,$attr66,$attr67,$attr61,$attr62,$attr63,$iter2_type,$add14,$iter2_idx,$add10,$add11,$add12,$add13,editCategory,$mul4,$mul3,$mul2,$mul1,$iter2_nextval,i,$attr72,$attr71,$attr70,namelen,$add9,$iter2_array,catlen;
				editMovieButton['setVisible'](false);
				cancelButton['setVisible'](true);
				saveButton['setVisible'](true);
				editCategory = MovieRatings['TextBox']();
				editName = MovieRatings['TextBox']();
				editRating = MovieRatings['ListBox'](false);
				$iter2_iter = pyjslib['range']((typeof ($add9=((($attr61=self['MAX_RATING']) !== null & ($attr62=self).__is_instance__) && typeof $attr61 == 'function'?
							pyjslib['getattr']($attr62, 'MAX_RATING'):
							self['MAX_RATING']))==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					pyjslib['op_add']($add9,$add10)));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					editRating['addItem'](pyjslib['str'](i));
				}
				catlen = pyjslib['len'](((($attr63=movie['category']) !== null & ($attr64=movie).__is_instance__) && typeof $attr63 == 'function'?
							pyjslib['getattr']($attr64, 'category'):
							movie['category']));
				namelen = pyjslib['len'](((($attr65=movie['$$name']) !== null & ($attr66=movie).__is_instance__) && typeof $attr65 == 'function'?
							pyjslib['getattr']($attr66, '$$name'):
							movie['$$name']));
				if (pyjslib['bool']((pyjslib['cmp'](catlen, 8) == 1))) {
					editCategory['setWidth']((typeof ($add11=pyjslib['str']((typeof ($mul1=catlen)==typeof ($mul2=10) && typeof $mul1=='number'?
						$mul1*$mul2:
						pyjslib['op_mul']($mul1,$mul2))))==typeof ($add12=String('px')) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						pyjslib['op_add']($add11,$add12)));
				}
				else {
					editCategory['setWidth'](String('80px'));
				}
				if (pyjslib['bool']((pyjslib['cmp'](namelen, 8) == 1))) {
					editName['setWidth']((typeof ($add13=pyjslib['str']((typeof ($mul3=namelen)==typeof ($mul4=10) && typeof $mul3=='number'?
						$mul3*$mul4:
						pyjslib['op_mul']($mul3,$mul4))))==typeof ($add14=String('px')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						pyjslib['op_add']($add13,$add14)));
				}
				else {
					editName['setWidth'](String('80px'));
				}
				self['moviesFlexTable']['setWidget'](row, 1, editCategory);
				self['moviesFlexTable']['setWidget'](row, 2, editName);
				self['moviesFlexTable']['setWidget'](row, 3, editRating);
				editCategory['setText'](((($attr67=movie['category']) !== null & ($attr68=movie).__is_instance__) && typeof $attr67 == 'function'?
							pyjslib['getattr']($attr68, 'category'):
							movie['category']));
				editName['setText'](((($attr69=movie['$$name']) !== null & ($attr70=movie).__is_instance__) && typeof $attr69 == 'function'?
							pyjslib['getattr']($attr70, '$$name'):
							movie['$$name']));
				editRating['setSelectedIndex'](((($attr71=movie['rating']) !== null & ($attr72=movie).__is_instance__) && typeof $attr71 == 'function'?
							pyjslib['getattr']($attr72, 'rating'):
							movie['rating']));
				return null;
			};
			editMovieButton_Click.__name__ = 'editMovieButton_Click';

			editMovieButton_Click.__bind_type__ = 0;
			editMovieButton_Click.__args__ = [null,null,['sender']];
			editMovieButton['addClickListener'](editMovieButton_Click);
			saveButton_Click = function(sender) {
				var newRating,nameText,$attr82,$attr83,$attr80,$attr81,$attr84,newName,newCategory,$attr79,ratingList,$add15,$add16,$add17,$add18,$add19,newMovie,catText,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,$add20;
				catText = self['moviesFlexTable']['getWidget'](row, 1);
				nameText = self['moviesFlexTable']['getWidget'](row, 2);
				ratingList = self['moviesFlexTable']['getWidget'](row, 3);
				newCategory = catText['getText']()['trim']()['lower']();
				newCategory = (typeof ($add15=newCategory.__getitem__(0)['upper']())==typeof ($add16=pyjslib['slice'](newCategory, 1, null)) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					pyjslib['op_add']($add15,$add16));
				newName = nameText['getText']()['trim']();
				newRating = ratingList['getSelectedIndex']();
				if (pyjslib['bool'](!pyjslib['bool'](self['verifyInputs'](newName, newCategory)))) {
					return null;
				}
				self['movies']['remove'](movie);
				newMovie = MovieRatings['Movie'](newName, newCategory, newRating);
				if (pyjslib['bool'](((($attr73=self['movies']) !== null & ($attr74=self).__is_instance__) && typeof $attr73 == 'function'?
							pyjslib['getattr']($attr74, 'movies'):
							self['movies']).__contains__(newMovie))) {
					MovieRatings['Window']['alert']((typeof ($add19=(typeof ($add17=String('\x27'))==typeof ($add18=newName) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						pyjslib['op_add']($add17,$add18)))==typeof ($add20=String('\x27 is already in table.')) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						pyjslib['op_add']($add19,$add20)));
					nameText['selectAll']();
					return null;
				}
				self['remote']['editMovie'](pyjslib['tuple']([((($attr75=movie['$$name']) !== null & ($attr76=movie).__is_instance__) && typeof $attr75 == 'function'?
							pyjslib['getattr']($attr76, '$$name'):
							movie['$$name']), ((($attr77=movie['category']) !== null & ($attr78=movie).__is_instance__) && typeof $attr77 == 'function'?
							pyjslib['getattr']($attr78, 'category'):
							movie['category'])]), pyjslib['tuple']([((($attr79=newMovie['$$name']) !== null & ($attr80=newMovie).__is_instance__) && typeof $attr79 == 'function'?
							pyjslib['getattr']($attr80, '$$name'):
							newMovie['$$name']), ((($attr81=newMovie['category']) !== null & ($attr82=newMovie).__is_instance__) && typeof $attr81 == 'function'?
							pyjslib['getattr']($attr82, 'category'):
							newMovie['category']), ((($attr83=newMovie['rating']) !== null & ($attr84=newMovie).__is_instance__) && typeof $attr83 == 'function'?
							pyjslib['getattr']($attr84, 'rating'):
							newMovie['rating'])]), self);
				return null;
			};
			saveButton_Click.__name__ = 'saveButton_Click';

			saveButton_Click.__bind_type__ = 0;
			saveButton_Click.__args__ = [null,null,['sender']];
			saveButton['addClickListener'](saveButton_Click);
			cancelButton_Click = function(sender) {
				var $attr86,$attr87,$attr85,$attr88,$attr89,$attr90;
				self['moviesFlexTable']['remove'](self['moviesFlexTable']['getWidget'](row, 1));
				self['moviesFlexTable']['remove'](self['moviesFlexTable']['getWidget'](row, 2));
				self['moviesFlexTable']['remove'](self['moviesFlexTable']['getWidget'](row, 3));
				self['moviesFlexTable']['setText'](row, 1, ((($attr85=movie['category']) !== null & ($attr86=movie).__is_instance__) && typeof $attr85 == 'function'?
							pyjslib['getattr']($attr86, 'category'):
							movie['category']));
				self['moviesFlexTable']['setText'](row, 2, ((($attr87=movie['$$name']) !== null & ($attr88=movie).__is_instance__) && typeof $attr87 == 'function'?
							pyjslib['getattr']($attr88, '$$name'):
							movie['$$name']));
				self['moviesFlexTable']['setText'](row, 3, ((($attr89=movie['rating']) !== null & ($attr90=movie).__is_instance__) && typeof $attr89 == 'function'?
							pyjslib['getattr']($attr90, 'rating'):
							movie['rating']));
				cancelButton['setVisible'](false);
				saveButton['setVisible'](false);
				editMovieButton['setVisible'](true);
				return null;
			};
			cancelButton_Click.__name__ = 'cancelButton_Click';

			cancelButton_Click.__bind_type__ = 0;
			cancelButton_Click.__args__ = [null,null,['sender']];
			cancelButton['addClickListener'](cancelButton_Click);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['movie']]);
		$cls_definition['addMovie'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'updateTopRatedMovies', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_type,row,$iter3_idx,$add21,$add22,$add25,$add24,$add26,$attr106,$attr104,$attr105,$attr102,$iter3_iter,$attr100,$attr101,$attr103,$iter3_array,$iter3_nextval,$attr95,$attr94,$attr97,$attr96,$attr91,$attr93,$attr92,$attr99,$attr98,$add23,numTopRated;
			numTopRated = pyjslib['len'](((($attr91=self['topRatedMovies']) !== null & ($attr92=self).__is_instance__) && typeof $attr91 == 'function'?
						pyjslib['getattr']($attr92, 'topRatedMovies'):
						self['topRatedMovies']));
			self['clearTable'](((($attr93=self['topRatedMoviesFlexTable']) !== null & ($attr94=self).__is_instance__) && typeof $attr93 == 'function'?
						pyjslib['getattr']($attr94, 'topRatedMoviesFlexTable'):
						self['topRatedMoviesFlexTable']));
			$iter3_iter = pyjslib['range'](numTopRated);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				row = $iter3_nextval;
				self['topRatedMoviesFlexTable']['setText']((typeof ($add21=row)==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					pyjslib['op_add']($add21,$add22)), 0, ((($attr97=((($attr95=self['topRatedMovies']) !== null & ($attr96=self).__is_instance__) && typeof $attr95 == 'function'?
							pyjslib['getattr']($attr96, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)['category']) !== null & ($attr98=((($attr95=self['topRatedMovies']) !== null & ($attr96=self).__is_instance__) && typeof $attr95 == 'function'?
							pyjslib['getattr']($attr96, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)).__is_instance__) && typeof $attr97 == 'function'?
							pyjslib['getattr']($attr98, 'category'):
							((($attr95=self['topRatedMovies']) !== null & ($attr96=self).__is_instance__) && typeof $attr95 == 'function'?
							pyjslib['getattr']($attr96, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)['category']));
				self['topRatedMoviesFlexTable']['setText']((typeof ($add23=row)==typeof ($add24=1) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					pyjslib['op_add']($add23,$add24)), 1, ((($attr101=((($attr99=self['topRatedMovies']) !== null & ($attr100=self).__is_instance__) && typeof $attr99 == 'function'?
							pyjslib['getattr']($attr100, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)['$$name']) !== null & ($attr102=((($attr99=self['topRatedMovies']) !== null & ($attr100=self).__is_instance__) && typeof $attr99 == 'function'?
							pyjslib['getattr']($attr100, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)).__is_instance__) && typeof $attr101 == 'function'?
							pyjslib['getattr']($attr102, '$$name'):
							((($attr99=self['topRatedMovies']) !== null & ($attr100=self).__is_instance__) && typeof $attr99 == 'function'?
							pyjslib['getattr']($attr100, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)['$$name']));
				self['topRatedMoviesFlexTable']['setText']((typeof ($add25=row)==typeof ($add26=1) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					pyjslib['op_add']($add25,$add26)), 2, ((($attr105=((($attr103=self['topRatedMovies']) !== null & ($attr104=self).__is_instance__) && typeof $attr103 == 'function'?
							pyjslib['getattr']($attr104, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)['rating']) !== null & ($attr106=((($attr103=self['topRatedMovies']) !== null & ($attr104=self).__is_instance__) && typeof $attr103 == 'function'?
							pyjslib['getattr']($attr104, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)).__is_instance__) && typeof $attr105 == 'function'?
							pyjslib['getattr']($attr106, 'rating'):
							((($attr103=self['topRatedMovies']) !== null & ($attr104=self).__is_instance__) && typeof $attr103 == 'function'?
							pyjslib['getattr']($attr104, 'topRatedMovies'):
							self['topRatedMovies']).__getitem__(row)['rating']));
			}
			self['lessThanFiveLabel']['setVisible']((pyjslib['cmp'](numTopRated, 5) == -1));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateTopRatedMovies'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'updateCategories', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr112,$attr115,$add37,$iter4_type,$attr110,$add35,$iter4_iter,row,$add29,$add28,$add27,$attr107,$attr108,$attr109,$attr116,$add38,$attr111,$iter4_nextval,$add30,$add31,$add36,$attr114,$add34,cat,$iter4_idx,$add32,$add33,$iter4_array,$attr113;
			self['clearTable'](((($attr107=self['topCategoryMoviesFlexTable']) !== null & ($attr108=self).__is_instance__) && typeof $attr107 == 'function'?
						pyjslib['getattr']($attr108, 'topCategoryMoviesFlexTable'):
						self['topCategoryMoviesFlexTable']));
			$iter4_iter = pyjslib['enumerate'](((($attr109=self['categories']) !== null & ($attr110=self).__is_instance__) && typeof $attr109 == 'function'?
						pyjslib['getattr']($attr110, 'categories'):
						self['categories']));
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,true):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				row = $iter4_nextval.__array[0];
				cat = $iter4_nextval.__array[1];
				self['topCategoryMoviesFlexTable']['setText']((typeof ($add27=row)==typeof ($add28=1) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					pyjslib['op_add']($add27,$add28)), 0, (typeof ($add33=(typeof ($add31=(typeof ($add29=cat)==typeof ($add30=String(' (')) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					pyjslib['op_add']($add29,$add30)))==typeof ($add32=pyjslib['str'](((($attr111=self['categories']) !== null & ($attr112=self).__is_instance__) && typeof $attr111 == 'function'?
							pyjslib['getattr']($attr112, 'categories'):
							self['categories']).__getitem__(cat).__getitem__(2))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					pyjslib['op_add']($add31,$add32)))==typeof ($add34=String(')')) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					pyjslib['op_add']($add33,$add34)));
				self['topCategoryMoviesFlexTable']['setText']((typeof ($add35=row)==typeof ($add36=1) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					pyjslib['op_add']($add35,$add36)), 1, ((($attr113=self['categories']) !== null & ($attr114=self).__is_instance__) && typeof $attr113 == 'function'?
							pyjslib['getattr']($attr114, 'categories'):
							self['categories']).__getitem__(cat).__getitem__(0));
				self['topCategoryMoviesFlexTable']['setText']((typeof ($add37=row)==typeof ($add38=1) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					pyjslib['op_add']($add37,$add38)), 2, pyjslib['sprintf'](String('%.1f'), pyjslib['float'](((($attr115=self['categories']) !== null & ($attr116=self).__is_instance__) && typeof $attr115 == 'function'?
							pyjslib['getattr']($attr116, 'categories'):
							self['categories']).__getitem__(cat).__getitem__(1))));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateCategories'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clearTable', function(table) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
			}
			var $iter5_nextval,$iter5_idx,err,i,$iter5_array,$pyjs_try_err,$iter5_iter,$iter5_type;
			try {
				$iter5_iter = pyjslib['range'](table['getRowCount']());
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					table['removeRow'](1);
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: MovieRatings, try_lineno: 325};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 329;
					err = $pyjs_try_err;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['table']]);
		$cls_definition['clearTable'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $iter6_type,$iter6_iter,$iter6_nextval,movie,$add42,$add41,$add40,$attr120,$attr121,$attr122,$attr123,$attr124,$attr125,$attr126,$iter7_type,$iter6_idx,$iter7_iter,$iter6_array,$iter7_idx,$attr119,$attr118,$add39,$iter7_nextval,$iter7_array,m,$attr117;
			if (pyjslib['bool'](pyjslib['list']([String('getMovies'), String('addMovie'), String('deleteMovie'), String('editMovie')]).__contains__(((($attr117=request_info['method']) !== null & ($attr118=request_info).__is_instance__) && typeof $attr117 == 'function'?
						pyjslib['getattr']($attr118, 'method'):
						request_info['method'])))) {
				self.movies = pyjslib['list']([]);
				self['clearTable'](((($attr119=self['moviesFlexTable']) !== null & ($attr120=self).__is_instance__) && typeof $attr119 == 'function'?
							pyjslib['getattr']($attr120, 'moviesFlexTable'):
							self['moviesFlexTable']));
				$iter6_iter = response;
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					m = $iter6_nextval;
					movie = MovieRatings['Movie'](m.__getitem__(0), m.__getitem__(1), m.__getitem__(2));
					self['addMovie'](null, movie);
				}
				self['moviesListLabel']['setText']((typeof ($add41=(typeof ($add39=String('Movies List ('))==typeof ($add40=pyjslib['str'](pyjslib['len'](((($attr121=self['movies']) !== null & ($attr122=self).__is_instance__) && typeof $attr121 == 'function'?
							pyjslib['getattr']($attr122, 'movies'):
							self['movies'])))) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					pyjslib['op_add']($add39,$add40)))==typeof ($add42=String(')')) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					pyjslib['op_add']($add41,$add42)));
				self['remote']['getTopRated'](self);
				self['remote']['getCategories'](self);
			}
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr123=request_info['method']) !== null & ($attr124=request_info).__is_instance__) && typeof $attr123 == 'function'?
						pyjslib['getattr']($attr124, 'method'):
						request_info['method']), String('getTopRated')))) {
				self.topRatedMovies = pyjslib['list']([]);
				$iter7_iter = response;
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):pyjslib['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					m = $iter7_nextval;
					movie = MovieRatings['Movie'](m.__getitem__(0), m.__getitem__(1), m.__getitem__(2));
					self['topRatedMovies']['append'](movie);
				}
				self['updateTopRatedMovies']();
			}
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr125=request_info['method']) !== null & ($attr126=request_info).__is_instance__) && typeof $attr125 == 'function'?
						pyjslib['getattr']($attr126, 'method'):
						request_info['method']), String('getCategories')))) {
				self.categories = response;
				self['updateCategories']();
			}
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	MovieRatings['DataService'] = (function(){
		var $cls_instance = $pyjs__class_instance('DataService');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '9a5176925b3fc966f2265e2bd5f34864';
		$cls_definition['methods'] = pyjslib['list']([String('getMovies'), String('getTopRated'), String('getCategories'), String('addMovie'), String('deleteMovie'), String('editMovie')]);
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr128,$attr127;
			MovieRatings['JSONProxy']['__init__'](self, String('services/'), ((($attr127=MovieRatings['DataService']['methods']) !== null & ($attr128=MovieRatings['DataService']).__is_instance__) && typeof $attr127 == 'function'?
						pyjslib['getattr']($attr128, 'methods'):
						MovieRatings['DataService']['methods']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(MovieRatings['JSONProxy']));
	})();
	if (pyjslib['bool'](pyjslib['op_eq'](MovieRatings['__name__'], String('__main__')))) {
		MovieRatings['pyjd']['setup'](String('public/index.html'));
		MovieRatings['app'] = MovieRatings['MovieRatings']();
		MovieRatings['app']['onModuleLoad']();
		MovieRatings['pyjd']['run']();
	}
	return this;
}; /* end MovieRatings */


/* end module: MovieRatings */


/*
PYJS_DEPS: ['pyjd', 'pygwt', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KEY_ENTER', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.Window', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'Movie.Movie', 'Movie', 're']
*/
