
document.addEventListener('DOMContentLoaded', function () {
    var formTimestampField = document.getElementById('form-timestamp');
    
    if (formTimestampField) {
        var currentTimestamp = new Date();
        var formattedTimestamp = currentTimestamp.toISOString().slice(0, 19).replace("T", " ");
        formTimestampField.value = formattedTimestamp;
    }
});

  
  
  
  
  