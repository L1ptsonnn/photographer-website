$(document).ready(function () {
    $('#feedbackForm').submit(function (e) {
        e.preventDefault();

        let name = $('#feedbackForm input[name="name"]').val();
        let text = $('#feedbackForm textarea[name="text"]').val();

        if (name && text) {
            $.ajax({
                type: 'POST',
                url: '/submit-feedback/',
                data: {
                    'name': name,
                    'text': text,
                    'csrfmiddlewaretoken': $('#feedbackForm [name="csrfmiddlewaretoken"]').val()
                },
                success: function (response) {
                    if (response.status === 'ok') {
                        alert('Feedback sent!');
                        $('#feedbackForm')[0].reset();
                        $('#feedbackModal').modal('hide');
                        location.reload();
                    } else {
                        alert('Error: ' + response.error);
                    }
                },
                error: function () {
                    alert('An error occurred while submitting feedback.');
                }
            });
        } else {
            alert('Please fill in all fields!');
        }
    });
});
