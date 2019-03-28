window.addEventListener('DOMContentLoaded', ev => {
  console.log('DOM fully loaded and parsed');
  ts.ui.ready(function() {
    var component = ts.ui.get(element);
    component.dosomething();
  });
});
