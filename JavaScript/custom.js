



    function digitalClock() {

      var time = new Date(),
      hours = time.getHours(),
      minit = time.getMinutes(),
      second = time.getSeconds(),
      ampm = 'PM';
  

      // AM-PM
      if (hours < 12) {
        ampm = 'AM';
      }

      //0=12 hours
      if (hours == 0) {
        hours = 12;
      } 

      // 12 hours
      if (hours > 12) {
        hours = hours - 12;
      }

      // add 0 before hours
      if (hours < 10) {
        hours = '0' + hours;
      }
       // add 0 before minit
       if (minit < 10) {
        minit = '0' + minit;
      }
       // add 0 before second
       if (second < 10) {
        second = '0' + second;
      }
      
      document.getElementById('clock').innerHTML = hours + ':' + minit + ':' + second + '  ' + ampm;

    }

    setInterval(digitalClock, 1000)