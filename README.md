# Numerology
Created a program which converts text into its equivalent in Chaldean numerology.


[Implementation in Google Sheets](#implementation-in-google-sheets)
[Available Functions](#available-functions)



# Implementation in Google Sheets
The program can be implemented on a larger scale using Google Sheets to avoid tediously running each word and finding its conversion.

1. Copy code from Numbers.js
2. Open Google Sheets
3. Select **Tools > Script editor** in the Menu
4. Replace existing code with the code copied in *Step 1*
5. Use `=CHALDEAN(*Insert Cell here*)` in sheets to convert text to its numerology equivalent.

![Recording](Instructions.gif)

# Available Functions
* `=CHALDEAN()` Converts name into numerological equivalent
* `=SUMDIGITS()` Sums numbers to a digit between 1 and 9 
* `=SUMDATE()` Sums date to a digit between 1 and 9
