<!DOCTYPE html>
<html ng-app>
<head>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.2/angular.min.js"></script>
</head>


<body>
        
<form>
To :<br>
<input ng-model =" name" type="text"/><br>
Message :<br>
<textarea ng-model ="message"></textarea>
<input type="submit" value="send message" />
</form>


<div class="postcard">
<div>{{ name }} </div>
<p> {{ message }} </p>
</div>
</body>
</html>
