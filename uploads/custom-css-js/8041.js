<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('.wpcf7-form-control');

    formFields.forEach((field) => {
        // Disable autocomplete
      field.setAttribute('autocomplete', 'off');
        
//         // Disable paste functionality
       field.addEventListener('paste', (event) => {
            event.preventDefault();
        });
    });
});

    document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
// document.onkeydown = function(e) {
//     if (e.keyCode == 123) { // F12
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl + Shift + I
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl + Shift + C
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl + U
//         return false;
//     }
}; </script>
<!-- end Simple Custom CSS and JS -->
