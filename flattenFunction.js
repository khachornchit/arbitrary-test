function flatInteger(obj) {
    var flatIntegerArray = new Array();
    var localobj = obj;

    if (typeof (localobj) == 'object') {
        if (localobj.length == 1) {
            var number = localobj.pop();
            flatIntegerArray.push(number);
            return flatIntegerArray;
        } else {
            var result = new Array();
            for (var i = 0; i < localobj.length; i++) {
                var item = localobj[i];
                var secondLevel = flatInteger(item);
                result = result.concat(secondLevel);
            }
            return result;
        }
    } else if (typeof (obj) != 'number') {
        flatIntegerArray.push(Number(localobj));
        return flatIntegerArray;
    } else {
        flatIntegerArray.push(localobj);
        return flatIntegerArray;
    }
};

function customFlatten() {
    var customArray = $('#customArray').val().trim();
    var result = flatInteger(JSON.parse(customArray)); //JSON.parse('[' + customArray + ']');
    $('#displayResult').text(JSON.stringify(result));
}