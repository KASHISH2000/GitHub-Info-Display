$(function (){
    $('#show').click(function (){
        var user=$('#uname').val();
        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/'+user+'/followers',
            success: function (data) {
                $.each(data,function(i, ulogin){
                    $('#unames').append('<li>'+ ulogin.login+ '</li>');
                })
            
            }
        })
    })

});

