$(function () {
    function callajax(name) {
        $('.loader').show()
        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/' + name + '/followers',
            success: function (data) {
                $('.loader').hide()
                $.each(data, function (i, ulogin) {
                    $('#unames').append('<li>' + ulogin.login + '</li>')
                })
            }
        })
    }
    $('#show').click(function () {// show is id of the show button
        var user = $('#uname').val();//uname is id of textfield in which we take user input
        callajax(user)
    }),
    $('.list').click(function(e){ // list is the class of ol tag
        var kname=e.target.innerHTML;
        $('#unames').empty();
        callajax(kname)
    })
    $('#uname').focus(function () {
        $('#unames').empty();
    })

    })
