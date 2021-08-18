# Cash Register Manager
Web based app made using VanillaJS. Helps a cashier to return the balance ammount in correct note dominations and avoid mistakes.

## Working
1. The user has to enter the bill amount first and click on the NEXT button. This will call the nextBtnHandler function. The functions checks if the bill section is the input is correct or not. If the input is not a positive integer a alert message will be thrown. If the input is correct the cash input section will be made to the user by this function.
1. After the user enters the cash amount and clicks on the CALCULATE button the calculateBtnHandler function is called. This functions first converts the string value of bill amount and cash amount to integers. If the bill and cash amount is same a alert message is thrown "Nothing to return". If the bill amount is greater than cash amount alerts message says "Insufficient Balance". If bill amount is smaller than cash amount the balance is displayed in the balance output section.
1. After this the note domination is calculated using the for loop which calls the getDomination and getBalance function repeatedly and displays the output in a table form.