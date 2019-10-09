export default class Libs {
  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(){

    this.checkUA = {
      Tablet:(this.isUserAgent("windows") != -1 && this.isUserAgent("touch") != -1)
        || this.isUserAgent("ipad") != -1
        || (this.isUserAgent("android") != -1 && this.isUserAgent("mobile") == -1)
        || (this.isUserAgent("firefox") != -1 && this.isUserAgent("tablet") != -1)
        || this.isUserAgent("kindle") != -1
        || this.isUserAgent("silk") != -1
        || this.isUserAgent("playbook") != -1,
      Mobile:(this.isUserAgent("windows") != -1 && this.isUserAgent("phone") != -1)
        || this.isUserAgent("iphone") != -1
        || this.isUserAgent("ipod") != -1
        || (this.isUserAgent("android") != -1 && this.isUserAgent("mobile") != -1)
        || (this.isUserAgent("firefox") != -1 && this.isUserAgent("mobile") != -1)
        || this.isUserAgent("blackberry") != -1,
      ios : this.isUserAgent('iphone') != -1 || this.isUserAgent('ipad') != -1 || this.isUserAgent('iPod') != -1,
      android : this.isUserAgent('android'),
      iosSp : this.isUserAgent('iphone') != -1 || this.isUserAgent('ipod') != -1,
      opera : this.isUserAgent('opera mini') != -1,
      windows : this.isUserAgent('iemobile') != -1,
      BlackBerry : this.isUserAgent('blackberry') != -1,
      chrome : this.isUserAgent('chrome') != -1,
      ie8 : this.isUserAgent('msie 8') != -1,
      ie : this.isUserAgent('msie') != -1 || this.isUserAgent('trident') != -1,
      safari:this.isUserAgent('safari') != -1,
      mac:this.isUserAgent('mac') != -1
    }
  }
  ///////////////////////////
  /// isUserAgent
  ////////////////////////////
  isUserAgent(ua){
    var u=window.navigator.userAgent.toLowerCase();
    return u.indexOf(ua);
  }
  ///////////////////////////
  /// checkSP
  ////////////////////////////
  checkSP(){
    var sp = this.checkUA.android
          || this.checkUA.ios
          || this.checkUA.opera
          || this.checkUA.windows
          || this.checkUA.BlackBerry;
    return sp;
  }
  ///////////////////////////
  /// checkIE
  ////////////////////////////
  checkIE(){
    var ie = this.checkUA.ie;
    return ie;
  }
  ///////////////////////////
  /// popup
  ////////////////////////////
  popup(){
    window.open(url, '', 'width=550, height=450,personalbar=0,toolbar=0,scrollbars=1,resizable=1');
  }

}