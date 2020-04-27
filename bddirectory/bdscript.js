/**
 * Created by Md. Munir Hossain
 */
 
var parent_domain;
var header_title_arr = new Array();
var lastPage = '',lastHeaderTitle = '',lastDataId='',lastDomain='',sel_photo_url='';
var upazillaActiveTab = 0;
var districtActiveTab = 0;
var divisionActiveTab = 0;
jQuery(document).ready(function($){
    $('#header2').hide();
    $('#search_option').hide();
    
    backhistory();

    $('#menu-bar').click(function(){
        $('.mega-menu').css('display','block');
        $('#cross-bar').show();
        $(this).hide();
    });
    $('#cross-bar').click(function(){
        $('.mega-menu').css('display','none');
        $('#menu-bar').show();
        $(this).hide();
    });

    $('#refresh').on('click',function(){
        //console.log(lastDomain + '/' + lastDataId + '/' + lastHeaderTitle + '/' + lastPage);

        if(lastPage=='ministry'){
            window.location.hash = "ministry";
            loadAllMinistry('all.ministry.php');
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage = 'ministry';
        }

        else if(lastPage=='child-ministry'){
            window.location.hash = "child-ministry";
            loadMinistryChild('child.ministry.php',lastDataId,lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage = 'child-ministry';
        }
        else if(lastPage=='employees-ministry'){
            window.location.hash = "employees-ministry";
            loadEmployeesMinistryChild('employees.child.ministry.php',lastDataId,lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage = 'employees-ministry';            
        }
        else if(lastPage=='employee-ministry'){
            window.location.hash = "employee-ministry";
            loadEmployeeMinistryChild('employee.child.ministry.php',lastDataId,lastDomain,sel_photo_url);
            lastPage = 'employee-ministry';
        }
        else if(lastPage=='divisional'){
            window.location.hash = "divisional";
            loadDivisionList('division.office.php',lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage = 'divisional';
        }
        else if(lastPage=='officers-divisional'){
            window.location.hash = "officers-divisional";
            loadDivisionOfficers('division.officers.list.php',lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage = 'officers-divisional';
        }
        else if(lastPage=='officer-divisional'){
            window.location.hash = "officer-divisional";
            loadDivisionOfficer('division.officer.list.php',lastDataId,lastDomain,sel_photo_url);
            lastPage = 'officer-divisional';
        }
        else if(lastPage=='district'){
            window.location.hash = "district";
            loadDistrictList('district.office.php',lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage='district'
        }
        else if(lastPage=='officers-district'){
            window.location.hash = "officers-district";
            loadDistrictOfficers('district.officers.list.php',lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage='officers-district';
        }
        else if(lastPage=='officer-district'){
            window.location.hash = "officer-district";
            loadDistrictOfficer('district.officer.list.php',lastDataId,lastDomain,sel_photo_url);
            lastPage='officer-district';

        }
        else if(lastPage=='upazila'){
            window.location.hash = "upazila";
            loadUpazilaList('upazila.office.php',lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage='upazila';
        }
        else if(lastPage=='officers-upazila'){
            window.location.hash = "officers-upazila";
            loadUpazilaOfficers('upazila.officers.list.php',lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage='officers-upazila';
        }
        else if(lastPage=='officer-upazila'){
            window.location.hash = "officer-upazila";
            loadUpazilaOfficer('upazila.officer.list.php',lastDataId,lastDomain,sel_photo_url);
            lastPage='officer-upazila';

        }

        else if(lastPage=='union'){
            window.location.hash = "union";
            loadUnionList('union.office.php',lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage='union';
        }
        else if(lastPage=='officers-union'){
            window.location.hash = "officers-union";
            loadUnionOfficers('union.officers.list.php',lastDomain);
            $('#header2').find('.title').html(lastHeaderTitle);
            lastPage='officers-union';
        }
        else if(lastPage=='officer-union'){
            window.location.hash = "officer-union";
            loadUnionOfficer('union.officer.list.php',lastDataId,lastDomain,sel_photo_url);
            lastPage='officer-union';

        }


    });

    $('#home-list li').on('click',function () {
        if($(this).attr('data-type')=='home') {
            if ($(this).attr('data-id') == 'ministry') {
                window.location.hash = "ministry";
                loadAllMinistry('all.ministry.php');
                $('#header2').find('.title').html($(this).html());
                header_title_arr.push($(this).html());
                lastPage = 'ministry';
                lastHeaderTitle = $(this).html();
            } else {
                window.location.hash = "divisional";
                parent_domain = $(this).attr('data-domain');
                loadDivisionList('division.office.php',$(this).attr('data-domain'));
                $('#header2').find('.title').html(($(this).html()));
                header_title_arr.push($(this).html());
                lastPage = 'divisional';
                lastHeaderTitle = $(this).html();
                lastDomain = $(this).attr('data-domain');
            }
        }
    });
    //var selHomePage = 0;
    $('#search_link').on('click',function(){
        $('#header2').hide();
        $('#main-body,#home-list .home-view').hide();
        $('#search_option').show();
        $('#header2 .refresh-btn').hide();
        //selHomePage = 1;
    });

    $('#office_link').on('click',function(){
        $('#header2').hide();
        $('#search_option').hide();
        $('#main-body,#home-list .home-view').show();
        $('#header2 .refresh-btn').show();
        //selHomePage = 0;
    });


    $('#search_button').on('click',function(){
        if(($('#search_key').val())==""){
            //alert("দয়া করে টেক্সট লিখুন।");
            $('#search_key').focus();
        }
        else{
         window.location.hash = "search-officers";
         loadSearchOfficerInformation('show.search.officer.php',$('#search_key').val());
         $('#header2').find('.title').html($('#search_key').val());
       }
    });

    
});


function loadSearchOfficerInformation(fileName,search_key){
    $.ajax({
        type:'POST',
        url: host+fileName+'?search_key='+encodeURIComponent(search_key),
        beforeSend: function () {
            $('#main-body').find('.home-view').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading,#header1,#search_option,#office_link,#search_link').hide();
            $('#header2').show();
            $('#main-body').show().find('#show-search-information-list').html(data);
            $('#main-body').find('#show-search-information-list').show();

            $('#show-search-information-list li').on('click',function () {
                if($(this).attr('data-type')=='show-search-information-list') {
                    window.location.hash = "search-officer";
                    showSearchOfficerInformation('show.search.officer.information.php',$(this).attr('data-id'),$(this).attr('data-domain'));
                    $('#header2').find('.title').html(search_key);
                    header_title_arr.push(search_key);
                }
            });
        }
    });
}

function showSearchOfficerInformation(fileName,id,domain){
    var URL = host+fileName+'?id='+id+'&domain='+domain;
    $.ajax({
        type: 'POST',
        url: URL,
        beforeSend: function () {
            $('#main-body').find('#show-search-information-list').hide();
            $('#loading').show();
        },
        success: function (data) {
            $('#loading').hide();
            $('#header1').hide();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#show-search-officer-information-list').html(data);
            $('#main-body').find('#show-search-officer-information-list').show();
        }
    });
}

function loadAllMinistry(fileName){
    $.ajax({
        type: 'POST',
        url: host+fileName,
        beforeSend: function () {
            $('#main-body').find('.home-view').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#ministry-list').html(data);
            $('#main-body').find('#ministry-list').show();

            $('#ministry-list li').on('click',function () {
                if($(this).attr('data-type')=='ministry-list') {
                    window.location.hash = "child-ministry";
                    loadMinistryChild('child.ministry.php',$(this).attr('data-id'),$(this).attr('data_domain'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'child-ministry';
                    lastHeaderTitle = $(this).html();
                    lastDataId = $(this).attr('data-id');
                    lastDomain = $(this).attr('data_domain');
                }
            });
        }
    });
}

function loadMinistryChild(fileName,id,data_domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?id='+id+'&domain='+data_domain,
        beforeSend: function () {
            $('#main-body').find('#ministry-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();;
            $('#main-body').find('#ministry-child-list').attr('parent-data-id',id).html(data).show();
            $('#ministry-child-list li').on('click',function () {
                if($(this).attr('data-type')=='ministry-child-list') {
                    window.location.hash = "employees-ministry";
                    loadEmployeesMinistryChild('employees.child.ministry.php',$(this).attr('data-id'),$(this).attr('data_domain'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'employees-ministry';
                    lastHeaderTitle = $(this).html();
                    lastDataId = $(this).attr('data-id');
                    lastDomain = $(this).attr('data_domain');
                }
            });
        }
    });
}

function loadEmployeesMinistryChild(fileName,id,data_domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?id='+id+'&domain='+data_domain,
        beforeSend: function () {
            $('#main-body').find('#ministry-child-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#ministry-employees-child-list').html(data);
            $('#main-body').find('#ministry-employees-child-list').attr('parent-data-id',id).show();

            $('#ministry-employees-child-list li').on('click',function () {
                if($(this).attr('data-type')=='ministry-child-employees-list') {
                    sel_photo_url = $(this).attr('data-photo');
                    window.location.hash = "employee-ministry";
                    loadEmployeeMinistryChild('employee.child.ministry.php',$(this).attr('data-id'),$(this).attr('data_domain'),sel_photo_url);
                    lastPage = 'employee-ministry';
                    lastHeaderTitle = $(this).html();
                    lastDataId = $(this).attr('data-id');
                    lastDomain = $(this).attr('data_domain');
                }
            });
        }
    });
}

function loadEmployeeMinistryChild(fileName,id,data_domain,photo=null){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?id='+id+'&domain='+data_domain+'&photo='+photo,
        beforeSend: function () {
            $('#main-body').find('#ministry-employees-child-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#ministry-employee-child-list').html(data);
            $('#main-body').find('#ministry-employee-child-list').show();
        }
    });
}

function loadDivisionList(fileName,domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?domain='+domain,
        beforeSend: function () {
            $('#main-body').find('#home-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#division-list').html(data);
            $('#main-body').find('#division-list').attr('parent-data-domain',domain).show();

            $('.office-list li').on('click',function () {
                if($(this).attr('data-type')=='division-office-list') {
                    window.location.hash = "officers-divisional";
                    loadDivisionOfficers('division.officers.list.php',$(this).attr('data-domain'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'officers-divisional';
                    lastHeaderTitle = $(this).html();
                    lastDomain = $(this).attr('data-domain');
                }
            });

            $('.geo-list li').on('click',function () {
                if($(this).attr('data-type')=='division-child-list') {
                    window.location.hash = "district";
                    loadDistrictList('district.office.php',$(this).attr('data-domain'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'district';
                    lastHeaderTitle = $(this).html();
                    lastDomain = $(this).attr('data-domain');
                }
            });

            $('.office-but').on('click',function(){
                var p = $(this).parents('div#division-list');
                p.find('.geo-list').hide();
                p.find('.office-list').show();
                $('#division-list .office-but').addClass('active-but');
                $('#division-list .office-but').removeClass('inactive-but');
                $('#division-list .geo-but').addClass('inactive-but');
                $('#division-list .geo-but').removeClass('active-but');
                divisionActiveTab = 0;
            });
            $('.geo-but').on('click',function(){
                var p = $(this).parents('div#division-list');
                p.find('.office-list').hide();
                p.find('.geo-list').show();
                $('#division-list .office-but').addClass('inactive-but');
                $('#division-list .office-but').removeClass('active-but');
                $('#division-list .geo-but').addClass('active-but');
                $('#division-list .geo-but').removeClass('inactive-but');
                divisionActiveTab = 1;
            });
            if(divisionActiveTab == 0){
                //console.log('a');
                var p = $('div#division-list');
                p.find('.geo-list').hide();
                p.find('.office-list').show();
                $('#division-list .office-but').addClass('active-but');
                $('#division-list .office-but').removeClass('inactive-but');
                $('#division-list .geo-but').addClass('inactive-but');
                $('#division-list .geo-but').removeClass('active-but');
            }else if(divisionActiveTab == 1){
                //console.log('b');
                var p = $('div#division-list');
                p.find('.office-list').hide();
                p.find('.geo-list').show();
                $('#division-list .office-but').addClass('inactive-but');
                $('#division-list .office-but').removeClass('active-but');
                $('#division-list .geo-but').addClass('active-but');
                $('#division-list .geo-but').removeClass('inactive-but');
            }
        }
    });
}

function loadDivisionOfficers(fileName,domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?domain='+domain,
        beforeSend: function () {
            $('#main-body').find('#division-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#division-officers-list').html(data);
            $('#main-body').find('#division-officers-list').attr('parent-data-domain',domain).show();

            $('.division-officers-view li').on('click',function () {
                if($(this).attr('data-type')=='division-officer-list') {
                    sel_photo_url = $(this).attr('data-photo');
                    window.location.hash = "officer-divisional";
                    loadDivisionOfficer('division.officer.list.php',$(this).attr('data-id'),domain,sel_photo_url);
                    lastPage = 'officer-divisional';
                    lastHeaderTitle = $(this).html();
                    lastDataId = $(this).attr('data-id');
                    lastDomain = domain; 
                }
            });
        }
    });
}

function loadDivisionOfficer(fileName,id,domain,photo){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?id='+id+'&domain='+domain+'&photo='+photo,
        beforeSend: function () {
            $('#main-body').find('#division-officers-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#division-officer-list').html(data);
            $('#main-body').find('#division-officer-list').show();
        }
    });
}

function loadDistrictList(fileName,domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?domain='+domain,
        beforeSend: function () {
            $('#main-body').find('#division-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#district-list').html(data);
            $('#main-body').find('#district-list').attr('parent-data-domain',domain).show();

            $('.office-list li').on('click',function () {
                if($(this).attr('data-type')=='district-office-list') {
                    window.location.hash = "officers-district";
                    loadDistrictOfficers('district.officers.list.php',$(this).attr('data-domain'),$(this).attr('domain_type'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'officers-district';
                    lastHeaderTitle = $(this).html();
                    lastDomain = $(this).attr('data-domain');
                }
            });

            $('.geo-list li').on('click',function () {
                if($(this).attr('data-type')=='district-child-list') {
                    window.location.hash = "upazila";
                    loadUpazilaList('upazila.office.php',$(this).attr('data-domain'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'upazila';
                    lastHeaderTitle = $(this).html();
                    lastDomain = $(this).attr('data-domain');
                }
            });

            $('.office-but').on('click',function(){
                var p = $(this).parents('div#district-list');
                p.find('.geo-list').hide();
                p.find('.office-list').show();
                $('#district-list .office-but').addClass('active-but');
                $('#district-list .office-but').removeClass('inactive-but');
                $('#district-list .geo-but').addClass('inactive-but');
                $('#district-list .geo-but').removeClass('active-but');
                districtActiveTab = 0;
            });
            $('.geo-but').on('click',function(){
                var p = $(this).parents('div#district-list');
                p.find('.office-list').hide();
                p.find('.geo-list').show();
                $('#district-list .office-but').addClass('inactive-but');
                $('#district-list .office-but').removeClass('active-but');
                $('#district-list .geo-but').addClass('active-but');
                $('#district-list .geo-but').removeClass('inactive-but');
                districtActiveTab = 1;
            });
            if(districtActiveTab == 0){
                //console.log('a');
                var p = $('div#district-list');
                p.find('.geo-list').hide();
                p.find('.office-list').show();
                $('#district-list .office-but').addClass('active-but');
                $('#district-list .office-but').removeClass('inactive-but');
                $('#district-list .geo-but').addClass('inactive-but');
                $('#district-list .geo-but').removeClass('active-but');
            }else if(districtActiveTab == 1){
                //console.log('b');
                var p = $('div#district-list');
                p.find('.office-list').hide();
                p.find('.geo-list').show();
                $('#district-list .office-but').addClass('inactive-but');
                $('#district-list .office-but').removeClass('active-but');
                $('#district-list .geo-but').addClass('active-but');
                $('#district-list .geo-but').removeClass('inactive-but');
            }
        }
    });
}

function loadDistrictOfficers(fileName,domain,domain_type){
    console.log(host+fileName+'?domain='+domain+'&domain_type='+domain_type);
    $.ajax({
        type: 'POST',
        url: host+fileName+'?domain='+domain+'&domain_type='+domain_type,
        beforeSend: function () {
            $('#main-body').find('#district-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#district-officers-list').html(data);
            $('#main-body').find('#district-officers-list').attr('parent-data-domain',domain).show();

            $('.district-officers-view li').on('click',function () {
                if($(this).attr('data-type')=='district-officer-list') {
                    sel_photo_url = $(this).attr('data-photo');
                    window.location.hash = "officer-district";
                    loadDistrictOfficer('district.officer.list.php',$(this).attr('data-id'),domain,sel_photo_url);
                    lastPage = 'officer-district';
                    lastHeaderTitle = $(this).html();
                    lastDataId = $(this).attr('data-id');
                    lastDomain = domain;
                }
            });
        }
    });
}

function loadDistrictOfficer(fileName,id,domain,photo){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?id='+id+'&domain='+domain+'&photo='+photo,
        beforeSend: function () {
            $('#main-body').find('#district-officers-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#district-officer-list').html(data);
            $('#main-body').find('#district-officer-list').show();
        }
    });
}

function loadUpazilaList(fileName,domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?domain='+domain,
        beforeSend: function () {
            $('#main-body').find('#district-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#upazila-list').html(data);
            $('#main-body').find('#upazila-list').attr('parent-data-domain',domain).show();

            $('.office-list li').on('click',function () {
                if($(this).attr('data-type')=='upazila-office-list') {
                    window.location.hash = "officers-upazila";
                    loadUpazilaOfficers('upazila.officers.list.php',$(this).attr('data-domain'),$(this).attr('domain_type'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'officers-upazila';
                    lastHeaderTitle = $(this).html();
                    lastDomain = $(this).attr('data-domain');
                }
            });

            $('.geo-list li').on('click',function () {
                if($(this).attr('data-type')=='upazila-child-list') {
                    window.location.hash = "union";
                    loadUnionList('union.office.php',$(this).attr('data-domain'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'union';
                    lastHeaderTitle = $(this).html();
                    lastDomain = $(this).attr('data-domain');
                }
            });

            $('.office-but').on('click',function(){
                var p = $(this).parents('div#upazila-list');
                p.find('.geo-list').hide();
                p.find('.office-list').show();
                $('#upazila-list .office-but').addClass('active-but');
                $('#upazila-list .office-but').removeClass('inactive-but');
                $('#upazila-list .geo-but').addClass('inactive-but');
                $('#upazila-list .geo-but').removeClass('active-but');
                upazillaActiveTab = 0;
            });
            $('.geo-but').on('click',function(){
                var p = $(this).parents('div#upazila-list');
                p.find('.office-list').hide();
                p.find('.geo-list').show();
                $('#upazila-list .office-but').addClass('inactive-but');
                $('#upazila-list .office-but').removeClass('active-but');
                $('#upazila-list .geo-but').addClass('active-but');
                $('#upazila-list .geo-but').removeClass('inactive-but');
                upazillaActiveTab = 1;
            });

            if(upazillaActiveTab == 0){
                //console.log('a');
                var p = $('div#upazila-list');
                p.find('.geo-list').hide();
                p.find('.office-list').show();
                $('#upazila-list .office-but').addClass('active-but');
                $('#upazila-list .office-but').removeClass('inactive-but');
                $('#upazila-list .geo-but').addClass('inactive-but');
                $('#upazila-list .geo-but').removeClass('active-but');
            }else if(upazillaActiveTab == 1){
                //console.log('b');
                var p = $('div#upazila-list');
                p.find('.office-list').hide();
                p.find('.geo-list').show();
                $('#upazila-list .office-but').addClass('inactive-but');
                $('#upazila-list .office-but').removeClass('active-but');
                $('#upazila-list .geo-but').addClass('active-but');
                $('#upazila-list .geo-but').removeClass('inactive-but');
            }
        }
    });
}

function loadUpazilaOfficers(fileName,domain,domain_type){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?domain='+domain+'&domain_type='+domain_type,
        beforeSend: function () {
            $('#main-body').find('#upazila-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#upazila-officers-list').attr('parent-data-domain',domain).html(data).show();

            $('.upazila-officers-view li').on('click',function () {
                if($(this).attr('data-type')=='upazila-officer-list') {
                    sel_photo_url = $(this).attr('data-photo');
                    window.location.hash = "officer-upazila";
                    loadUpazilaOfficer('upazila.officer.list.php',$(this).attr('data-id'),domain,sel_photo_url);
                    lastPage = 'officer-upazila';
                    lastHeaderTitle = $(this).html();
                    lastDataId = $(this).attr('data-id');
                    lastDomain = domain;
                }
            });
        }
    });
}

function loadUpazilaOfficer(fileName,id,domain,photo){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?id='+id+'&domain='+domain+'&photo='+photo,
        beforeSend: function () {
            $('#main-body').find('#upazila-officers-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#main-body').find('#upazila-officer-list').html(data);
            $('#main-body').find('#upazila-officer-list').show();
        }
    });
}

function loadUnionList(fileName,domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?domain='+domain,
        beforeSend: function () {
            $('#main-body').find('#upazila-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#main-body').find('#union-list').html(data);
            $('#main-body').find('#union-list').attr('parent-data-domain',domain).show();

            $('.office-list li').on('click',function () {
                if($(this).attr('data-type')=='union-office-list') {
                    window.location.hash = "officers-union";
                    loadUnionOfficers('union.officers.list.php',$(this).attr('data-domain'));
                    $('#header2').find('.title').html(($(this).html()));
                    header_title_arr.push($(this).html());
                    lastPage = 'officers-union';
                    lastHeaderTitle = $(this).html();
                    lastDomain = $(this).attr('data-domain');

                }
            });
        }
    });
}

function loadUnionOfficers(fileName,domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?domain='+domain,
        beforeSend: function () {
            $('#main-body').find('#union-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#main-body').find('#union-officers-list').html(data);
            $('#main-body').find('#union-officers-list').attr('parent-data-domain',domain).show();

            $('.union-officers-view li').on('click',function () {
                if($(this).attr('data-type')=='union-officer-list') {
                    sel_photo_url = $(this).attr('data-photo');
                    window.location.hash = "officer-union";
                    loadUnionOfficer('union.officer.list.php',$(this).attr('data-id'),domain,sel_photo_url);
                    lastPage = 'officer-union';
                    lastHeaderTitle = $(this).html();
                    lastDataId = $(this).attr('data-id');
                    lastDomain = domain;
                }
            });
        }
    });
}

function loadUnionOfficer(fileName,id,domain,photo){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?id='+id+'&domain='+domain+'&photo='+photo,
        beforeSend: function () {
            $('#main-body').find('#union-officers-list').hide();
            $('#back_shade,#loading').show();
        },
        success: function (data) {
            $('#back_shade,#loading').hide();
            $('#header1').hide();
            $('#cashclear').show();
            $('#header2').show();
            $('#office_link').hide();
            $('#search_link').hide();
            $('#main-body').find('#union-officer-list').html(data);
            $('#main-body').find('#union-officer-list').show();
        }
    });
}

function backhistory(){
    $('#backcc').on('click',function(){

        var hash = window.location.hash;

        if(hash == "#ministry"){
            window.location= "";
            $('#cashclear').hide();
            $('#ministry-list').hide();
            $('#home-list').show();
            $('#header2').find('.title').html(header_title_arr.pop());
        }

        else if(hash == "#child-ministry"){
            window.location.hash = "ministry";
            $('#cashclear').show();
            $('#ministry-child-list').hide();
            $('#ministry-list').show();
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'ministry';
            lastHeaderTitle = bHT;
            lastDataId = ''; //$('#ministry-child-view list').attr('parent-data-id');
        }

        else if(hash == "#employees-ministry"){
            window.location.hash = "child-ministry";
            $('#cashclear').show();
            $('#ministry-employees-child-list').hide();
            $('#ministry-child-list').show();
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'child-ministry';
            lastHeaderTitle = bHT;
            lastDataId = $('#ministry-child-list').attr('parent-data-id');
        }

        else if(hash == "#employee-ministry"){
            window.location.hash = "employees-ministry";
            $('#cashclear').show();
            $('#ministry-employee-child-list').hide();
            $('#ministry-employees-child-list').show();
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'employees-ministry';
            lastHeaderTitle = bHT;
            lastDataId = $('#ministry-employees-child-list').attr('parent-data-id');
        }

        else if(hash == "#divisional"){
            window.location= "";
            $('#division-list').hide();
            $('#cashclear').show();
            $('#home-list').show();
            $('#header2').find('.title').html(header_title_arr.pop());
            //console.log(bHT);
        }

        else if(hash == "#officers-divisional"){
            window.location.hash = "divisional";
            $('#cashclear').show();
            $('#division-officers-list').hide();
            $('#division-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'divisional';
            lastHeaderTitle = bHT;
            lastDomain = $('#division-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#officer-divisional"){
            window.location.hash = "officers-divisional";
            $('#cashclear').show();
            $('#division-officer-list').hide();
            $('#division-officers-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'officers-divisional';
            lastHeaderTitle = bHT;
            lastDomain = $('#division-officers-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#district"){
            window.location.hash= "divisional";
            $('#cashclear').show();
            $('#district-list').hide();
            $('#division-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'divisional';
            lastHeaderTitle = bHT;
            lastDomain = $('#division-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#officers-district"){
            window.location.hash = "district";
            $('#cashclear').show();
            $('#district-officers-list').hide();
            $('#district-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'district';
            lastHeaderTitle = bHT;
            lastDomain = $('#district-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#officer-district"){
            window.location.hash = "officers-district";
            $('#cashclear').show();
            $('#district-officer-list').hide();
            $('#district-officers-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'officers-district';
            lastHeaderTitle = bHT;
            lastDomain = $('#district-officers-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#upazila"){
            window.location.hash= "district";
            $('#cashclear').show();
            $('#upazila-list').hide();
            $('#district-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'district';
            lastHeaderTitle = bHT;
            lastDomain = $('#district-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#officers-upazila"){
            window.location.hash = "upazila";
            $('#cashclear').show();
            $('#upazila-officers-list').hide();
            $('#upazila-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'upazila';
            lastHeaderTitle = bHT;
            lastDomain = $('#upazila-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#officer-upazila"){
            window.location.hash = "officers-upazila";
            $('#cashclear').show();
            $('#upazila-officer-list').hide();
            $('#upazila-officers-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'officers-upazila';
            lastHeaderTitle = bHT;
            lastDomain = $('#upazila-officers-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#union"){
            window.location.hash= "upazila";
            $('#cashclear').show();
            $('#union-list').hide();
            $('#upazila-list').show();
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'upazila';
            lastHeaderTitle = bHT;
            lastDomain = $('#upazila-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#officers-union"){
            window.location.hash = "union";
            $('#cashclear').hide();
            $('#union-officers-list').hide();
            $('#union-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'union';
            lastHeaderTitle = bHT;
            lastDomain = $('#union-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#officer-union"){
            window.location.hash = "officers-union";
            $('#cashclear').show();
            $('#union-officer-list').hide();
            $('#union-officers-list').show();
            //$('#header2').find('.title').html(header_title_arr.pop());
            var bHT = header_title_arr.pop();
            $('#header2').find('.title').html(bHT);
            lastPage = 'officers-union';
            lastHeaderTitle = bHT;
            lastDomain = $('#union-officers-list').attr('parent-data-domain');
            //console.log(bHT);
        }

        else if(hash == "#search-officers"){
            $('#show-search-information-list,#header2,#main-body').hide();
            $('#header1,#search_option,#office_link,#search_link').show();
            $('#search_key').val('');            
        }

        else if(hash == "#search-officer"){
            window.location.hash = "search-officers";
            $('#show-search-officer-information-list').hide();
            $('#show-search-information-list').show();
        }

    });
}

