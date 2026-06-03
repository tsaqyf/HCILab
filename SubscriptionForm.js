document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('subscriptionForm');
    form.addEventListener('submit', function(e){
        // gather fields
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const category = form.querySelector('input[name="category"]');
        const frequency = form.querySelector('input[name="frequency"]');
        const agree = form.querySelector('input[name="agree"]');


        if(!name.value || !name.value.trim()){
            e.preventDefault();
            alert('Please enter your Name.');
            name.focus();
            return false;
        }

        if(name.value.trim().length < 5){
            e.preventDefault();
            alert('Name must be at least 5 characters long.');
            name.focus();
            return false;
        }
        if(!email.value || !email.value.trim()){
            e.preventDefault();
            alert('Please enter your Email.');
            email.focus();
            return false;
        }

        const emailLower = email.value.trim().toLowerCase();
        if(!emailLower.endsWith('@gmail.com')){
            e.preventDefault();
            alert('Email must end with "@gmail.com".');
            email.focus();
            return false;
        }
        if(!category.value || !category.value.trim()){
            e.preventDefault();
            alert('Please enter your Preferred Product Category.');
            category.focus();
            return false;
        }
        if(!frequency.value || !frequency.value.trim()){
            e.preventDefault();
            alert('Please enter your Newsletter Frequency.');
            frequency.focus();
            return false;
        }

        if(!agree.checked){
            e.preventDefault();
            alert('Please accept the Terms and Privacy Agreement before registering.');
            agree.focus();
            return false;
        }

        e.preventDefault();
        alert('Thank you for registering — form data would be submitted in a real site.');
        window.location.href = 'Home.html';
    });
});
