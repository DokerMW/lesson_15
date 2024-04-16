'use strict'
const body = document.querySelector('body');

const DomElement = function (selector, height, width, bg, fontSize, textContent){
	this.selector = selector,
	this.height = height,
	this.width = width,
	this.bg = bg,
	this.fontSize = fontSize,
	this.textContent = textContent,
	this.createElem = function(){
		if (this.selector[0] == '.'){
			body.innerHTML = `<div ${this.cssText()} class="${this.selector}">${this.textContent}</div>`;
		} else if (this.selector[0] == '#'){
			body.innerHTML = `<p ${this.cssText()} id="${this.selector}">${this.textContent}</p>`;
		}

	}
	this.cssText = function(){
		return `style="width:${this.width}; height:${this.height};background-color:${this.bg};font-size:${this.fontSize}"`
	}
}

const newElem = new DomElement('.elem', '300px', '600px', 'red', '28px', 'Lorem ipsum dolor');
newElem.createElem();

const square = new DomElement('#square', '100px', '100px', 'green', '28px', 'Lorem');
square.position = 'absolute';
square.top = 0;
square.left = 0;
square.cssText = function(){
	return `style="width:${this.width}; height:${this.height};background-color:${this.bg};font-size:${this.fontSize}; position: ${this.position}; top: ${this.top}px; left: ${this.left}px;"`
}

document.addEventListener("DOMContentLoaded", square.createElem());


window.addEventListener('keydown', e => {
	if (e.keyCode == '38') {
		square.top -= 10;
		square.createElem()
}
else if (e.keyCode == '40') {
		square.top += 10;
		square.createElem()
}
else if (e.keyCode == '37') {
	 square.left -= 10;
	 square.createElem()
}
else if (e.keyCode == '39') {
	 square.left += 10;
	 square.createElem()
}
})

