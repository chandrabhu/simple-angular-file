<!DOCTYPE html>
<html ng-app>
<head>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.2/angular.min.js"></script>
<script src="./angular-controller.js"></script>
</head>

<body>
//Simple
<form>
To :<br>
<input ng-model="name" type="text"/><br>
Message :<br>
<textarea ng-model="message"></textarea>
<input type="submit" value="send message" />
</form>
<div class="postcard">
<div>{{ name }} </div>
<p> {{ message }} </p>
</div>

//Using Controller
<table ng-controller="BasketCtrl">
<tr><td>Item:</td><td>{{ description }}</td></tr>
<tr><td>Cost:</td><td>${{ cost }}</td></tr>
<tr><td>Qty: </td><td><input type="number" ng-model="qty" ></td></tr>
<tr><td>Subtotal:</td><td>{{qty * cost | currency}} </td></tr>
</table>

//Get External Data
<table ng-controller="TimetableCtrl">
<tr><th>time</th><th>title</th><th>detail </th></tr>
<tr ng-repeat="session in sessions">
<td>{{ session . time }} </td>
<td>{{ session.title }}</td>
<td>{{ session.detail }}</td>
</tr>
</table>




</body>
</html>
