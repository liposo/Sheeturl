# Sheeturl
The idea behind this extension was to be able to quickly save links without having to log in into some system. It's is not meant to be a bookmark manager. 

The story behind: I don't like to use my personal accounts at work and there are so many links I come across that I want to save and look it later.  

How to use this (at its current state):

1. Download or clone this repository

2. Go to https://script.google.com/home/start and create a new script. (copy and paste the code from the following Gist)

    The code for this script : [Google Script used to write the values in the sheet](https://gist.github.com/liposo/19978792ffa0576e0266d9cb1603ca25)

3. Publish > Deploy as a web app. Save the link for this script.

4. Create a Google sheet and share it publicly (permission to edit). Save the address.

6. Go to Chome > Extensions (chrome://extensions/) and enable developer mode, click on Load unpacked and select the folder of this extension.

7. Right-click the extension icon and open the options page, place the URLs and the sheet name in the input field and click on save. 

8. Now when the extension is clicked the tab title and URL will be saved in that sheet, saved URLs can be seen in the options page.
