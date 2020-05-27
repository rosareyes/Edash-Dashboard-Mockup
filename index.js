    function Validate() {
        var password = $("password1").value;
        var confirmPassword = $("password2").value;
        if (password != confirmPassword) {
            $("#password2").removeClass("is-valid").addClass("is-invalid");
        }
        $("#password2").removeClass("is-invalid").addClass("is-valid");
    }


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: '#2F80ED',
                borderColor: '#2F80ED',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });
