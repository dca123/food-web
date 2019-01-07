import Mixin from '@ember/object/mixin';

export default Mixin.create({
  errorToast(errorArray, duration = 4000) {
    errorArray.errors[0].forEach((message) => {
      this.toast.error(`${message} !`, '', {
        progressBar: false,
        closeButton: false,
        timeOut: duration
      });
    });
  },
  successToast(message){
    this.toast.success(message, '', {
      progressBar: false,
      closeButton: false,
      timeOut: 5000
    });
  }
});
