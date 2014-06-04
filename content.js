var home="<div class=\"textbox\"> <h1> Titel </h1> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non commodo nibh, ac vestibulum est. Etiam dui dolor, sollicitudin vitae ornare vitae, luctus sed metus. Suspendisse a dui in urna imperdiet convallis at quis diam. Phasellus sagittis libero urna, eget malesuada arcu congue vel. Etiam in adipiscing ante. Pellentesque sit amet volutpat risus. Nunc rutrum aliquam orci, at vestibulum est aliquet ut. </p> <p>Donec non rutrum purus, ac pellentesque augue. Etiam tincidunt lacus tortor, vel tempor augue pharetra porttitor. Curabitur hendrerit cursus est, sit amet volutpat nisl porttitor nec. Cras in lorem ultrices, auctor libero a, eleifend orci. Nulla a accumsan diam. Nullam ultricies urna ullamcorper, pellentesque eros at, bibendum purus. Suspendisse congue vel risus aliquam congue. Aliquam vitae libero tortor. Quisque nulla magna, ultrices eget leo ac, ullamcorper blandit est. Fusce tellus enim, tempus a porta at, vehicula ut erat. </p> </div>"

var projects=""

var about="<div id=\"aboutbox\"> <div id=\"profile\"> <img id=\"profileimg\" src=\"images/profile.jpg\"> <p>André Stadelmann</p> </div> <div id=\"abouttext\"> <h1>Titel</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit ante, mollis nec laoreet nec, cursus eu magna. Maecenas tristique dui vulputate orci lacinia tempus. Proin at ligula blandit lectus volutpat blandit. Sed tempus odio a nibh tristique vehicula. Nunc fermentum quis mauris at convallis. Ut viverra magna sed tellus molestie, vel tempor metus mollis. Curabitur faucibus metus nec tortor rutrum vestibulum ac sed erat. Integer eget risus sed nisi adipiscing mattis. Suspendisse tristique at massa eget tincidunt. Aliquam tortor magna, euismod sit amet massa quis, eleifend venenatis dolor. Nulla et ornare metus. Maecenas sodales lobortis metus, a scelerisque tortor lobortis sed.</p> <p>Donec sit amet dictum libero, sed semper leo. Quisque id ullamcorper ipsum. Nunc sed varius massa. Duis sit amet interdum mi. Quisque nec viverra mauris. Donec pretium urna tortor, pellentesque aliquet nisl dignissim et. Morbi dignissim nibh facilisis risus viverra molestie. Praesent non dolor vitae mauris rhoncus condimentum. Nulla quis malesuada mauris, at semper est. Donec mattis congue nisl, eget placerat nisi fringilla eu. Proin quis sem dui. Quisque sed tincidunt sem. Aliquam dui lacus, accumsan vel placerat eu, viverra at sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tincidunt augue sed tincidunt viverra. Donec varius, mi eu venenatis luctus, tellus erat tempor augue, sit amet accumsan massa diam vel leo.</p> </div> </div>"

var contact=""

function fillContentHome() 
{
	if (window.location.href.match(/\#Home/))
	{
		var $toLoad;
		$toLoad = $($.parseHTML(home));
		$("#container").html($toLoad);
		$("#home").attr('class', 'thispage');
		$("#projects").attr('class', '');
		$("#about").attr('class', '');
		$("#contact").attr('class', '');
	}

	if (window.location.href.match(/\#Projects/))
		{
			var $toLoad;
			$toLoad = $($.parseHTML(projects));
			$("#container").html($toLoad);
			$("#home").attr('class', '');
			$("#projects").attr('class', 'thispage');
			$("#about").attr('class', '');
			$("#contact").attr('class', '');
		}
}

//function fillContentProjects() 
//{
//		var $toLoad;
//		$toLoad = $($.parseHTML(projects));
//		$("#container").html($toLoad);
//		$("#home").attr('class', '');
//		$("#projects").attr('class', 'thispage');
//		$("#about").attr('class', '');
//		$("#contact").attr('class', '');
//}

//function fillContentAbout() 
//{
//	var $toLoad;
//	$toLoad = $($.parseHTML(about));
//	$("#container").html($toLoad);
//	$("#home").attr('class', '');
//	$("#projects").attr('class', '');
//	$("#about").attr('class', 'thispage');
//	$("#contact").attr('class', '');
//}

//function fillContentContact() 
//{
//	var $toLoad;
//	$toLoad = $($.parseHTML(contact));
//	$("#container").html($toLoad);
//	$("#home").attr('class', '');
//	$("#projects").attr('class', '');
//	$("#about").attr('class', '');
//	$("#contact").attr('class', 'thispage');
//}