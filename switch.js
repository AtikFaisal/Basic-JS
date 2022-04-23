//  var date = new date()
//  var today = date.getDay()

// switch (today) {
//     case 0:
//         console.log('Today is Sunday')
//         break
//     case 1:
//         console.log('Today is Munday')
//         break
//     case 2:
//         console.log('Today is Tuesday')
//         break
//     case 3:
//         console.log('Today is Wednesday')
//         break
//     case 4:
//         console.log('Today is Thusday')
//         break
//     case 5:
//         console.log('Today is Friday')
//         break
//     case 6:
//         console.log('Today is Saturday')
//         break
//  }
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    }