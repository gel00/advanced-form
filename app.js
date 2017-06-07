var rawCardList = [
      {
        name : 'Contact',
        question : "How can we contact you?",
        icon : "images/contact.png",
        inputList : [
           {
             label : "email",
             attrList : {
               type : "email", id : "cf-email", required : true, autocomplete : "email", placeholder : "e-mail address"
             }
           },
          {
             label : "tel",
             attrList : {
               type : "tel", id : "cf-tel", required : true, autocomplete : "tel", placeholder : "telephone number"
             }
           }
          ]
        }, {
          name : "Delivery",
          question : "Which address should we send your order to?",
          icon : "images/delivery.png",
          inputList : [
            {
              label : "name",
              attrList : {
                type : "text", id : "cf-name", required : true, autocomplete : "name", placeholder : "full name"
              }
            }, {
              label : "address",
              attrList : {
                type : "text", id : "cf-address", required : true, autocomplete : "street-address", placeholder : "street address"
              }
            }, {
              label : "postal code",
              attrList : {
                class: "cf-25", type : "number", id : "cf-postal", required : true, autocomplete : "postal-code", placeholder : "zipcode", min : "1007", max : "9999", maxlength : 4
              }
            }, {
              label : "city",
              attrList : {
                class: "cf-75", type : "text", id : "cf-city", required : true, autocomplete : "on", placeholder : "city"
              }
            }
          ]
        }, {
          name : "Billing",
          question : "Which address should we use for billing?",
          icon : "images/billing.png",
					controller: 2, //first 2 inputfield
          inputList : [
            {
              label: "same address",
              attrList : {
                class: "cf-50", type : "radio", id : "cf-b-same", name : "billingAddress", value : "same", checked : true
              }
            }, {
              label: "different address",
              attrList : {
                class: "cf-50", type : "radio", id : "cf-b-different", name : "billingAddress", value : "different"
              }
            }, {
              label : "name",
              attrList : {
                type : "text", id : "cf-name-b", required : true, autocomplete : "name", placeholder : "full name", disabled : true
              }
            }, {
              label : "address",
              attrList : {
                type : "text", id : "cf-address-b", required : true, autocomplete : "street-address", placeholder : "street address", disabled : true
              }
            }, {
              label : "postal code",
              attrList : {
                class: "cf-25", type : "number", id : "cf-postal-b", required : true, autocomplete : "postal-code", placeholder : "zipcode", min : "1007", max : "9999", maxlength : 4, disabled : true
              }
            }, {
              label : "city",
              attrList : {
                class: "cf-75", type : "text", id : "cf-city-b", required : true, autocomplete : "on", placeholder : "city", disabled : true
              }
            }
          ]
        }, {
          name : "Payment",
          question : "How would you like to pay?",
          icon : "images/payment.png",
					controller: 2, //first 2 inputfield
          inputList : [
            {
              label: "C.O.D.",
              attrList : {
                class: "cf-50", type : "radio", id : "cf-p-same", name : "paymentmethod", value : "c.o.d."
              }
            }, {
              label: "Credit Card",
              attrList : {
                class: "cf-50", type : "radio", id : "cf-b-different", name : "paymentmethod", value : "credit card",  checked : true
              }
            }, {
              label : "Name on card",
              attrList : {
                type : "text", id : "cf-cc-name", required : true, autocomplete : "cc-name", placeholder : "full name"
              }
            }, {
              label : "Card Number",
              attrList : {
                type : "text", id : "cf-cc-number", required : true, autocomplete : "cc-number", placeholder : "credit card number", pattern : "[0-9-]{12,20}"
              }
            }, {
              label : "CVC",
              attrList : {
                class: "cf-25", type : "text", id : "cf-cc-cvc", required : true, autocomplete : "cc-csc", placeholder : "cvc code", pattern: "[0-9]{3,4}"
              }
            }, {
              label : "expiration date",
              attrList : {
                class: "cf-75", type : "text", id : "cf-cc-exp", required : true, autocomplete : "cc-exp", placeholder : "MM-YYYY", pattern : "^[0-9]{2}-20[12][0-9]$"
              }
            }
          ]
        }
    ];

/*-----view---------*/
var question = document.getElementById("cf-question");
var cardIcon = document.getElementById("cf-icon");
var inputSection = document.getElementById("cf-body");
var progressBar = document.getElementById("cf-progressbar");

var cardList = [];
var activeCard = 0;


function Card(obj) {
  var self = this;
  this.name = obj.name;
	this.controller = obj.controller;
  this.question = obj.question;
  this.icon = obj.icon;
  this.inputList = [];
  this.index = cardList.length;
  obj.inputList.forEach(function(input){
    self.inputList.push(new Input(input));
  });
  cardList.push(this);
  this.valid = false;
}
Card.prototype.show = function() {
  question.textContent = this.question;
  cardIcon.setAttribute("src", this.icon);
  cardIcon.setAttribute("alt", this.name);
  inputSection.innerHTML = "";
  this.inputList.forEach(function(input){
    if (input.elem.type == "radio") {
      input.createLabel().appendChild(input.elem);
    } else {
      inputSection.appendChild(input.elem);
    }
    input.loadValue();
  });
	return this;
};

Card.prototype.next = function() {
  this.validate();
  if(this.valid) {
    loadNextCard();
  }
  return this;
};

Card.prototype.createNext = function() {
	var self = this;
	var next = document.createElement("button");
	next.textContent = "Next";
  next.id = "cf-next";
  inputSection.appendChild(next);
  next.addEventListener("click", function(){
		self.next();
  },false);
	return this;
};
Card.prototype.createSubmit = function(){
  var self = this;
	var submit = document.createElement("input");
	submit.setAttribute("type", "submit");
	submit.value = "Submit";
	inputSection.appendChild(submit);
  submit.addEventListener("click", function(){
		var result = self.validate();
    if (result) {
      alert("Your order has been sent.");
    }
  },false);
	return this;
};

Card.prototype.createButton = function() {
	cardList.length - 1 == activeCard ?
		this.createSubmit() :
		this.createNext();
};

Card.prototype.validate = function() {
	var inputList = this.filterInput();
	var result, i, l=this.inputList.length;
	for (i = 0; i < l; i++) {
    result = this.inputList[i].validate();
    if (!result) {
      break;
    }
  }
  this.valid = result;
  return this;
};

Card.prototype.filterInput = function(){
	var num = this.controller || 0;
	return this.inputList.slice(num);
};

Card.prototype.setDisabled = function(bool){
	this.filterInput().forEach(function(input){
		input.elem.disabled = bool;
	});
	return this;
};

Card.prototype.copyCardTo = function(destination){
	dFiltered = destination.filterInput();
	this.filterInput().forEach(function(input, i){
    input.copyValue(dFiltered[i]).setPair(dFiltered[i]);
	});
	return this;
};

Card.prototype.saveValues = function() {
	this.inputList.forEach(function(input){
		input.value = input.elem.value;
	});
	return this;
};
Card.prototype.loadValues = function() {
	this.inputList.forEach(function(input){
		input.elem.value = input.value || "";
	});
	return this;
};

function loadNextCard(num) {
  num = typeof num != "undefined"? num : activeCard + 1;
  var mileStones = progressBar.getElementsByTagName("span");
  mileStones.item(activeCard).style.background = "#828282";
	cardList[activeCard].saveValues();
  activeCard = num;
  mileStones.item(activeCard).style.background = "#3784e1";
  cardList[activeCard]
		.show()
		.createButton();
}

function Input(obj) {
  var self = this
  this.label = obj.label;
  this.elem = document.createElement("input");
  Object.keys(obj.attrList).forEach(function(attr){
    var value = obj.attrList[attr];
    self.elem.setAttribute(attr,value);
		if (attr == "value") {
			this.value = value;
		}
  });
  this.pattern = this.getPattern();
  this.elem.addEventListener("focusout",function(){
    self.validate();
  },false)
}

Input.prototype.saveValue = function() {
  this.value = this.elem.value;
	return this;
};

Input.prototype.loadValue = function() {
  this.elem.value = this.pair ? this.pair.value : this.value || "";
	return this;
};

Input.prototype.createLabel = function() {
	var label = document.createElement("label");
  label.setAttribute("for",this.elem.id);
  label.textContent = this.label;
  inputSection.appendChild(label);
	return label;
};

Input.prototype.copyValue = function(destination) {
  destination.elem.value = this.value || "";
	return this;
};

Input.prototype.setPair = function(destination) {
  destination.pair = this;
  return this;
}

Input.prototype.removePair = function() {
  delete this.pair;
  return this;
}

Input.prototype.getPattern = function() {
	var pattern = this.elem.getAttribute('pattern');
	if (!pattern) {
		switch(this.elem.getAttribute('type')) {

			case "email" :
				pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
				break;
			case "tel" :
				pattern = /(\+3|0)6\({0,1}\d{2}\){0,1}[- ]{0,1}\d{3}[- ]{0,1}\d{3,4}/;
				break;
			default :
				pattern = /^[a-z0-9]{2,}[ ,.'-]*[a-z0-9]+$/i;
													}
	}//if
	return pattern;
};//fn

Input.prototype.validate = function() {
	var result = this.elem.checkValidity();
	/*var pattern = new RegExp(this.pattern);
	this.valid = pattern.test(input.elem.textContent);
	var result = this.valid;*/
  return result;
}


function createProgressBar() {
  rawCardList.forEach(function(card,i){
    var li = document.createElement("li");
    li.textContent = card.name;
    progressBar.appendChild(li);
    var span = document.createElement("span");
    li.appendChild(span);
    if (i == 0) {
      span.style.background = "#3784e1";
    }
    li.addEventListener("click",function(){
        if(i != activeCard) {
          if(i > activeCard) {
            cardList[activeCard].validate();
            var result = true, j = activeCard;
            while (j < i) {
              if (!cardList[j].valid) {
                result = false;
                var next = document.getElementById("cf-next");
                next.click();
                break;
              }
              j++;
            }
            if(result) {
              loadNextCard(i);
            }

          } else {
            loadNextCard(i);
          }
        }
    },false);
  });
}



var card0 = new Card(rawCardList[0]).show().createNext();
createProgressBar();
var card1 = new Card(rawCardList[1]);
var card2 = new Card(rawCardList[2]);
card1.copyCardTo(card2);
var card3 = new Card(rawCardList[3]);

card2.inputList[0].elem.addEventListener("change", function()	{
 		card1.copyCardTo(card2);
    card2.setDisabled(true);
	},false);

card2.inputList[1].elem.addEventListener("change", function()	{
 		card2.inputList.forEach(function(input) {
	 		input.elem.value = "";
      input.removePair().value = "";
 		});
		card2.setDisabled(false);
	},false);

card3.inputList[0].elem.addEventListener("change", function() {
 		card3.setDisabled(true);
},false);

card3.inputList[1].elem.addEventListener("change", function() {
 		card3.setDisabled(false);
},false);
