# loginAuthentication
Explaination of coding login Authentication project:

I began the project by making userNAme a constant variable, which is also aglobal variable. It is constant because it will stay the same. It is global so that it can be reached by more than one function or other parts of my code if necessary.

I created a function for the first if statement, which determined what would happen if a certain username was typed in. The parameter is userName because that is what is being tested in the first if statement. The first and third part of my username if statement show alerts. THe second part of my userName if statment shows a prompt to enter a password because the user is an administrator. 

I declared the variable password outside of the two functions because I wanted the second function to have access to it. 

The second function, showPasswordMessage, was created to test the different passwords that are entered if theuser is an admin. The only password that would work or let you enter the site is "TheMAster". It shows an alert of welcome. If the password input is left blank, it will show "Canceled" The reason for including the data type "undefined in the "canceled" alert is because the global variable password has a value of undefined, so if password is left blank, it may process the pasword as undefined. If, the undefined datatype wasnt included in the canceled section, it would have alerted "wrong password" when left blank.

