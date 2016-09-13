Template.ReservationForm.created = function () {
  var instance = this;

  instance.serialize = this.data.serialize;
  instance.formSubmit = this.data.formSubmit;
  instance.formReset = this.data.formReset;
  instance.formResetting = this.data.formResetting;
  instance.form = new ReactiveVar(null);

  instance.autorun(function() {
    if(Template.instance().formResetting.get() && Template.instance().form.get()) {
      Template.instance().form.get().reset();
      Template.instance().formReset();
    }
  });
};

Template.ReservationForm.rendered = function () {
  Template.instance().form.set($('form')[0]);
};

Template.ReservationForm.events({
  'submit form': function (e) {
    var form = $(e.target)[0];
    var serialize = Template.instance().serialize;
    var doc = serialize(form, { hash: true });

    Template.instance().formSubmit(doc);
  }
});
