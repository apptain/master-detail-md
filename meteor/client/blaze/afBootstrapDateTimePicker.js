//This file fixes the issue with the autoformDateTimePicker where nulls data on first input.
//It overrides the rendered method commenting out the autorun that causes the issue
Template.afBootstrapDateTimePicker.rendered = function () {
  var $input = this.$('input');
  var data = this.data;
  var opts = data.atts.dateTimePickerOptions || {};

  // To be able to properly detect a cleared field, the defaultDate,
  // which is "" by default, must be null instead. Otherwise we get
  // the current datetime when we call getDate() on an empty field.
  if (!opts.defaultDate || opts.defaultDate === "") {
    opts.defaultDate = null;
  }

  // instanciate datetimepicker
  $input.datetimepicker(opts);

  // set and reactively update values
  //this.autorun(function () {
  //  var data = Template.currentData();
  //  var dtp = $input.data("DateTimePicker");
  //
  //  // set field value
  //  if (data.value instanceof Date) {
  //    dtp.setDate(data.value);
  //  } else {
  //    dtp.setDate(); // clear
  //  }
  //
  //  // set start date if there's a min in the schema
  //  if (data.min instanceof Date) {
  //    dtp.setMinDate(data.min);
  //  }
  //
  //  // set end date if there's a max in the schema
  //  if (data.max instanceof Date) {
  //    dtp.setMaxDate(data.max);
  //  }
  //});

};
