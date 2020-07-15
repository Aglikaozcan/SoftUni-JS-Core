function getManipulator() {
    let string = '';

    function append(str) {
        string += str;
    }
    
    function removeStart(n) {
        string = string.substr(n);
    }
    
    function removeEnd(n) {
        string = string.substring(0, string.length - n);
    }
    
    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
};

const myManip = getManipulator();

myManip.append('hello');
myManip.print();
myManip.append('again');
myManip.print();
myManip.removeStart(3);
myManip.print();
myManip.removeEnd(4);
myManip.print();