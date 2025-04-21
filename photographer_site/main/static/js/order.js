$(document).ready(function () {
    $('#orderForm').submit(function (e) {
        e.preventDefault();

        let name = $('input[name="name"]').val();
        let email = $('input[name="email"]').val();
        let message = $('textarea[name="message"]').val();

        if (name && email && message) {
            $.ajax({
                type: 'POST',
                url: '/submit-order/',
                data: {
                    'name': name,
                    'email': email,
                    'message': message,
                    'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
                },
                success: function (response) {
                    if (response.status === 'ok') {
                        alert('Your order has been sent!');
                        $('#orderForm')[0].reset();
                        $('#orderModal').modal('hide');
                    } else {
                        alert('Error! Something went wrong!');
                    }
                },
                error: function () {
                    alert('An error occurred while submitting the order.');
                }
            });
        } else {
            alert('Please fill in all fields!');
        }
    });
});
