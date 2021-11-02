function getArea(figure){
    switch(figure){

        case 'rect':
            return Rect(arguments[1],arguments[2]);

        case 'trapezoid':
            return Trapezoid(arguments[1],arguments[2],arguments[3]);

        case 'circle':
            return Circle(arguments[1],arguments[2]);

        default:
            break; 
    }
}; 

function Rect(a,b){
    return a*b; 
}

function Trapezoid(a,b,c){
    return ((a+b)*c)/2;
}

function Circle(a,b){
    
    if(b===undefined)
    return a*a* Math.PI;

    else{

        let result=0;

        while(a<=b)
        {
        result += a*a*Math.PI;  
        a++;  
        }

        return result;
    }


}

console.log (getArea('rect',10,15));
console.log (getArea('trapezoid',10,15,12));
console.log (getArea('circle',10));
console.log (getArea('circle',1,3));