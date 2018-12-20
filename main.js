// // Here's my data model
// var ViewModel = function(first, last) {
//     this.firstName = ko.observable(first);
//     this.lastName = ko.observable(last);

//     this.fullName = ko.computed(function() {
//         // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
//         return this.firstName() + " " + this.lastName();
//     }, this);
// };

// ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work

// var viewModel = {
//     details: ko.observable() // Initially blank
// };
// viewModel.details("<em>For further details, view the report <a href='report.html'>here</a>.</em>"); // HTML content appears
// ko.applyBindings(viewModel);

// var viewModel = function (first, last) {
//     _self = this;
//     _self.firstName = ko.observable(first);
//     _self.lastName = ko.observable(last);
//     // _self.fullName = ko.pureComputed(function () {
//     //     return _self.firstName() + ' ' + _self.lastName();
//     // }).extend({
//     //     notify: 'always'
//     // })
//     _self.fullName = ko.pureComputed({
//         read: function() {
//             return _self.firstName() + ' ' + _self.lastName();
//         },
//         write: function(value) {
//             var lastSpacePos = value.lastIndexOf(" ");
//             if(lastSpacePos > 0) {
//                 _self.firstName(value.substring(0, lastSpacePos));
//                 _self.lastName(value.substring(lastSpacePos + 1));
//             }
//         }
//     })
// }

// ko.applyBindings(new viewModel('a', 'b'));

// var profitInformation = {
//     currentProfit: ko.observable(150000)
// };
// profitInformation.currentProfit(-50);

// ko.applyBindings(profitInformation);

// var viewModel = {
//     currentProfit: ko.observable(150000)
// };
 
// // Evalutes to a positive value, so initially we apply the "profitPositive" class
// viewModel.profitStatus = ko.pureComputed(function() {
//     return this.currentProfit() < 0 ? "profitWarning" : "profitPositive";
// }, viewModel);
 
// // Causes the "profitPositive" class to be removed and "profitWarning" class to be added
// function changeStyle() {
//     viewModel.currentProfit(-50);
// }
// ko.applyBindings(viewModel);

// ko.applyBindings({
//     people: [
//         { firstName: 'Bert', lastName: 'Bertington' },
//         { firstName: 'Charles', lastName: 'Charlesforth' },
//         { firstName: 'Denise', lastName: 'Dentiste' }
//     ]
// });

// function AppViewModel() {
//     var self = this;
 
//     self.people = ko.observableArray([
//         { name: 'Bert' },
//         { name: 'Charles' },
//         { name: 'Denise' }
//     ]);
 
//     self.addPerson = function() {
//         self.people.push({ name: "New at " + new Date() });
//     };
 
//     self.removePerson = function() {
//         self.people.remove(this);
//     }
// }
 
// ko.applyBindings(new AppViewModel());   

ko.applyBindings({
    displayMessage: ko.observable(false)
});