# Sheeturl

How to use this (at its current state):
1. Download or clone this repository
2. Go to https://script.google.com/home/start and create a new script. (copy and paste the code from the following gist)
    The code for this script : [Google Script used to write the values in the sheet](https://gist.github.com/liposo/19978792ffa0576e0266d9cb1603ca25)
3. Publish > Deploy as web app. Copy the link for this script and put it in the line 3 of background.js
4. Create a Google sheet and share it publicly (permission to edit). Copy the address and put it in line 4 of backgorund.js
5. In line 5 of background.js place the name of your sheet (name of the tab in the document).
6. Go to Chrome > Extensions (chrome://extensions/) and enable developer mode, click on Load unpacked and select the folder of this extension.

