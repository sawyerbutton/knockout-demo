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

var viewModel = {
    details: ko.observable() // Initially blank
};
viewModel.details("<em>For further details, view the report <a href='report.html'>here</a>.</em>"); // HTML content appears
ko.applyBindings(viewModel);