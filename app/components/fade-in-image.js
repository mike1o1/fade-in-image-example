import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['fade-in-image'],
  placeholderSource: '',
  sourceImage: '',
  fadeInClass: 'fade-in',

  didInsertElement() {
    this._super(...arguments);

    // For demonstration purposes only, otherwise just call this._setupImage();
    Ember.run.later(this, this._setupImage, 1000);
    //this._setupImage();
  },

  _setupImage() {
    var img = new Image();

    img.onload = () => {
      // Image is loaded, so let's set our background-image and fade class
      this.$('#fade-in-image-placeholder').addClass(this.get('fadeInClass'));
      this.$().css('background-image', `url(${this.get('sourceImage')})`);
    };

    img.src = this.get('sourceImage');
  }
});
