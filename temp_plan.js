// Plan form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('travel-form');
    const loadingDiv = document.getElementById('loading');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const travelData = {
            startingPoint: formData.get('startingPoint'),
            destination: formData.get('destination'),
            duration: formData.get('duration'),
            people: formData.get('people'),
            budget: formData.get('budget'),
            interests: formData.getAll('interests'),
            specialRequirements: formData.get('specialRequirements')
        };

        // Validate form
        if (!validateForm(travelData)) {
            return;
        }

        // Show loading
        form.style.display = 'none';
        loadingDiv.style.display = 'block';

        // Store data in localStorage
        localStorage.setItem('travelData', JSON.stringify(travelData));

        // Simulate API call delay
        setTimeout(() => {
            // Redirect to itinerary page
            window.location.href = 'itinerary.html';
        }, 2000);
    });

    function validateForm(data) {
        if (data.startingPoint === data.destination) {
            alert('Starting point and destination cannot be the same!');
            return false;
        }

        if (data.interests.length === 0) {
            alert('Please select at least one interest!');
            return false;
        }

        return true;
    }

    // Add visual feedback for interest selection
    const interestCheckboxes = document.querySelectorAll('input[name="interests"]');
    interestCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.parentElement;
            if (this.checked) {
                label.style.background = '#e8f5e9';
                label.style.borderColor = '#4caf50';
            } else {
                label.style.background = '';
                label.style.borderColor = '';
            }
        });
    });

    // Auto-save form data
    let autoSaveTimer;
    form.addEventListener('input', function() {
        clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(() => {
            const formData = new FormData(form);
            const autoSaveData = {
                startingPoint: formData.get('startingPoint'),
                destination: formData.get('destination'),
                duration: formData.get('duration'),
                people: formData.get('people'),
                budget: formData.get('budget'),
                interests: formData.getAll('interests'),
                specialRequirements: formData.get('specialRequirements')
            };
            localStorage.setItem('travelFormAutoSave', JSON.stringify(autoSaveData));
        }, 1000);
    });

    // Load auto-saved data if exists
    const autoSavedData = localStorage.getItem('travelFormAutoSave');
    if (autoSavedData) {
        const data = JSON.parse(autoSavedData);
        
        // Fill form with saved data
        if (data.startingPoint) form.elements['startingPoint'].value = data.startingPoint;
        if (data.destination) form.elements['destination'].value = data.destination;
        if (data.duration) form.elements['duration'].value = data.duration;
        if (data.people) form.elements['people'].value = data.people;
        if (data.budget) form.elements['budget'].value = data.budget;
        if (data.specialRequirements) form.elements['specialRequirements'].value = data.specialRequirements;
        
        // Check interests
        if (data.interests && data.interests.length > 0) {
            data.interests.forEach(interest => {
                const checkbox = form.querySelector(`input[name="interests"][value="${interest}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
        }
    }
    localStorage.removeItem("travelData");
    localStorage.removeItem("travelFormAutoSave");
});



