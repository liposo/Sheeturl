# Sheeturl
The idea behind this extension was to be able to quickly save links without having to log in into some system. It's is not meant to be a bookmark manager. 

The story behind: I don't like to use my personal accounts at work and there are so many links I come across that I want to save and look it later.  

[Google Script](https://gist.github.com/liposo/19978792ffa0576e0266d9cb1603ca25) used to write and read values in the Google Sheet.

How to use this (at its current state):

1. Download or clone this repository

2. Create a Google sheet and share it, make the permissions like in the image
    ![alt text][logo]

    [logo]: /img/link-sharing.png "Link-sharing"

6. Go to Chome > Extensions (chrome://extensions/) and enable developer mode, click on Load unpacked and select the folder of this extension.

7. Right-click the extension icon and open the options page, place the URL and the sheet name in the input fields and click on save. 

8. Now when the extension icon is clicked the tab title and URL will be saved in that sheet, saved URLs can be seen in the options page.
