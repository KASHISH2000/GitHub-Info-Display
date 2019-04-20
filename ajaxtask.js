$(function () {
    function namecall(name){
        $.ajax({
            type:'GET',
            url:'https://api.github.com/users/'+name,
        }).done(function(data){
            $('#para').html('<b>'+data.name+'</b>')
            $('#propic').html('<img src="'+data.avatar_url+'"/>')
        })
    }
    function callajax(name) {
        $('.loader').show()
        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/' + name + '/followers'
        }).done(function (data) {
            $('.loader').hide()
            $.each(data, function (i, ulogin) {
                $('#unames').append('<li>' + ulogin.login + '</li>')
                
            })
        }).catch(function(err){
            $('.loader').hide()
            if(err.status==404){
                alert("User Not Found")
            }
        })
            
        }
    $('#show').click(function () {
        $('#para').show()
        $('#propic').show()
        var user = $('#uname').val();
        namecall(user)
        callajax(user)
    }),
    $('.list').click(function(e){ 
        var kname=e.target.innerHTML;
        $('#unames').empty();
        callajax(kname)
        namecall(kname)
    })
    $('#uname').focus(function () {
        $('#unames').empty();
    })
});
