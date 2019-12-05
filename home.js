<!DOCTYPE html>
<html ng- app>
<head> ...
c09/ angular-introducti on.html
<script src="https://aj ax.googleapi s . com/ajax/
l i bs/angularjs/1 .0.2/angular.min.js"></scri pt>
</head>
<body> ...
<form>
To :<br>
<input ng-model =" name" type="text"/><br>
Message :<br>
<textarea ng-model ="message"></textarea>
<input type="submit" value="send message" />
</form> ...
<div class="postcard">
<div>{{ name }} </div>
<p> {{ message }} </p>
</div>
</body>
</html>
