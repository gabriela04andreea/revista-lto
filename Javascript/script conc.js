var app = angular.module('app', ['ngAnimate'])

app.controller('mainCtrl', function($scope) {
	$scope.boxes = [{
		name: 'MATEMATICA',
		image: '/images/matematica.concursuri.scolare.jpg',
		Text: 'Dragi ovidiști, anul acesta revin olimpiadele și concursurile, iar cel mai important aspect este că se vor desfășura cu prezență fizică.',
		Text2:'Calendarul olimpiadelor și concursurilor de matematică în anul școlar 2022-2023, dar si rezultatelele și alte informații le puteți găsi accesand link-ul de mai jos:',
		Link:'/Olimpiade/OlimpiadeMate.html'
	},{
		name: 'INFORMATICĂ',
		image: 'images/info.png',
		Text: 'Dragi ovidiști, anul acesta revin olimpiadele și concursurile, iar cel mai important aspect este că se vor desfășura cu prezență fizică.',
		Text2:'Calendarul olimpiadelor și concursurilor de informatica în anul școlar 2022-2023, dar si rezultatelele și alte informații le puteți găsi accesand link-ul de mai jos:',
		Link:'/Olimpiade/OlimpiadeInformatica.html'
	},{
		name: 'FIZICA',
		image: '/images/Fizica.png',
		Text: 'Dragi ovidiști, anul acesta revin olimpiadele și concursurile, iar cel mai important aspect este că se vor desfășura cu prezență fizică.',
		Text2:'Calendarul olimpiadelor și concursurilor de fizica în anul școlar 2022-2023, dar si rezultatelele și alte informații le puteți găsi accesand link-ul de mai jos:',
		Link:'/Olimpiade/OlimpiadeFizica.html'
	}, {
		name: 'CHIMIE',
		image: '/images/chimie.png',
		Text: 'Dragi ovidiști, anul acesta revin olimpiadele și concursurile, iar cel mai important aspect este că se vor desfășura cu prezență fizică.',
		Text2:'Calendarul olimpiadelor și concursurilor de chimie în anul școlar 2022-2023, dar si rezultatelele și alte informații le puteți găsi accesand link-ul de mai jos:',
		Link:'/Olimpiade/OlimpiadeChimie.html'
	}, {
		name: 'BIOLOGIE',
		image: '/images/bio.png',
		Text: 'Dragi ovidiști, anul acesta revin olimpiadele și concursurile, iar cel mai important aspect este că se vor desfășura cu prezență fizică.',
		Text2:'Calendarul olimpiadelor și concursurilor de biologie în anul școlar 2022-2023, dar si rezultatelele și alte informații le puteți găsi accesand link-ul de mai jos:',
		Link:'/Olimpiade/OlimpiadeBiologie.html'
	} 
	, {
		name: 'Limba Română',
		image: '/images/romana.png',
		Text: 'Dragi ovidiști, anul acesta revin olimpiadele și concursurile, iar cel mai important aspect este că se vor desfășura cu prezență fizică.',
		Text2:'Calendarul olimpiadelor și concursurilor de Limbă și literatura Română în anul școlar 2022-2023, dar si rezultatelele și alte informații le puteți găsi accesand link-ul de mai jos:',
		Link:'/Olimpiade/OlimpiadeRomana.html'
	}
	, {
		name: 'LIMBI STRĂINE',
		image: '/images/lbstaine.png',
		Text: 'Dragi ovidiști, anul acesta revin olimpiadele și concursurile, iar cel mai important aspect este că se vor desfășura cu prezență fizică.',
		Text2:'Calendarul olimpiadelor și concursurilor de GERMANĂ, ENGLEZĂ, FRANCEZĂ, SPANIOLĂ în anul școlar 2022-2023, dar și rezultatelele și alte informații le puteți găsi accesand link-ul de mai jos:',
		Link:'/Olimpiade/OlimpiadeLimbiStraine.html'
	}
	, {
		name: 'SPORT',
		image: '/images/sport1.png',
		Text: 'Dragi ovidiști, anul acesta revin olimpiadele și concursurile, iar cel mai important aspect este că se vor desfășura cu prezență fizică.',
		Text2:'Calendarul competițiilor sportive în anul școlar 2022-2023, dar si rezultatelele și alte informații le puteți găsi accesand link-ul de mai jos:',
		Link:'/Olimpiade/ConcursuriSportive.html'
	}];

	$scope.selected = [];
	$scope.selectBox = function(item, position) {
		$scope.selected = [{
			item: item,
			position: position
		}];
		$scope.$apply();
	}
	$scope.clearSelection = function() {
		$scope.selected = [];
	}
})

app.directive('box', function() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;

			box.goFullscreen = function(e) {
				box.onSelect(box.item, e.target.getBoundingClientRect())
			}
		},
		link: function(scope, element) {
			element.bind('click', scope.box.goFullscreen)
			element.css({
				'background-image': 'url(' + scope.box.item.image + ')'
			})
		}
	}
})

app.directive('bigBox', function($timeout) {
	return {
		restrict: 'AE',
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;
		},
		link: function(scope, element) {
			var css = {}
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + 'px';
			}
			
			element.css(css);

			$timeout(function() {
				element.css({
					top: '50%',
					left: '10%'
				})
				element.addClass('image-out');
			}, 200)

			$timeout(function() {
				element.css({
					width: '80%',
					height: '100%'
				})
			}, 500)
			
			$timeout(function(){
				element.addClass('show');
			}, 800)
		}
	}
})