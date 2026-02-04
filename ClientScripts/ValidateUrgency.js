// Client Script: Validate Urgency Field
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    
    if (gForm.getValue('urgency') == '1' && gForm.getValue('impact') != '1') {
        alert('High urgency incidents must also have a high impact!');
    }
}
