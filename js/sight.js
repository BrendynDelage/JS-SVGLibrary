const { classProperty } = require("jscodeshift");

class SVGElement { 
    constructor(type){

        this.type = type;
        this.namespace = 'http://www.w3.org/2000/svg';
        this.node = document.createElementNS(this.namespace, this.type);
        return this;
    }

    attr (attrs){

        for(const [key, value] of attrs){
            this.node.setAttributeNS(null,key,value);
        }

        return this;
    }

    append(element){
        if(element.typeof(string)){
            const parent = document.querySelector(element);
        }
        else{
            const parent = element.node;
        }

        parent.appendChild(this.node);

        return this;
    }

};

class Sight{

    constructor(selector, width, height){
        this.svg = new SVGElement('svg').attr({
            viewbox: `0 0 ${width} ${height}`,}).append(selector);
    }   

    draw(type, attrs){
        return new SVGElement(type.attr(attr).append(svg));
    }

}