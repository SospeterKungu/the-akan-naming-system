function calculateAkanDate() {
	// alert("I have clicked");

	var birthdate = document.getElementById("inputBirthDate").value;
	var gender = document.getElementById("selectGender").value;

	if (!birthdate) {
		alert("You've not entered any value for birthdate.");
		return;
	}

	/*
	 * Validate that the date entered is valid. User will enter 06/11/1990
	 */

	var splitBirthDate = birthdate.split("/");

	var day = splitBirthDate[0];
	var month = parseInt(splitBirthDate[1]) - 1;
	var year = splitBirthDate[2];

	if ((day <= 0) || (day > 31)) {
		alert("The day is Invalid. Please enter a valid date!")
		return;
	}

	if ((month < 0) || (month > 12)) {
		alert("The month is Invalid. Please enter a valid month!")
		return;
	}

	// Here a date has been assigned
	// while creating Date object
	var birthDateObj = new Date(year, month, day);

	// day of the week from above Date Object is
	// being extracted using getDay()
	var dayOfWeek = birthDateObj.getDay();
	var dayOfWeekString = getDayOfWeek(dayOfWeek);

	// Printing day of the week
	alert("You were born on a " + dayOfWeekString + ", and your gender is "
			+ gender + ", so your Akan Name is "
			+ getAkanName(gender, dayOfWeekString));


}

function getAkanName(gender, dayOfWeek) {
	/*
	 * Sunday: Kwasi
	 *
	 * Monday: Kwadwo
	 *
	 * Tuesday: Kwabena
	 *
	 * Wednesday: Kwaku
	 *
	 * Thursday: Yaw
	 *
	 * Friday: Kofi
	 *
	 * Saturday: Kwame
	 */

	if (gender == "male") {
		switch (dayOfWeek) {
		case "Sunday":
			return "Kwasi";
			break;
		case "Monday":
			return "Kwadwo";
			break;
    case "Tuesday":
			return "Kwabena";
			break;
    case "Wednesday":
			return "Kwaku";
			break;
    case "Thursday":
      return "Yaw";
      break;
    case "Friday":
			return "Kofi";
			break;
    case "Saturday":
			return "Kwame";
			break;
		default:
			// code block
		}
	} else if (gender == "female") {

		/*
		 * Female Sunday: Akosua
		 *
		 * Monday: Adwoa
		 *
		 * Tuesday: Abenaa
		 *
		 * Wednesday: Akua
		 *
		 * Thursday: Yaa
		 *
		 * Friday: Afua
		 *
		 * Saturday: Ama
		 *
		 */
		switch (dayOfWeek) {
		case "Sunday":
			// code block
			return "Akosua";
			break;
		case "Monday":
			// code block
			return "Adwoa";
			break;
    case "Tuesday":
      return "Adwoa";
      break;
    case "Wednesday":
  		return "Akua";
  		break;
    case "Thursday":
  		return "Yaa";
  		break;
    case "Friday":
			return "Afua";
			break;
    case "Saturday":
			return "Ama";
			break;
		default:
			// code block
		}
	}
}

function getDayOfWeek(day) {
	var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
			'Friday', 'Saturday' ];
	return days[day];
}

function getMonthOfYear(month) {
	var months = [ 'January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December' ];
}
