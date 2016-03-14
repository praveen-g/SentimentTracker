

function intersect(array1, array2) {
	console.log(4)
   var result = [];
   // Don't destroy the original arrays
   var a = array1.slice(0);
   var b = array2.slice(0);
   var aLast = a.length - 1;
   var bLast = b.length - 1;
   while (aLast >= 0 && bLast >= 0) {
      if (a[aLast] > b[bLast] ) {
         a.pop();
         aLast--;
      } else if (a[aLast] < b[bLast] ){
         b.pop();
         bLast--;
      } else /* they're equal */ {
         result.push(a.pop());
         b.pop();
         aLast--;
         bLast--;
      }
   }
   return result;
}

function computeDifference(a1,a2){
	console.log(6)
	var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

function findFriends(friends){
	console.log(3)
	var friends_of_friends=[]
	var common_friends=[]

	for(i=0; i<10; i++){

		cb.__call(
			"friends_ids",
			{
				"user_id": friends[i]
			},
			function (reply,rate, err){

				var common_friends_length=[]

				friends_of_friends.push(reply.ids);

				common_friends.push(intersect(friends,reply.ids));

				for(i=0;i<common_friends.length;i++){
					console.log(5)
					common_friends_length.push(common_friends[i].length);
				}

				var index= common_friends_length.indexOf(Math.max.apply(Math, common_friends_length));
				
				var account = computeDifference(friends,common_friends[index])
				return [index,friends,common_friends]
				
			}
		);
	}
}

function getFriends(){

	console.log(2)
	cb.__call(
		"friends_ids",
		{},
		function (reply,rate, err){
			friends = reply.ids;
			var values= findFriends(friends)
			return values
		}
	);
}

function twitterAnalysis(){
	
	var values= getFriends()
	var index = values[0]
	var friends = values[1]
	var common_friends = values[2]
	console.log(7)
	var account = computeDifference(friends,common_friends[values[0])
	console.log(account)
}
