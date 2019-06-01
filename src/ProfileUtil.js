export default class ProfileUtil {

  static getSeatString(seat) {
    switch(seat) {
      case 0:
        return '東';
      case 1:
        return '南';
      case 2:
        return '西';
      case 3:
        return '北';
      default:
        return '';
    }
  }

  static getDanString(dan) {
    switch(dan) {
      case 16:
        return '七段';
      case 17:
        return '八段';
      case 18:
        return '九段';
      case 19:
        return '十段';
      case 20:
        return '天鳳位';
      default:
        return '';
    }
  }

}