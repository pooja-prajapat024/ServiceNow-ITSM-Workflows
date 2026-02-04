// Business Rule: Auto-assign Incident based on Category
(function executeRule(current, gForm, gUser, gSNC) {
    
    if (current.assignment_group.nil()) {
        switch (current.category) {
            case 'network':
                current.assignment_group.setDisplayValue('Network Support');
                break;
            case 'hardware':
                current.assignment_group.setDisplayValue('Hardware Support');
                break;
            case 'software':
                current.assignment_group.setDisplayValue('Software Support');
                break;
            default:
                current.assignment_group.setDisplayValue('Service Desk');
        }
    }

})(current, gForm, gUser, gSNC);
