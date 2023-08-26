export const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

	
// Password matching expression. Password must be at least 8 characters,and must include at least one upper case letter, 
// one lower case letter, and one numeric digit.
export const passwordRegex = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$")