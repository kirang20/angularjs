function TodoController($scope) {
	$scope.todos = [
		{"text": "Task 1", "done": false},
		{"text": "Task 2", "done": false},
		{"text": "Task 3", "done": true}
	];
	
	$scope.addTodo = function() {
		$scope.todos.push({"text" : $scope.todoText, "done": false});
		$scope.todoText = "";
	};
	
	$scope.remaining = function() {
		var notDone = $scope.todos.filter(function(todo) {
			return !todo.done;
		});
		return notDone.length;
	};

	$scope.archive = function() {
		var notDoneOnes = $scope.todos.filter(function(todo) {
			return !todo.done;
		});
		$scope.todos = notDoneOnes;
	};
}